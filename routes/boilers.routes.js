const express = require('express');
const router = express.Router();
const boilersController = require('../controllers/boilers.controller');

router.get('/boilers', boilersController.getAllBoilers);
router.get('/boilers/:param', (req, res) => {
    if (req.params.param.match(/^[0-9]*$/)) {
        boilersController.getBoilerById(req, res);
    } 
    else {
        boilersController.getBoilerByCategory(req, res);
    }
});
router.delete('/boilers/:id', boilersController.deleteBoiler);

module.exports = router;