const express = require('express');
const router = express.Router();
const techniciansController = require('../controllers/technicians.controller');

router.get('/technicians', techniciansController.getAllTechnicians);

router.get('/technicians/search', techniciansController.getTechnicianByFirstName);

router.get('/technicians/:id', techniciansController.getTechnicianById);

router.delete('/technicians/:id', techniciansController.deleteTechnician);

module.exports = router;