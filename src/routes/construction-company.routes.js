const express = require('express');

const router = express.Router();
const constructionsController = require('../controllers/construction-company.controller');

router.get('/constructions', constructionsController.getAllConstructions);
router.get(
  '/constructions/search',
  constructionsController.getConstructionByFirstName
);
router.get('/constructions/:id', constructionsController.getConstructionById);
router.post('/constructions', constructionsController.createConstruction);
router.delete('/constructions/:id', constructionsController.deleteConstruction);
router.put('/constructions/:id', constructionsController.updateConstruction);

module.exports = router;
