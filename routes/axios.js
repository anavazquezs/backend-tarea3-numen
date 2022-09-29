const express = require('express');
const router = express.Router();
const controllers = require('../controller/controllers');

/*
Implementar en nuestro backend una conexion a una api publica
 - para esta tarea tendremos que utilizar axios y establecer medios de respuesta en un bloque try and catch
 */

router.get('/', controllers.consultAxiosDitto);
router.get('/pokemon/:name', controllers.consultaAxiosByName);

module.exports = router;