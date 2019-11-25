const Book = require('../models/book');

/**
 * Function addBook qui créée un livre et le sauvegarde en BDD, si cela réussit rediriger vers la page contenant vos livres
 * @param req
 * @param res
 */
const addBook = null;


/**
 * Function editBook qui permet de modifier un livre via son id et si cela réussit rediriger vers la page contenant vos livres
 * @param req
 * @param res
 */
const editBook = null;


/**
 * Function deleteBook qui permet de supprimer un livre et si cela réussit rediriger vers la page contenant vos livres
 * @param req
 * @param res
 */
const deleteBook = null;


/**
 * Function findById qui permet de récupérer un livre, si cela réussit afficher la page d'édition avec le livre en question
 * @param req
 * @param res
 */
const findById = null;


/**
 * Function findAll qui permet de récupérer tout les livres et si cela réussit afficher la pages books
 * @param req
 * @param res
 */
const findAll = null;



module.exports.addBook = addBook;
module.exports.deleteBook = deleteBook;
module.exports.editBook = editBook;
module.exports.getBookById = findById;
module.exports.fetchAllBooks = findAll;