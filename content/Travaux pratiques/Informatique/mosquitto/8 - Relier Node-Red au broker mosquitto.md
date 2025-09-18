---
title: 8 - Relier Node-Red au broker mosquitto
draft: false
tags:
  - node-red
  - mosquitto
  - informatique
---
Pour utiliser notre **broker mosquitto** avec Node-Red, on va utiliser les nœuds mqtt.

Essayons sur l'exemple précedent :

**1. Ajouter un nœud MQTT**

- Glissez un nœud "mqtt in" sur le canvas
- Supprimez le nœud slider
- Reliez le nœud mqtt in à la jauge
- Double-cliquez dessus pour le configurer

**2. Configurer la connexion broker**

- Dans "Server", cliquez sur l'icône +
- **Name** : "Mosquitto Local" (nom de votre choix)
- **Connection** :
    - **Server** : `localhost` ou `127.0.0.1`
    - **Port** : `1883` (port par défaut)
- Cliquez sur "Add"
- Cela ramène à la configuration du noeud
- Dans topic, mettez le topic de test `test\essai`

## Test :

Dans l'invite de commande Windows, envoyez un chiffre dans le topic :

```
PS C:\Program Files\mosquitto> .\mosquitto_pub.exe -t test/essai -m 11
PS C:\Program Files\mosquitto>
```

Rendez-vous sur [http://localhost:1880/dashboard](http://localhost:1880/dashboard) et regardez la valeur affichée.
Essayez avec d'autres valeurs.
