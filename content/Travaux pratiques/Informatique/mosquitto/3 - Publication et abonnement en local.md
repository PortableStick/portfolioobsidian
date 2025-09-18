---
title: 3 - Publication et abonnement en local
draft: false
tags:
  - mosquitto
  - informatique
---
 Pour ce faire, comprenons déjà ce qu'est un topic :

Un topic MQTT, c'est comme une **salle de discussion** où tous ceux qui s'y abonnent peuvent recevoir les messages qui y sont publiés. Cette salle a une adresse spécifique structurée comme une arborescence de fichier :

**Format** : `niveau1/niveau2/niveau3`

**Exemples** :

- `maison/salon/temperature`

Cet exemple créé un topic température, dans salon, dans maison. On va voir comment discuter dans cette salle. Le vocabulaire est le suivant :

**S'abonner** : écouter tous les messages d'une salle (topic)
**Publier** : envoyer un message dans une salle (topic) 

Exemple : je publie "25°C" dans `maison/salon/temperature`, tous ceux abonnés à ce topic reçoivent automatiquement la valeur. Pour précision, il ne faut pas forcément être abonné à un topic pour envoyer un message !

Pour tester cela, tout se passera dans deux invites de commandes et principalement avec ces 2 commandes :

**Publier :** `.\mosquitto_pub.exe -t topic -m "message"`
**S'abonner :** `.\mosquitto_sub.exe -t topic`

Avant d'essayer cela, on va d'abord lancer le broker :

- Naviguez vers C:\Program Files\mosquitto et tapez `.\mosquitto.exe
	-> cd C:\Program Files\mosquitto
	-> `.\mosquitto.exe`

Aucun message ne devrait apparaître, c'est le signe que tout est ok. Le broker devrait être lancé sur le port par défaut : **1883**.

Essayons maintenant ces commandes, on va s'abonner à un topic `test/essai` avec une invite et envoyer `Hello world` avec une autre :

**Première invite de commande :**

```
 PS C:\Program Files\mosquitto> .\mosquitto_sub.exe -t test/essai

```

Normalement, vous devriez avoir le curseur qui clignote, c'est le signe que cette invite est abonnée au topic et écoute.

**Deuxième invite de commande :***

```
PS C:\Program Files\mosquitto> .\mosquitto_pub.exe -t test/essai -m "Hello World"
PS C:\Program Files\mosquitto>
```

Cette fois, vous devriez obtenir un retour à la ligne, qui indique que le message est envoyé.

**Retour sur la première invite de commande :**

```
PS C:\Program Files\mosquitto> .\mosquitto_sub.exe -t test/essai
Hello World
```

On remarque que l'on a bien reçu le message.

Petite notion supplémentaire, les **wildcards**.

Les wildcards sont des caractères spéciaux pour s'abonner à plusieurs topics d'un coup : `+` remplace exactement un niveau (ex: `maison/+/temp` reçoit `maison/salon/temp` et `maison/cuisine/temp`), tandis que `#` remplace tous les niveaux suivants (ex: `maison/#` reçoit tout ce qui commence par `maison/`).

On ne peut les utiliser que pour s'abonner, jamais pour publier des messages.