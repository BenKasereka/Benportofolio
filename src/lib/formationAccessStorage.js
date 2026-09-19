// Déverrouillage côté client après vérification d'un lien d'accès.
//
// Important : ceci ne protège pas les fichiers eux-mêmes (le site est
// statique, hébergé sur GitHub Pages — voir public/formations-content/,
// accessible par URL directe à quiconque la connaît, comme c'était déjà le
// cas avant ce système). Ce flag ne fait que piloter l'affichage : une fois
// posé, l'interface cesse de montrer le panneau "réservé aux inscrits" pour
// la formation concernée, sur cet appareil.

const STORAGE_KEY = 'bk-formation-access'

function readAll() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/** Marque une formation comme déverrouillée sur cet appareil. */
export function grantLocalAccess(formationId) {
  try {
    const all = readAll()
    all[formationId] = true
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch {
    // localStorage indisponible (navigation privée, etc.) — le déverrouillage
    // ne survivra pas au rechargement, mais l'échec est silencieux.
  }
}

/** true si cette formation a déjà été déverrouillée sur cet appareil. */
export function hasLocalAccess(formationId) {
  return readAll()[formationId] === true
}
