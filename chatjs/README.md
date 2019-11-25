# Chat

## Différentes ressources utiles
- Documentation socket.io: [https://socket.io/docs/server-api/#Socket](https://socket.io/docs/server-api/#Socket)

## Initialiser le projet
Rendez vous dans le dossier du projet et lancer ces deux commandes dans un terminal
```
npm install
npm start
```

## Questions
1) Créer un object javascript qui contiendra la liste des utilisateurs avec en propriété(clé) l'id du socket et en valeur son nom

2) Créer un handler qui à la réception de l'event "newUser", enregistrera le nom de l'utilisateur dans notre liste et avertis tous les autres sockets qu'un utilisateur vient de se connecter sur le chat

3) Créer un handler qui à la réception de l'event "sendMessage", envoie un objet js de la forme {name :'', message:'') à tous les sockets.  
Celui ci a pour but de retourner le nom de la personne ainsi que son message

4) Créer un handler qui à la déconnexion avertiras tous les autres sockets du départ de l'utilisateur  et retirera l'utilisateur de notre liste  

5) (**Bonus**) Modifier l'handler qui reçoit les messages pour ajouter plusieurs commandes, une commande qui va renommer l'utilisateur("/rename nouveauPseudo") et le notifier seulement lui. Une commande permettant d'envoyer un message privé à un utilisateur via son pseudo sous la forme "/w nom message"

##Aides
Pour tester le chat, vous pouvez ouvrir plusieurs onglets pour simuler plusieurs utilisateurs.  
Regarder la partie client de l'application pour voir ce qui est attendu.  
