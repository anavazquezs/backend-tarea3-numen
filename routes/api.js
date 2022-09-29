const express = require('express');
const router = express.Router();
const controllers = require('../controller/controllers');
const { check } = require('express-validator');
const { validateId } = require('../middlewares/validateId');

/* Get products listening */
/*
El proyecto debe contar con dos rutas:
1- Un GET /ver: vista de productos (localhost:4000/products/view).
2- Un POST /crear (localhost:4000/products/create).
3- Crear PUT y DELETE
4- Hacer los checks con express-validator
 */

router.get('/view', controllers.productsView);
router.get('/view/:id', validateId, controllers.viewOneProduct);


router.post('/create', [
    check('code').not().isEmpty().withMessage('It must be required a product code').isLength({max: 15, min: 5}).withMessage('The code must be between 5 and 15 characters'),
    check('in_stock').not().isEmpty().withMessage('It must be required if there is stock of the product'),
], controllers.createNewProduct);

router.put('/edit/:id', validateId, [
    check('code').not().isEmpty().withMessage('It must be required a product code').isLength({max: 15, min: 5}).withMessage('The code must be between 5 and 15 characters'),
    check('in_stock').not().isEmpty().withMessage('It must be required if there is stock of the product'),
], controllers.editProduct);

router.delete('/delete/:id', validateId, controllers.deleteProduct);

module.exports = router;