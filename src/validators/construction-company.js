const { check, param } = require('express-validator');
const { validateFields } = require('../middlewares/validate');

const ValidateCreate = [
  check('name', 'Name field incomplete')
    .isString()
    .withMessage('Please enter a valid name')
    .trim()
    .exists()
    .not()
    .notEmpty(),
  (req, res, next) => {
    validateFields(req, res, next);
  },
];

const ValidateConstructionCompanyId = [
  param('id').isMongoId(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

module.exports = {
  ValidateCreate,
  ValidateConstructionCompanyId,
};
