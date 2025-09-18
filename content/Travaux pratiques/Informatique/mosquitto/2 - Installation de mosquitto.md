---
title: 2 - Installation de mosquitto
draft: false
tags:
  -
---
- Allez sur mosquitto.org/download/
- Dans la section "Windows", cliquez sur "mosquitto-2.0.22-install-windows-x64.exe" ![[Pasted image 20250917140133.png]]
- Lancez l'exécutable téléchargé et suivez l'assistant d'installation
- Cliquez sur "Next" puis "Install" avec les options par défaut
- Ouvrez une invite de commande en tant qu'administrateur
- Naviguez vers C:\Program Files\mosquitto et tapez `.\mosquitto.exe -h`
	-> cd C:\Program Files\mosquitto
	-> `.\mosquitto.exe -h`

Vous devriez obtenir :

```
PS C:\Program Files\mosquitto> .\mosquitto.exe -h
mosquitto version 2.0.22

mosquitto is an MQTT v5.0/v3.1.1/v3.1 broker.

Usage: mosquitto [-c config_file] [-d] [-h] [-p port]

 -c : specify the broker config file.
 -d : put the broker into the background after starting.
 -h : display this help.
 -p : start the broker listening on the specified port.
      Not recommended in conjunction with the -c option.
 -v : verbose mode - enable all logging types. This overrides
      any logging options given in the config file.

See https://mosquitto.org/ for more information.
```

