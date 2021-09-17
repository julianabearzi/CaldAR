const express = require('express');

const router = express.Router();
const boilersCategoriesController = require('../controllers/boilers-categories.controller');

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
  boilersCategoriesController.getBoilerCategoryById
);
router.post(
  '/boilers-categories',
  boilersCategoriesController.createBoilerCategory
);
router.delete(
  '/boilers-categories/:id',
  boilersCategoriesController.deleteBoilerCategory
);
router.put(
  '/boilers-categories/:id',
  boilersCategoriesController.updateBoilerCategory
);

module.exports = router;
