# Direction artistique du portfolio de Steve Sanon

## Trois pistes initiales

### Approche 1 — Cartographie d’impact
**Very Brief Intro :** Une identité éditoriale inspirée des cartes, des systèmes et des infrastructures numériques. Le portfolio raconte les projets comme des territoires d’impact, avec une esthétique claire, structurée et africaine sans folklore visuel.

**Probability :** 0.07

### Approche 2 — Atelier logiciel
**Very Brief Intro :** Une interface plus chaleureuse, inspirée d’un carnet d’atelier d’ingénieur : schémas, annotations, composants techniques et documentation visuelle. L’accent est mis sur la pédagogie et la proximité.

**Probability :** 0.04

### Approche 3 — Signal nocturne
**Very Brief Intro :** Un univers sombre et cinématique centré sur les flux de données, avec des accents lumineux et une sensation de console haut de gamme. Il valorise l’IoT et l’IA, mais risque de réduire la dimension institutionnelle du parcours.

**Probability :** 0.09

## Approche retenue — Cartographie d’impact

### Design Movement
Éditorialisme numérique contemporain, croisé avec la cartographie moderniste, le Swiss Style et les interfaces de systèmes d’information géographique. L’interface doit évoquer un tableau de bord de territoire fiable, mais rester suffisamment humaine pour présenter une trajectoire professionnelle.

### Core Principles
1. **Clarté structurelle :** chaque section doit organiser l’information comme une carte lisible, avec une hiérarchie forte et des repères visuels constants.
2. **Preuve par le projet :** les compétences sont montrées à travers des réalisations et des contextes d’usage, plutôt qu’énumérées comme une simple liste de technologies.
3. **Tension entre précision et chaleur :** les grilles, lignes et micro-détails techniques sont équilibrés par des surfaces ivoire, des accents terre cuite et une rédaction directe.
4. **Impact territorial :** le design rappelle que les logiciels construits servent des infrastructures, des institutions et des utilisateurs réels en Afrique et au-delà.

### Color Philosophy
La base ivoire et graphite crée une atmosphère éditoriale, lisible et sérieuse, moins froide qu’un blanc pur et moins générique qu’un fond sombre. Le **vert topographique** devient la signature du portfolio : il suggère les données, les réseaux et la croissance sans tomber dans le cliché du bleu corporate. Le corail terre cuite sert uniquement aux points de décision, aux repères et aux appels à l’action, comme une balise sur une carte.

### Layout Paradigm
La page est organisée comme une **ligne de lecture cartographique** plutôt qu’une suite de blocs centrés. Une colonne latérale discrète sert de légende et de navigation, tandis que le contenu principal alterne entre grands récits, cartes de compétences et études de cas décalées. Les sections utilisent des repères de coordonnées, des lignes de liaison et des compositions asymétriques pour éviter l’effet de template.

### Signature Elements
1. Une fine grille topographique en arrière-plan, utilisée avec parcimonie dans le hero et les transitions de sections.
2. Des étiquettes de coordonnées et de statut, comme « 06°22'N / 01°31'W » ou « SYSTÈME / EN PRODUCTION », pour donner un langage de repérage aux contenus.
3. Une ligne de parcours verticale ponctuée de nœuds colorés, reliant expériences, technologies et territoires.

### Interaction Philosophy
Les interactions doivent ressembler à l’exploration d’une carte : on révèle une information, on suit une connexion, on ouvre une étude de cas. Les boutons sont francs et textuels, les cartes réagissent par un léger déplacement et un changement de bordure, sans effets décoratifs excessifs. Les actions importantes restent toujours compréhensibles au clavier et sur mobile.

### Animation
Les entrées de sections utilisent un fondu court accompagné d’un déplacement vertical de 12 à 20 px. Les nœuds de la timeline peuvent apparaître en cascade avec un décalage de 50 ms, tandis que les lignes de liaison se dessinent très légèrement lors de l’arrivée dans la zone visible. Les hover states se limitent à transform, opacity et border-color, avec une durée de 180 à 240 ms. Toutes les animations non essentielles sont désactivées ou réduites sous `prefers-reduced-motion`.

### Typography System
Les titres utilisent **Space Grotesk** en poids 600 à 700 : sa géométrie évoque l’ingénierie et donne une présence contemporaine aux accroches. Le texte courant utilise **IBM Plex Sans** en poids 400 à 500, pour une lecture confortable et une connotation technique discrète. Les métadonnées et coordonnées utilisent **IBM Plex Mono** en petites capitales, avec un espacement de lettres modéré. Les titres sont courts, contrastés et rarement centrés.

### Brand Essence
**Positionnement :** Steve Sanon conçoit des solutions numériques robustes pour relier données, territoires et décisions — au service d’entreprises, d’institutions et de projets à impact.

**Personnalité :** précis, engagé, transversal.

### Brand Voice
Les titres sont directs, substantiels et orientés vers le résultat. Les appels à l’action sont formulés comme des invitations à explorer ou à collaborer, jamais comme des slogans génériques. Le microcopy doit donner de la visibilité sur le travail : contexte, choix technique, rôle et résultat.

Exemple de headline : « Des systèmes qui transforment les données terrain en décisions fiables. »

Exemple de CTA : « Voir la carte des projets ».

### Wordmark & Logo
Le logo est un symbole abstrait sans texte : trois segments reliés formant à la fois un nœud de réseau, une lettre S décomposée et une petite rose des directions. Le signe doit fonctionner en monochrome, dans un carré de 32 px, avec une construction géométrique reconnaissable. Le nom « Steve Sanon » est composé séparément en Space Grotesk, avec un traitement typographique propre et non illustré.

### Signature Brand Color
**Vert méridien — `#167A68`**. Cette couleur propriétaire évoque les coordonnées, les données vivantes et les infrastructures fiables. Elle doit apparaître dans le logo, les nœuds de timeline, les liens actifs et les éléments de preuve, mais jamais comme un remplissage uniforme de toute l’interface.

## Règle de décision

> Si un élément semble uniquement décoratif, demander : « Est-ce qu’il renforce l’idée de cartographie, de preuve ou d’impact — ou est-ce qu’il dilue la direction artistique ? »

## Rappel par fichier

Chaque nouveau fichier CSS, composant ou page doit commencer par un commentaire indiquant la partie de la direction « Cartographie d’impact » qu’il met en œuvre : hiérarchie éditoriale, langage de repérage, preuve par le projet, palette ivoire/graphite/vert méridien/corail, ou interaction d’exploration.

## Style Decisions

- Le portfolio privilégie une narration de projets et de systèmes plutôt qu’une liste de technologies.
- Le visuel de héros doit rester abstrait et text-safe : les éléments cartographiques seront placés côté droit pour préserver la lisibilité du texte à gauche.
- Les références géographiques proviennent du parcours réel indiqué dans le CV ; aucun résultat chiffré non confirmé ne doit être inventé.
- Les études de cas utiliseront une formulation prudente lorsque le CV ne fournit pas de métriques : rôle, contexte, contribution et technologie seront indiqués sans fabriquer de taux d’amélioration ou de témoignages.
- Le site sera francophone au premier rendu, avec une structure prête à accueillir une version anglaise ultérieure.
