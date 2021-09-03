const boilers = require('../data/boilers.json');

const getAllBoilers = (req, res) => {
    res.json(boilers);
};

const getBoilerById = (req, res) => {
    const idFound = boilers.some(boiler => boiler.id === parseInt(req.params.id));

    if(idFound) {
        res.json(boilers.filter(boiler => boiler.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No boiler with the id of ${req.params.id}`});
    }
};

const getBoilerByCategory = (req, res) => {
    const catFound = boilers.some(boiler => boiler.category.toLowerCase() === req.query.category.toLowerCase());

    if(catFound) {
        res.json(boilers.filter(boiler => boiler.category.toLowerCase() === req.query.category.toLowerCase()));
    } else {
        res.status(400).json({ msg: `No boiler category ${req.query.category}`});
    }
};


const deleteBoiler = (req, res) => {
    const idFound = boilers.some(boiler => boiler.id === parseInt(req.params.id));

    if(idFound) {
        res.json({ msg: 'boiler deleted', boilers: boilers.filter(boiler => boiler.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg: `No boiler with the id of ${req.params.id}`});
    }
};


module.exports = {
   getAllBoilers,
   getBoilerById,
   getBoilerByCategory,
   deleteBoiler
};