const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsController')
//require controller

router.get('/', newsController.index)


module.exports = router