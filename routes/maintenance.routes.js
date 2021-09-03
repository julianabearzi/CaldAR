const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controller');

router.get('/maintenance', maintenanceController.getAllMaintenance);
router.get('/maintenance/search', maintenanceController.getMaintenanceByBoiler);
router.get('/maintenance/:id', maintenanceController.getMaintenanceById);
router.delete('/maintenance/:id', maintenanceController.deleteMaintenance);

module.exports = router;