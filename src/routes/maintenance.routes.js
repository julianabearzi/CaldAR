const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controller');

router.get('/maintenance', maintenanceController.getAllMaintenance);
router.get('/maintenance/search', maintenanceController.getMaintenanceByBoiler);
router.get('/maintenance/:id', maintenanceController.getMaintenanceById);
router.post('/maintenance', maintenanceController.createMaintenance);
router.delete('/maintenance/:id', maintenanceController.deleteMaintenance);
router.put('/maintenance/:id', maintenanceController.updateMaintenance);

module.exports = router;