const express = require('express');

const router = express.Router();
const boilersController = require('../controllers/boilers.controller');

router.get('/boilers', boilersController.getAllBoilers);
router.get('/boilers/search', boilersController.getBoilerByCategory);
router.get('/boilers/:id', boilersController.getBoilerById);
router.post('/boilers', boilersController.createBoiler);
router.delete('/boilers/:id', boilersController.deleteBoiler);
router.put('/boilers/:id', boilersController.updateBoiler);

module.exports = router;
