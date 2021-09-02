const boilers = require('../data/boilers.json');

const getAllBoilers = (req, res) => {
    res.json(boilers);
};

const getBoilerById = (req, res) => {
    const idFound = boilers.some(boiler => boiler.id === parseInt(req.params.param));

    if(idFound) {
        res.json(boilers.filter(boiler => boiler.id === parseInt(req.params.param)));
    } else {
        res.status(400).json({ msg: `No boiler with the id of ${req.params.param}`});
    }
};

const getBoilerByCategory = (req, res) => {
    const catFound = boilers.some(boiler => boiler.category === req.params.param);

    if(catFound) {
        res.json(boilers.filter(boiler => boiler.category === req.params.param));
    } else {
        res.status(400).json({ msg: `No boiler category ${req.params.param}`});
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