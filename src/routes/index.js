const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employee')


router.post('/employees', EmployeeController.create);
router.get('/employees', EmployeeController.findAll);
router.get('/employees/:id', EmployeeController.findById);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.delete);

module.exports = router;