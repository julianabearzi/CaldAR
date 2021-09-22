const express = require('express');

const router = express.Router();
const boilersCategoriesController = require('../controllers/boilers-categories.controller');
const {
  ValidateCreate,
  ValidateBoilerCategoryId,
} = require('../validators/boilers-categories');

router.get(
  '/boilers-categories',
  boilersCategoriesController.getAllBoilerCategories
);
router.get(
  '/boilers-categories/search',
  boilersCategoriesController.getBoilerCategoryByDescription
);
router.get(
  '/boilers-categories/:id',
  ValidateBoilerCategoryId,
  boilersCategoriesController.getBoilerCategoryById
);
router.post(
  '/boilers-categories',
  ValidateCreate,
  boilersCategoriesController.createBoilerCategory
);
router.delete(
  '/boilers-categories/:id',
  ValidateBoilerCategoryId,
  boilersCategoriesController.deleteBoilerCategory
);
router.put(
  '/boilers-categories/:id',
  ValidateBoilerCategoryId,
  ValidateCreate,
  boilersCategoriesController.updateBoilerCategory
);

module.exports = router;
