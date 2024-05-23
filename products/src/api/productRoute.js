const express = require('express');
const router = express.Router()
const { 
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
    
 } = require('./products');


router.route('/').post(createProduct) 
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
router.route('/:id').put(updateProduct)
router.route('/:id').delete(deleteProduct)


module.exports = router;


