const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsController')
//require controller

router.get('/', newsController.index)
router.get('/new', newsController.new)
router.get('/:id', newsController.show)
router.post('/', newsController.create)

module.exports = router