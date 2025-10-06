---
title: 4 - Installation de Node-Red
draft: false
tags:
  - mosquitto
  - node-red
  - informatique
---
Déjà, expliquons ce qu'est Node-Red. Node-RED est un outil de programmation visuelle basé sur des flux (flows) qui permet de connecter facilement des appareils IoT, des APIs et des services web.

Au lieu d'écrire du code, vous glissez-déposez des "nœuds" (nodes) sur une interface graphique et les reliez entre eux pour créer des automatisations. Par exemple : connecter un capteur de température → traiter les données → envoyer une alerte email si > 25°C.

Dans notre cas, Node-Red pourra afficher des données reçues en écoutant un topic mosquitto.

**Étape 1 : Installer Node.js**

- Rendez-vous sur la page : [https://nodejs.org/en/download](https://nodejs.org/en/download) 
- Téléchargez l'installateur Windows depuis le bas de la page :

![[Pasted image 20250917142857.png]]
- Lancez le fichier .msi et suivez l'installation

**Étape 2 : Installer Node-RED**

- Ouvrez une invite de commande
- Tapez : `npm install -g --unsafe-perm node-red`

Vous devriez obtenir :

```
PS C:\Windows\system32> npm install -g --unsafe-perm node-red
npm warn "node-red" is being parsed as a normal command line argument.
npm warn Unknown cli config "--unsafe-perm". This will stop working in the next major version of npm.

added 294 packages in 27s

52 packages are looking for funding
  run `npm fund` for details
```

**Étape 3 : Lancer Node-RED**

- Dans l'invite de commande, tapez : `node-red` 
- Ouvrez votre navigateur et rendez-vous sur [http://localhost:1880](http://localhost:1880) 

L'interface Node-RED s'affiche avec la palette de nœuds à gauche et la zone de travail au centre.
