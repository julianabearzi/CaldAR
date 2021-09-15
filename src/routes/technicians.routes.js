const express = require('express');
const router = express.Router();
const techniciansController = require('../controllers/technicians.controller');

router.get('/technicians', techniciansController.getAllTechnicians);
router.get('/technicians/:param', (req, res) => {
    if (req.params.param.match(/^[0-9]*$/)) {
        techniciansController.getTechnicianById(req, res);
    } 
    else {
        techniciansController.getTechnicianByFirstName(req, res);
    }
});
router.delete('/technicians/:id', techniciansController.deleteTechnician);

module.exports = router;