const { check, param } = require('express-validator');
const { validateFields } = require('../middlewares/validate');

const ValidateCreate = [
  check('description', 'Description field incomplete')
    .isString()
    .withMessage('Please enter a valid description')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('maintenanceMonthlyHours', 'Field incomplete')
    .isInt()
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('eventualMonthlyHours', 'Field incomplete')
    .isInt()
    .trim()
    .exists()
    .not()
    .isEmpty(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

const ValidateBoilerCategoryId = [
  param('id').isMongoId(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

module.exports = {
  ValidateCreate,
  ValidateBoilerCategoryId,
};
