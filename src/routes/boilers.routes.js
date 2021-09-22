const express = require('express');

const router = express.Router();
const boilersController = require('../controllers/boilers.controller');
const { ValidateCreate, ValidateBoilerId } = require('../validators/boilers');

router.get('/boilers', boilersController.getAllBoilers);
router.get('/boilers/search', boilersController.getBoilerBySituation);
router.get('/boilers/:id', ValidateBoilerId, boilersController.getBoilerById);
router.post('/boilers', ValidateCreate, boilersController.createBoiler);
router.delete('/boilers/:id', ValidateBoilerId, boilersController.deleteBoiler);
router.put(
  '/boilers/:id',
  ValidateBoilerId,
  ValidateCreate,
  boilersController.updateBoiler
);

module.exports = router;
