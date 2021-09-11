const constructions = require('../data/construction-company.json');

const getAllConstructions = (req,res) =>{
    res.json(constructions);
}

const getConstructionsById = (req,res) =>{
    const found = constructions.some(construction => construction.id === parseInt(req.params.param));
    if (found) {
        res.json(constructions.filter(construction => construction.id === parseInt(req.params.param)));
    }
    else{
        res.status(404).json({ msg: `No construction with the id of ${req.params.param}`});
    }
}


const getConstructionsByFirstName= (req,res) =>{
    const found = constructions.some(construction =>construction.first_name === req.params.param);
    if (found) {
        res.json(constructions.filter(construction => construction.first_name === req.params.param));
    }
    else{
        res.status(404).json({ msg: `No construction with the name ${req.params.param}`});
    }
}


const deleteConstruction = (req,res) =>{
    const found = constructions.some(construction => construction.id === parseInt(req.params.id));
    if (found) {
        res.json({ msg: 'construction deleted', constructions: constructions.filter(construction => construction.id !== parseInt(req.params.id))});
    }

    else{
        res.status(400).json({ msg: `No construction with the id of ${req.params.id}`});
    }
}

module.exports ={
    getAllConstructions,
    getConstructionsById,
    getConstructionsByFirstName,
    deleteConstruction
}