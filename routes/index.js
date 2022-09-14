const express = require('express');
const router = express.Router();
const controllers = require('../controller/controllers');

/* GET home page. */
router.get('/', controllers.myIndex);

module.exports = router;
