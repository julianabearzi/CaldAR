const express = require('express');
const router = express.Router();
const techniciansController = require('../controllers/technicians.controller');

router.get('/technicians', techniciansController.getAllTechnicians);
router.get('/technicians/search', techniciansController.getTechnicianByFirstName);
router.get('/technicians/:id', techniciansController.getTechnicianById);
router.post('/technicians', techniciansController.createTechnician);
router.delete('/technicians/:id', techniciansController.deleteTechnician);
router.put('/technicians/:id',techniciansController.updateTechnician);

module.exports = router;