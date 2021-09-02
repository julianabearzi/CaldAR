const express = require('express');
const router = express.Router();
const constructionsController = require('../controllers/construction-company.controller');

router.get('/constructions', constructionsController.getAllConstructions);
router.get('/constructions/:param',(req,res) =>{
    if (req.params.param.match(/^[0-9]*$/)) {
        constructionsController.getConstructionsById(req,res);
    }
    else{
        constructionsController.getConstructionsByFirstName(req,res);
    }

});

router.delete('/constructions/:id', constructionsController.deleteConstruction);
module.exports = router;