const userController = require('../controller/userController.js')
// const carController = require('../controller/carController.js')

const router = require('express').Router()

router.post('/users',userController.addUser)
router.get('/users',userController.getAllUser)
router.get('/users/:id',userController.getOneUser)
router.put('/users/:id',userController.updateUser)
router.delete('/users/:id',userController.deleteUser)

// router.post('/cars',carController.addCar)
// router.get('/cars',carController.getAllCar)
// router.get('/cars/:id',carController.getOneCarCar)
// router.put('/cars/:id',carController.updateCar)
// router.delete('/cars/:id',carController.deleteCar)

module.exports = router