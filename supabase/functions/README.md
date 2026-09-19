# Edge Functions — système d'octroi d'accès après paiement

Deux fonctions, chacune déclenchée par un **Database Webhook** Supabase (Dashboard → Database → Webhooks) plutôt que par un appel direct depuis le frontend :

| Fonction | Déclencheur | Rôle |
|---|---|---|
| `notify-admin-on-request` | `INSERT` sur `access_requests` | Email à l'administrateur avec un lien signé (3 jours) vers la preuve de paiement |
| `grant-access-on-approval` | `UPDATE` sur `access_requests` | Si `status` passe à `approved` : crée l'accès, envoie au client son lien unique |

## Configuration des webhooks (à faire une fois, dans le Dashboard)

Pour chaque fonction, une fois déployée (voir plus bas) :

1. Dashboard → **Database → Webhooks** → "Create a new hook"
2. Nom : `notify-admin-on-request` (ou `grant-access-on-approval`)
3. Table : `access_requests`
4. Événements : cocher **Insert** (pour la 1ʳᵉ) ou **Update** (pour la 2ᵉ) uniquement
5. Type : **Supabase Edge Functions**
6. Fonction : sélectionner la fonction correspondante dans la liste
7. Enregistrer

Pas besoin de configurer l'URL ni les en-têtes manuellement — le Dashboard s'en charge quand le type est "Edge Functions".

## Secrets requis

```bash
supabase secrets set RESEND_API_KEY=<votre_clé>
```

`SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` sont injectées automatiquement par Supabase dans chaque Edge Function déployée — ne pas les définir manuellement.

## Adresse d'expédition

Les deux fonctions envoient actuellement depuis `onboarding@resend.dev` (domaine de test Resend, fonctionne sans configuration). Une fois un domaine vérifié dans Resend (Domains → Add Domain), remplacer `FROM_EMAIL` dans les deux fichiers `index.ts` par une adresse sur ce domaine (ex. `contact@votre-domaine.com`) puis redéployer :

```bash
supabase functions deploy notify-admin-on-request
supabase functions deploy grant-access-on-approval
```

## Test de bout en bout

1. Aller sur une page de formation, section inscription, soumettre une fausse demande avec une petite image comme preuve.
2. Vérifier la réception de l'email de notification admin (lien signé cliquable).
3. Dans le Dashboard → Table Editor → `access_requests`, passer le `status` de la ligne à `approved`.
4. Vérifier la réception de l'email client avec le lien `/acces/<token>`.
5. Ouvrir ce lien : la page doit afficher "Accès débloqué" et proposer d'aller à la formation, dont les modules doivent alors apparaître déverrouillés sur cet appareil.
