const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {
    getProducts,
    getProductByID,
    postNewProduct,
} = require('../controllers/productControllers.js');

router.get('/products', getProducts);

router.get('/products/:id', getProductByID);

router.post('/products', postNewProduct);

module.exports = router;