---
title: 9 - Approfondissement nœuds mqtt
draft: false
tags:
  - informatique
  - node-red
  - mosquitto
---
Passons maintenant à un exercice pratique.

Maintenant que nous maîtrisons les bases de MQTT avec Mosquitto et Node-RED sur un seul PC, nous allons passer à l'étape suivante : **la communication entre plusieurs ordinateurs sur un même réseau local**.

### **Objectif**

Créer une petite architecture où :

- Un PC héberge le **broker Mosquitto** (serveur central)
- D'autres PCs agissent comme **publishers** (publient des données)
- D'autres PCs agissent comme **subscribers** (reçoivent des données)
- Node-RED peut être installé sur un ou plusieurs PC pour visualiser et contrôler les échanges

Dans notre cas nous aurons un PC qui agit en tant que **publisher**, et un en tant que **subscriber**, **dashboard** et **broker**.

### Etape 1 : Configurer le broker

## Autoriser les connexions anonymes Mosquitto (sans sécurité)

### **Configuration de Mosquitto**

**1. Localiser le fichier de configuration**
- Windows : `C:\Program Files\mosquitto\mosquitto.conf`
- Linux : `/etc/mosquitto/mosquitto.conf`

**2. Éditer le fichier mosquitto.conf**
- Ouvrez le fichier avec un éditeur de texte
- Ajoutez ou modifiez ces lignes :
```conf
listener 1883 0.0.0.0 #Permets l'écoute sur le port 1883
allow_anonymous true #Permets d'éviter l'authentification
```

**3. Redémarrer Mosquitto**

**Deux options :**

Via le Gestionnaire des tâches :
- Onglet "Services" → Redémarrer "Mosquitto Broker"

Via l'invite de commande :
```cmd
mosquitto -c "C:\Program Files\mosquitto\mosquitto.conf"
```

### Etape 2 : Se connecter au broker

Nous devons d'abord récupérer l'adresse IP du **broker**. L'adresse IP du PC qui héberge le broker Mosquitto est **l'adresse de connexion** que tous les autres appareils du réseau devront utiliser pour communiquer avec lui.

Pour ce faire, rendez-vous dans une invite de commande sur le broker et exécutez la commande suivante :

```
ipconfig
```

Cherchez-ensuite cette ligne :

```
C:\Users\User> ipconfig

Configuration IP de Windows

Carte Ethernet Ethernet :

   Suffixe DNS propre à la connexion. . . :
   Adresse IPv6 de liaison locale. . . . .: fe80::a1b2:c3d4:e5f6:7890%12
   Adresse IPv4. . . . . . . . . . . . . .: 192.168.1.10 <== ICI
   Masque de sous-réseau. . . . . . . . . : 255.255.255.0
   Passerelle par défaut. . . . . . . . . : 192.168.1.1

Carte réseau sans fil Wi-Fi :

   Statut du média. . . . . . . . . . . . : Média déconnecté
   Suffixe DNS propre à la connexion. . . :
```

⚠️ Sélectionnez l'adresse IP de la carte réseau correspondant à votre connexion (Wi-Fi ou ethernet).

Depuis n'importe quel PC du réseau vous pouvez maintenant vous connecter au broker et vous abonner/publier :
```cmd
mosquitto_sub -h 192.168.x.x -t test/topic <- S'abonner à test/topic
mosquitto_pub -h 192.168.x.x -t test/topic -m "Hello world !" <- Publier Hello World dans test/topic
```

Vous savez maintenant comment communiquer par Mosquitto entre plusieurs ordinateurs. En vous aidant du reste du tutoriel, vous pouvez relier votre dashboard Node-Red au broker MQTT et voir vos messages en direct sur votre dashboard.
### **⚠️ AVERTISSEMENT DE SÉCURITÉ**

Cette configuration est **NON SÉCURISÉE** et ne doit être utilisée que pour :
- Tests en développement
- Réseaux locaux isolés
- Environnements de démonstration

**Ne jamais utiliser en production ou sur Internet !**

## Pour aller plus loin

### **Sécurisation : Authentification MQTT**

La configuration actuelle autorise les connexions anonymes, ce qui convient pour des tests mais **n'est pas sécurisé** en production. Pour sécuriser votre broker :

- **Authentification par mot de passe** : Créez des utilisateurs avec `mosquitto_passwd` et configurez `mosquitto.conf` pour exiger l'authentification
- **Chiffrement TLS/SSL** : Ajoutez des certificats pour chiffrer les communications réseau

### **Intégrations possibles**

**Home Assistant :**
Plateforme domotique open source qui s'intègre parfaitement avec Mosquitto pour créer des automatisations complexes et contrôler vos appareils IoT via une interface unifiée.

**ESP32 et microcontrôleurs :**

Connectez des capteurs réels (température, humidité, mouvement) à votre broker Mosquitto. Les ESP32 sont des microcontrôleurs WiFi abordables, parfaits pour créer des objets connectés qui publient des données et reçoivent des commandes.

### **Ressources utiles**

- Documentation Mosquitto : https://mosquitto.org/documentation/
- Home Assistant MQTT : https://www.home-assistant.io/integrations/mqtt/

Voici ce qui marque la fin de ce tutoriel ! Vous êtes maintenant un expert en mosquitto ! 🚀

