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
  check('categoryId', 'CategoryId field incomplete')
    .isMongoId()
    .withMessage('Please enter a valid categoryId')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('boilerSituation', 'Boiler situation field incomplete')
    .custom((value) => {
      if (
        value === 'installed' ||
        value === 'reserved' ||
        value === 'available'
      ) {
        return true;
      }
      throw new Error('Please enter a boiler situation valid');
    })
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('building', 'Please enter a building valid').isMongoId().optional(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

const ValidateBoilerId = [
  param('id').isMongoId(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

module.exports = {
  ValidateCreate,
  ValidateBoilerId,
};
