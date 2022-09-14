const express = require('express');
const router = express.Router();
const controllers = require('../controller/controllers');

/* GET users listing. */
router.get('/', controllers.greetToUser);

module.exports = router;
