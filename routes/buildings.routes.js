const express = require('express');
const router = express.Router();
const buildingsController = require('../controllers/buildings.controller');

router.get('/buildings', buildingsController.getAllBuildings);
router.get('/buildings/search', buildingsController.getBuildingByType);
router.get('/buildings/:id', buildingsController.getBuildingById);
router.post('/buildings', buildingsController.createBuilding);
router.delete('/buildings/:id', buildingsController.deleteBuilding);
router.put('/buildings/:id', buildingsController.updateBuilding);

module.exports = router;