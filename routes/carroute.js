const carController = require('../controller/carController')

const router = require('express').Router()

router.get('/cars',carController.getAllCar);
router.get('/cars/:id',carController.getOneCar);
router.post('/cars',carController.addCar);
router.put('/cars/:id',carController.updateCar);
router.delete('/cars/:id',carController.deleteCar);

module.exports = router