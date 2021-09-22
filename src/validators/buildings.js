const { check, param } = require('express-validator');
const { validateFields } = require('../middlewares/validate');

const ValidateCreate = [
  check('name', 'Incomplete name field')
    .isString()
    .withMessage('Please enter a valid name')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('address', 'Incomplete address field')
    .isString()
    .withMessage('Please enter a valid address')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('type', 'Incomplete type field')
    .isMongoId()
    .withMessage('Please enter a valid type')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('phone', 'Incomplete phone field')
    .isString()
    .withMessage('Please enter a valid phone')
    .trim()
    .exists()
    .not()
    .isEmpty(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

const ValidateBuildingId = [
  param('id').isMongoId(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

module.exports = {
  ValidateCreate,
  ValidateBuildingId,
};
