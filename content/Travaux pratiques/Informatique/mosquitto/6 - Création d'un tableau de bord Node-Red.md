---
title: 6 - Création d'un tableau de bord Node-Red
draft: false
tags:
  - informatique
  - node-red
---
 Avant de commencer, amenons plus de précisions sur le principe de fonctionnement de Node-Red.
## Principe de fonctionnement de Node-RED

Comme expliqué précédemment, Node-RED fonctionne sur le principe du **flux de données** (flow). Chaque flow est composé de **nœuds**, **connectés** entre eux, qui font transiter des **messages**. Des nœuds **déclencheurs** servent à démarrer chaque flux. :

**Plus de précisions :**

1. **Nœuds** : Chaque bloc dans la palette est un "nœud" qui a une fonction spécifique (lire un capteur, envoyer un email, traiter des données, etc.)
2. **Connexions** : Vous reliez les nœuds avec des fils pour créer un chemin de données. Les **messages** circulent de gauche à droite le long de ces connexions.
3. **Messages** : Les données transitent sous forme d'objets JSON avec une propriété `msg.payload` qui contient la valeur principale.
4. **Déclencheurs** : Un nœud "inject" ou un événement externe démarre le flux, puis chaque nœud traite le message et le transmet au suivant.

## Création d'un premier dashboard

On va créer un dashboard très simple pour appréhender l'outil.

On aura besoin des nœuds suivants :**

- Un nœud **Slider** (curseur)
- Un nœud **Gauge** (jauge)

**Pour configurer un nœud :** Double-cliquez dessus pour modifier ses paramètres par défaut.

**Attention :** Pour que nos composants s'affichent correctement sur la page web, nous devrons les organiser selon cette hiérarchie :

	Tab (onglet) → Group (groupe) → Widgets (nœuds dashboard)



Par défaut, un onglet nommé Flow 1 est créé, c'est celui affiché.

1. **Placer les nœuds :**
    - Dans la colonne de gauche, rechercher `Slider`
    - Sélectionner le nœud `Slider` et faites le glisser sur la zone blanche
    - Recommencez avec le nœud `Gauge`
    - Reliez les nœuds entre eux
2. **Créer un groupe :**
    - Dans la configuration du nœud, section "Group"
    - Cliquez sur le +
    - Nommez votre groupe (ex: "Contrôles")
    - Sélectionnez la page auquel appartient le groupe, ici ça sera la page par défaut.
			![[Pasted image 20250917151155.png]]
	- Mettez l'autre nœud dans le groupe.
3. **Finaliser :**
    - Cliquez sur "Done" pour valider
    - Cliquez sur "Deploy" pour publier le flow
    - Accédez à [http://localhost:1880/dashboard](http://localhost:1880/dashboard) pour voir votre interface, et testez la en bougeant le slider.

![[Pasted image 20250917151437.png]]


Pour vous entraîner, essayez d'ajouter un graphique afin d'observer l'historique de changements de valeur du slider. N'oubliez pas la hiérarchie !

![[Pasted image 20250917151801.png]]





