const express = require('express');
const router = express();

const bookController = require('../controllers/books');

/**
 * Gestion des routes
 */

//Route permettant d'afficher la page de démarrage
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express !' });
});

//Route permettant d'afficher une page d'ajout de livre

//Route permettant d'ajouter un livre

//Route permettant d'afficher tous les livres

//Route permettant d'afficher une page d'édition de livre

//Route permettant de modifier les informations d'un livre

//Route permettant de supprimer un livre

module.exports = router;
