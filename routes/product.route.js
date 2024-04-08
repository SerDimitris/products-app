/**
 * Imports the Express.js module.
 */
const express = require ('express');

/**
 * Creates router instance. Router is an Express.js method
 * that allows to create modular, mountable route handlers.
 */
const router = express.Router();

/**
 * Imports the product.controller module.
 */
const productController = require ('../controllers/product.controller');

/**
 * HTTP request handlers. HTTP method('URL pattern + parametre,
 * associated controller function')
 */
router.get('/', productController.findAll);
router.get('/:id', productController.findOne);
router.post('/', productController.create);
router.patch('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;