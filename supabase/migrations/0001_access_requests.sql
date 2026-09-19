-- Système d'octroi d'accès après paiement — BK-BOOST Ltd.
--
-- Deux tables :
--   access_requests   : une ligne par demande d'inscription payante (preuve de
--                        paiement jointe), en attente de validation manuelle.
--   formation_access  : une ligne par accès accordé (créée uniquement par la
--                        Edge Function d'approbation, jamais par le client).
--
-- Le client n'a pas de compte/session (pas de Supabase Auth ici) : la sécurité
-- repose entièrement sur RLS + une fonction RPC dédiée pour la vérification du
-- lien d'accès, jamais sur un accès direct en lecture aux tables depuis le
-- navigateur.

create extension if not exists pgcrypto;

-- ─────────────────────────────────────────────────────────────────────────
-- Table access_requests
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists public.access_requests (
  id uuid primary key default gen_random_uuid(),
  client_name text not null check (char_length(trim(client_name)) > 0),
  client_email text not null check (client_email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  formation_id text not null,
  payment_method text not null check (payment_method in ('airtel', 'orange', 'mpesa', 'virement')),
  proof_file_path text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  access_token uuid,
  created_at timestamptz not null default now(),
  approved_at timestamptz
);

comment on table public.access_requests is
  'Demandes d''inscription payante avec preuve de paiement jointe, en attente de validation manuelle par l''administrateur.';

-- Le client ne doit jamais pouvoir insérer une ligne déjà "approved" ou fournir
-- son propre access_token : on le force en base, indépendamment de ce que le
-- frontend envoie.
create or replace function public.enforce_pending_request()
returns trigger
language plpgsql
as $$
begin
  new.status := 'pending';
  new.access_token := null;
  new.approved_at := null;
  return new;
end;
$$;

drop trigger if exists trg_enforce_pending_request on public.access_requests;
create trigger trg_enforce_pending_request
  before insert on public.access_requests
  for each row execute function public.enforce_pending_request();

alter table public.access_requests enable row level security;

-- Le formulaire public (clé anon) peut créer une demande, mais ne peut rien
-- lire ni modifier ensuite — pas de session client pour distinguer "sa propre"
-- demande, donc on bloque la lecture/écriture publique entièrement plutôt que
-- de tenter un filtrage par propriétaire. Seule la Edge Function (clé
-- service_role, qui contourne RLS) et le Dashboard Supabase (authentifié
-- comme propriétaire du projet) peuvent lire/modifier ces lignes.
drop policy if exists "anon can insert access requests" on public.access_requests;
create policy "anon can insert access requests"
  on public.access_requests for insert
  to anon
  with check (true);

-- ─────────────────────────────────────────────────────────────────────────
-- Table formation_access
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists public.formation_access (
  id uuid primary key default gen_random_uuid(),
  client_email text not null,
  formation_id text not null,
  access_token uuid not null unique default gen_random_uuid(),
  granted_at timestamptz not null default now()
);

comment on table public.formation_access is
  'Accès accordés après validation d''une demande — créée uniquement par la Edge Function grant-access-on-approval.';

alter table public.formation_access enable row level security;

-- Aucun accès direct (lecture ou écriture) depuis le navigateur : la seule
-- porte d'entrée publique est la fonction RPC get_access_grant ci-dessous, qui
-- ne révèle jamais rien d'autre que "ce token donne accès à telle formation,
-- ou rien". Personne ne peut lister les accès accordés ni les emails clients.

-- ─────────────────────────────────────────────────────────────────────────
-- Fonction RPC de vérification du lien d'accès
-- ─────────────────────────────────────────────────────────────────────────

create or replace function public.get_access_grant(p_token uuid)
returns table (formation_id text)
language sql
security definer
set search_path = public
stable
as $$
  select formation_id
  from public.formation_access
  where access_token = p_token
  limit 1;
$$;

comment on function public.get_access_grant(uuid) is
  'Vérifie un access_token et renvoie uniquement le formation_id associé (ou aucune ligne si invalide) — jamais l''email du client ni la liste des accès.';

revoke all on function public.get_access_grant(uuid) from public;
grant execute on function public.get_access_grant(uuid) to anon;

-- ─────────────────────────────────────────────────────────────────────────
-- Storage — bucket privé pour les preuves de paiement
-- ─────────────────────────────────────────────────────────────────────────

insert into storage.buckets (id, name, public)
values ('payment-proofs', 'payment-proofs', false)
on conflict (id) do nothing;

-- Le client peut déposer un fichier (upload direct depuis le navigateur au
-- moment de la soumission du formulaire), mais ne peut ni le relire, ni le
-- lister, ni le remplacer ensuite. Seule la Edge Function (service_role)
-- génère une URL signée temporaire pour la notification admin.
drop policy if exists "anon can upload payment proofs" on storage.objects;
create policy "anon can upload payment proofs"
  on storage.objects for insert
  to anon
  with check (bucket_id = 'payment-proofs');
