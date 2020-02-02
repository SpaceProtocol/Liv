const express = require('express')

const UserCtrl = require('../controllers/user-controller')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.put('/user/name/:name', UserCtrl.updateUserByName)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user/name/:name', UserCtrl.getUserByName)
router.get('/users', UserCtrl.getUsers)
router.post('/blast', UserCtrl.blast)

module.exports = router
