const transController = require('../controller/transController')

const router = require('express').Router();

router.get('/trans',transController.getAllTrans);
router.get('/trans/:id',transController.getOneTrans);
router.post('/trans',transController.addTrans);
router.put('/trans/:id',transController.updateTrans);
router.delete('/trans/:id',transController.deleteTrans);

module.exports = router;
