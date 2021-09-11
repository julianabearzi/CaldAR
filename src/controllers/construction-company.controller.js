const fs = require('fs');

const constructions = fs.readFileSync('src/data/construction-company.json');

let construction = JSON.parse(constructions);

const createConstruction = (req, res) => {
    const {
        id,
        first_name
        
       
    } = req.body;

    if (!id || !first_name ) {
        res.status(400).send("Incomplete fields");
        return;
    }

    const newConstruction = {
        id,
        first_name,      
    };


    construction.push(newConstruction);
    fs.writeFileSync('data/construction-company.json', JSON.stringify(construction, null, 2));
    res.json(newConstruction);

};

const getAllConstructions = (req,res) =>{
    res.json(construction);
}


const getConstructionsById = (req,res) =>{
    const found = construction.some(c => c.id === parseInt(req.params.id));
    if (found) {
        res.json(constructions.filter(c => c.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `No construction with the id of ${req.params.id}`});
    }
}


const getConstructionsByFirstName= (req,res) =>{
    const found = construction.some(c =>c.first_name.toLowerCase() === (req.query.first_name.toLowerCase()));
    if (found) {
        res.json(constructions.filter(c => c.first_name.toLowerCase() === (req.query.first_name.toLowerCase())));
    }
    else{
        res.status(400).json({ msg: `No construction with the name ${req.query.first_name}`});
    }
}


const updateConstruction = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        first_name = '',
    } = req.body;

    const constructionItem = construction.find(constructionItem => constructionItem.id === parseInt(req.params.id));
    if (constructionItem) {
        const index = construction.indexOf(constructionItem);
        const updatedConstruction = {
            id,
            first_name
             
        };

        if (!first_name) {
            res.status(400).send("Incomplete fields");
            return;
        }

        construction[index] = updatedConstruction;

        fs.writeFileSync('data/construction-company.json', JSON.stringify(construction, null, 2));
        res.json({ msg: 'Construction updated', updatedConstruction });
    } else {
        res.status(400).json({ msg: `No construction with the id of ${req.params.id}` });
    }
};




const deleteConstruction = (req,res) =>{
    const found = construction.some(c => c.id === parseInt(req.params.id));
    
    if (found) {
        construction = construction.filter(c => c.id !== parseInt(req.params.id));

        fs.writeFileSync('data/construction-company.json', JSON.stringify(construction, null, 2));
        res.json({ msg: 'Construction deleted', construction });
    } else {
        res.status(400).json({ msg: `No construction with the id of ${req.params.id}` });
    }
}

module.exports ={
    getAllConstructions,
    getConstructionsById,
    getConstructionsByFirstName,
    createConstruction,
    updateConstruction,
    deleteConstruction
}