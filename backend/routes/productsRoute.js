const express = require('express');
const { createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct } = require('../controllers/productsController');
const router = express.Router();

router.route('/products').get(getAllProducts);

router.route('/product/new').post(createProduct);

router.route('/product/:id').get(getProductDetails).put(updateProduct).delete(deleteProduct);

module.exports = router;