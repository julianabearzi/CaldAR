const { check, param } = require('express-validator');
const { validateFields } = require('../middlewares/validate');
const ValidateCreate = [
  check('name', 'First_Name field incomplete')
    .isString()
    .withMessage('Please enter a valid name')
    .trim()
    .exists()
    .not()
    .notEmpty(),
  check('lastname', 'Last_Name field incomplete')
    .isString()
    .withMessage('Please enter a valid name')
    .trim()
    .exists()
    .not()
    .notEmpty(),
  check('phone', 'Phone_Number field incomplete')
    .isInt()
    .trim()
    .exists()
    .not()
    .isEmpty(),
  check('dni', 'Dni field incomplete').isInt().trim().exists().not().isEmpty(),
  check('boiler_specialty.*', 'Boiler_Specialty field incomplete')
    .trim()
    .isMongoId()
    .exists()
    .not()
    .isEmpty(),
  (req, res, next) => {
    validateFields(req, res, next);
  },
];

const ValidateTechnicianId = [
  param('id').isMongoId(),

  (req, res, next) => {
    validateFields(req, res, next);
  },
];

module.exports = {
  ValidateCreate,
  ValidateTechnicianId,
};
