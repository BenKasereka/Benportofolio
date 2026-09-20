// Suivi de progression par module, sur cet appareil — même mécanisme que
// formationAccessStorage.js (localStorage, échoue silencieusement). Marque
// un module "terminé" quand l'apprenant clique le bouton de confirmation en
// fin de diapositives ; sert à calculer le pourcentage d'avancement de la
// formation affiché dans le sommaire des modules.

const STORAGE_KEY = 'bk-module-progress'

function readAll() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/** Marque un module comme terminé pour une formation donnée, sur cet appareil. */
export function markModuleComplete(formationId, moduleNumber) {
  try {
    const all = readAll()
    all[formationId] = { ...all[formationId], [moduleNumber]: true }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  } catch {
    // localStorage indisponible — la progression ne sera pas mémorisée, échec silencieux.
  }
}

/** true si ce module a déjà été marqué terminé sur cet appareil. */
export function isModuleComplete(formationId, moduleNumber) {
  return readAll()[formationId]?.[moduleNumber] === true
}

/** Nombre de modules terminés parmi une liste de numéros de module. */
export function completedCount(formationId, moduleNumbers) {
  const done = readAll()[formationId] || {}
  return moduleNumbers.filter((n) => done[n] === true).length
}
