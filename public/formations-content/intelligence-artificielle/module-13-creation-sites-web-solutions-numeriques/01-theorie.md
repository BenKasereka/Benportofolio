# Module 13 — IA pour la Création de Sites Web & Solutions Numériques — Du cahier des charges au site généré
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Identifier l'outil no-code/IA adapté à votre besoin réel (site vitrine simple, application avec logique métier, prototype rapide à montrer) plutôt que d'utiliser par défaut le premier outil connu.
- Rédiger un cahier des charges complet — objectif, pages ou écrans, fonctionnalités indispensables, style visuel, public cible — avant de générer quoi que ce soit.
- Construire un prompt de génération complet qui reprend ce cahier des charges, pour obtenir dès la première version un résultat exploitable plutôt qu'un brouillon générique à tout reprendre.
- Itérer en langage courant sur un site ou une application déjà générés, en formulant des demandes de correction précises et actionnables plutôt que des jugements vagues.
- Tester vous-même le résultat produit par l'IA avant toute diffusion (liens, formulaires, affichage mobile), sans déléguer cette vérification à l'outil.

### Panorama réaliste des outils no-code/IA : lequel choisir, et pour quoi faire

Il existe aujourd'hui une multitude d'outils qui promettent de « créer un site en un prompt ». En pratique, quatre d'entre eux couvrent l'essentiel des besoins professionnels courants, et ils ne se valent pas pour le même usage.

**Claude Code** — un agent en ligne de commande qui lit, écrit et modifie directement les fichiers d'un vrai projet de code sur votre machine. C'est l'outil le plus précis des quatre en matière de contrôle du résultat, mais aussi le plus technique : il suppose d'être à l'aise avec un terminal et avec la logique d'un projet de code, ce que le Module 10 de cette formation (VS Code & Copilot) permet justement d'acquérir. Réservez Claude Code aux cas où vous devez modifier un projet existant, garder une main précise sur le résultat final, ou automatiser des tâches répétitives sur un code déjà en place.

**Lovable et v0** — deux outils construits autour d'un principe similaire : vous décrivez en langage naturel l'écran ou l'interface que vous voulez, et l'outil génère une interface soignée, modifiable par un nouvel échange en langage courant. Ils sont orientés design d'écran : très efficaces pour une page de présentation, un tableau de bord visuel ou une maquette interactive à montrer rapidement, moins adaptés à une logique métier lourde (paiement, base de données complexe, comptes utilisateurs multi-rôles) qu'il faudra alors compléter avec un outil plus technique.

**Bolt** — génère une application complète, avec la structure technique nécessaire pour fonctionner réellement (pas seulement une maquette visuelle), et propose un déploiement rapide vers une adresse accessible en ligne. C'est l'outil à privilégier quand le livrable attendu est une application qui doit réellement tourner et être testée en conditions réelles, pas uniquement un aperçu d'écran.

Le critère de choix n'est donc jamais « lequel est le meilleur » dans l'absolu, mais deux questions concrètes : quel est le niveau de complexité réel du besoin (une page de présentation n'a pas les mêmes exigences qu'une application avec logique métier), et quel est votre niveau d'autonomie technique (à l'aise avec un terminal et un projet de code, ou pas du tout) ?

| Besoin | Outil à privilégier | Pourquoi |
|---|---|---|
| Site vitrine simple (présentation, contact) | Lovable ou v0 | Génération rapide d'une interface soignée, sans logique métier à gérer |
| Application avec logique métier (calcul, données, comptes utilisateurs) | Bolt | Génère une structure applicative complète, prête à être testée et déployée |
| Modification d'un projet de code existant, contrôle fin du résultat | Claude Code | Agent capable de lire et modifier directement les fichiers d'un vrai projet (requiert l'aisance acquise au Module 10 de cette formation) |
| Prototype ou maquette à montrer rapidement, sans engagement de déploiement | v0 ou Lovable | Aperçu immédiat, modifiable en continu par échange en langage courant |

Dans tous les cas, ChatGPT ou Copilot restent utiles en amont, pour vous aider à structurer votre cahier des charges ou à reformuler une idée encore floue avant de la transmettre à l'outil de génération choisi — ce n'est pas l'outil qui génère le site qui doit clarifier votre besoin à votre place.

### Pourquoi cadrer avant de générer change tout le résultat

C'est le point le plus déterminant de ce module, avant même le choix de l'outil. Un prompt du type « fais-moi un site pour mon activité de conseil » produit un résultat générique : une structure de page par défaut, un texte de remplissage, un style visuel arbitraire — un résultat qu'il faut ensuite reprendre presque intégralement, ce qui revient à avoir perdu le temps que l'outil était censé faire gagner.

Un cahier des charges, même simple, rédigé avant de générer quoi que ce soit — objectif du site, pages nécessaires, fonctionnalités indispensables, style visuel souhaité, public cible — change la nature du résultat obtenu. L'IA ne devine plus votre besoin, elle l'exécute. Ce cahier des charges n'a pas besoin d'être long : trois à cinq phrases précises suffisent la plupart du temps, à condition qu'elles couvrent réellement ces cinq dimensions. C'est tout l'objet de la norme CLARTE et de la méthode STAR détaillées dans la partie Outils & Guide Pratique de ce module : elles servent précisément à ne jamais oublier un de ces éléments au moment de rédiger le prompt.

### Vocabulaire clé à maîtriser dès ce module

- **No-code/IA** : catégorie d'outils qui génèrent une interface ou une application fonctionnelle à partir d'une description en langage naturel, sans écriture manuelle de code par l'utilisateur.
- **Cahier des charges (ou brief)** : document court rédigé avant toute génération, qui fixe l'objectif, les pages ou écrans, les fonctionnalités indispensables, le style visuel et le public cible d'un site ou d'une application.
- **Itération** : cycle de correction en langage courant appliqué à un résultat déjà généré, par opposition à une régénération complète depuis zéro à chaque ajustement.
- **Déploiement** : mise en ligne effective du site ou de l'application générés, avec une adresse réellement accessible et testable, par opposition à un simple aperçu visuel non fonctionnel.
