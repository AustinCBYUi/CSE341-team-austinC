const express = require('express');
const libraryController = require('../controllers/library');
const validate = require('../middleware/validation');
const router = express.Router();

router
    .get('/', libraryController.getList)
    .get('/:id', libraryController.getSingle)
    .post('/', validate.validateBook, libraryController.addBook)
    .put('/:id', validate.validateBook, libraryController.updateBook)
    .delete('/:id', libraryController.deleteBook)
    .put('/checkout/:id', libraryController.checkoutBook)


module.exports = router;