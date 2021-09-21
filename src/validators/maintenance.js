const { check, param } = require('express-validator');
const { validateFields } = require('../middlewares/validate');

const ValidateCreate = [
  check('date', 'Incomplete date field')
    .isISO8601()
    .withMessage('Please enter a valid date')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('boiler', 'Incomplete boiler field')
    .isMongoId()
    .withMessage('Please enter a valid boiler')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('building', 'Incomplete building field')
    .isMongoId()
    .withMessage('Please enter a valid building')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('technician', 'Incomplete technician field')
    .isMongoId()
    .withMessage('Please enter a valid technician')
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('maintenanceType', 'Incomplete type field')
    .custom((value) => {
      if (value === 'monthly' || value === 'eventual') {
        return true;
      }
      throw new Error('Please enter a valid type');
    })
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('monthlyHours', 'Incomplete monthly hours field')
    .isInt()
    .trim()
    .exists()
    .not()
    .isEmpty(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

const ValidateMaintenanceId = [
  param('id').isMongoId(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

module.exports = {
  ValidateCreate,
  ValidateMaintenanceId,
};
