const express = require('express');
const router = express.Router();
const controllers = require('../controller/controllers');

/* Get products listening */
/*
El proyecto debe contar con dos rutas:
1- Un GET /ver: vista de productos (localhost:4000/products/view).
2- Un POST /crear (localhost:4000/products/create).
 */

router.get('/view', controllers.productsView);
router.post('/create', controllers.createNewProduct);

module.exports = router;