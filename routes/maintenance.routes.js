const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenance.controller');

router.get('/maintenance', maintenanceController.getAllMaintenance);
router.get('/maintenance/:param', (req, res) => {
    if (req.params.param.match(/^[0-9]*$/)) {
        maintenanceController.getMaintenanceById(req, res);
    }
    else {
        maintenanceController.getMaintenanceByBoiler(req, res);
    }
});
router.delete('/maintenance/:id', maintenanceController.deleteMaintenance);

module.exports = router;