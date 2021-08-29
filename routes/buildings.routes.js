const express = require('express');
const router = express.Router();
const buildingsController = require('../controllers/buildings.controller');

router.get('/buildings', buildingsController.getAllBuildings);
router.get('/buildings/:id', buildingsController.getBuildingById);
router.delete('/buildings/:id', buildingsController.deleteBuilding);

module.exports = router;