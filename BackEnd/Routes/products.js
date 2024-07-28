const express = require('express');
const { getAllProducts, getAllProductsTesting } = require('../Controllers/products');
const router = express.Router();

router.get('/',getAllProducts);
router.get('/testing',getAllProductsTesting);

module.exports = router;