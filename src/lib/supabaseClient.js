import { createClient } from '@supabase/supabase-js'

// ── Configuration Supabase (client anon, navigateur) ────────────────
// Les identifiants viennent de variables d'environnement Vite (voir
// .env.example). Comme pour EmailJS, l'URL de projet et la clé "anon" ne sont
// pas des secrets : Supabase les envoie au navigateur pour authentifier les
// appels, et l'accès réel est contrôlé côté serveur par Row Level Security
// (voir supabase/migrations/0001_access_requests.sql) — jamais par cette clé.
//
// La clé "service_role" (droits complets, contourne RLS) ne doit JAMAIS
// apparaître ici ni dans aucun fichier de ce dépôt : elle vit uniquement
// comme secret des Edge Functions (voir supabase/functions/*).
// ────────────────────────────────────────────────────────────────────

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

/** true si les identifiants Supabase sont présents et non vides. */
export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)

export const supabase = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null
