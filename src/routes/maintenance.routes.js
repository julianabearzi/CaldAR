const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controller');
const { validateFields } = require('../middlewares/validate');
const {
  ValidateCreate,
  ValidateMaintenanceId,
} = require('../validators/maintenance');

router.get('/maintenance', maintenanceController.getAllMaintenance);
router.get(
  '/maintenance/search',
  [check('boiler').isMongoId(), validateFields],
  maintenanceController.getMaintenanceByBoiler
);
router.get(
  '/maintenance/:id',
  ValidateMaintenanceId,
  maintenanceController.getMaintenanceById
);
router.post(
  '/maintenance',
  ValidateCreate,
  maintenanceController.createMaintenance
);
router.delete(
  '/maintenance/:id',
  ValidateMaintenanceId,
  maintenanceController.deleteMaintenance
);
router.put(
  '/maintenance/:id',
  ValidateMaintenanceId,
  ValidateCreate,
  maintenanceController.updateMaintenance
);

module.exports = router;
