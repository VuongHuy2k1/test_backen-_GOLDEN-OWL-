const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController.js')

// GET /api/v1/products
router.get('/', productController.getAllProducts)

// GET /api/v1/products/:id
router.get('/:id', productController.getProductById)

// POST /api/v1/products
router.post('/', productController.createProduct)

// PUT /api/v1/products/:id
router.put('/:id', productController.updateProduct)

// DELETE /api/v1/products/:id
router.delete('/:id', productController.deleteProduct)

module.exports = router
