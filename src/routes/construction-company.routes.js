const express = require('express');

const router = express.Router();
const constructionsController = require('../controllers/construction-company.controller');
const {
  ValidateCreate,
  ValidateConstructionCompanyId,
} = require('../validators/construction-company');

router.get('/constructions', constructionsController.getAllConstructions);
router.get(
  '/constructions/search',
  constructionsController.getConstructionByFirstName
);
router.get(
  '/constructions/:id',
  ValidateConstructionCompanyId,
  constructionsController.getConstructionById
);
router.post(
  '/constructions',
  ValidateCreate,
  constructionsController.createConstruction
);
router.delete(
  '/constructions/:id',
  ValidateConstructionCompanyId,
  constructionsController.deleteConstruction
);
router.put(
  '/constructions/:id',
  ValidateConstructionCompanyId,
  ValidateCreate,
  constructionsController.updateConstruction
);

module.exports = router;
