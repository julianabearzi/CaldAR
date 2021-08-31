const express = require('express');
const router = express.Router();
const buildingsController = require('../controllers/buildings.controller');

router.get('/buildings', buildingsController.getAllBuildings);
router.get('/buildings/:param', (req, res) => {
    if (req.params.param.match(/^[0-9]*$/)) {
        buildingsController.getBuildingById(req, res);
    } else {
        buildingsController.getBuildingByType(req, res);
    }
});
router.delete('/buildings/:id', buildingsController.deleteBuilding);

module.exports = router;