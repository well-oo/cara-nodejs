# Books

## Différentes ressources utiles
- Documentation mongoose: [https://mongoosejs.com/docs/guides.html](https://mongoosejs.com/docs/guides.html)
- Documentation express: [https://expressjs.com/en/4x/api.html](https://expressjs.com/en/4x/api.html)
## Initialiser le projet 
Lancer mongoDB:  
Sur un premier terminal lancer les commandes suivantes:
```
mkdir -p ~/data/db
mongod --dbpath ~/data/db/
```

Sur un autre terminal lancer mongo:
```
mongo
```
Rendez vous dans le dossier du projet et lancer ces deux commandes dans un terminal
```
npm install
npm start
```

## Questions

1)Créer le schema du livre dans le fichier book.js dans le package models  

2)Créer la route permettant d'afficher la page d'ajout de livre.  
Cette page est contenu dans le package views et se nomme add.pug.  
Le but ici est d'afficher cette page lorsque notre serveur reçoit une requête de type get.  
Toutes les vues à afficher ont une variable local sous forme d'objet JS avec une propriété title contenant le titre de la page  

3)Créer la route et la fonction permettant d'ajouter un livre en base de données.  
Notre fichier add.pug comporte un formulaire d'ajout de livre via un POST sur le chemin /add.  
Le but est de créer la fonction addBook dans le controller qui permet d'ajouter un livre et de l'appeler lors d'une requête HTTP d'ajout de livre.

Ajouter un livre via le formulaire.  
Ici mongoose va créer notre base de données et notre collection qu'à partir de l'ajout d'une valeur 
 
Vérification en ligne de commande de l'insertion du livre en exécutant ces commandes dans un terminal:
```
mongo
show databases
use books
db.books.find().pretty(); // Montre la liste des données 
```

4)Créer la route et la fonction permettant d'afficher tous les livres  
La page books prend en variable un objet JS contenant une propriétés books    
Pour que ce soit plus simple, on appelera directement la page books après avoir récupéré les livres  

5)Créer la route permettant d'afficher la page d'édition puis créer la route et la fonction permettant de récupérer et modifier un livre  
La page edit contient en variable local le livre à modifier  

6)Créer la route et la fonction permettant de supprimer un livre  
Regarder ce que fait le bouton delete dans le tableau contenant les livres pour savoir comment procéder