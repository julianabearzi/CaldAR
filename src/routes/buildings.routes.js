const express = require('express');

const router = express.Router();
const buildingsController = require('../controllers/buildings.controller');
const {
  ValidateCreate,
  ValidateBuildingId,
} = require('../validators/buildings');

router.get('/buildings', buildingsController.getAllBuildings);
router.get('/buildings/search', buildingsController.getBuildingByName);
router.get(
  '/buildings/:id',
  ValidateBuildingId,
  buildingsController.getBuildingById
);
router.post('/buildings', ValidateCreate, buildingsController.createBuilding);
router.delete(
  '/buildings/:id',
  ValidateBuildingId,
  buildingsController.deleteBuilding
);
router.put(
  '/buildings/:id',
  ValidateBuildingId,
  ValidateCreate,
  buildingsController.updateBuilding
);

module.exports = router;
