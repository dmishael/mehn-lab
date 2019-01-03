const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsController')
//require controller

router.get('/', newsController.index)

router.get('/newslink/:id/chirps', chirpController.index)
router.get('/newslink/:id/chirps/new', chirpController.new)
router.get('/newslink/:id/chirps/:chirpId', chirpController.show)
router.post('/newslink/:id/chirps', chirpController.create)
router.get('/newslink/:id/chirps/:chirpId/edit', chirpController.edit)
router.patch('/newslink/:id/chirps/:chirpId', chirpController.update)
router.delete('/newslink/:id/chirps/:chirpId', chirpController.delete)

module.exports = router