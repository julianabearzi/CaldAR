const express = require('express');

const router = express.Router();
const techniciansController = require('../controllers/technicians.controller');
const {
  ValidateTechnicianId,
  ValidateCreate,
} = require('../validators/technicians');

router.get('/technicians', techniciansController.getAllTechnicians);
router.get(
  '/technicians/search',
  techniciansController.getTechnicianByFirstName
);
router.get(
  '/technicians/:id',
  ValidateTechnicianId,
  techniciansController.getTechnicianById
);
router.post(
  '/technicians',
  ValidateCreate,
  techniciansController.createTechnician
);
router.delete(
  '/technicians/:id',
  ValidateTechnicianId,
  techniciansController.deleteTechnician
);
router.put(
  '/technicians/:id',
  ValidateTechnicianId,
  ValidateCreate,
  techniciansController.updateTechnician
);

module.exports = router;
