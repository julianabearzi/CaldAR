const fs = require('fs');

const boilers = fs.readFileSync('src/data/boilers.json');
let boiler = JSON.parse(boilers);

const createBoiler = (req, res) => {
    const {
        id,
        category,
        stock,
        installed,
        reserved,
        client_list,
        technicians_list,
        monthly_maintenance,
        eventual_maintenance
    } = req.body;

    if (!id || !category || !stock || !installed || !reserved || !client_list || !technicians_list || !monthly_maintenance || !eventual_maintenance) {
        res.status(400).send("Incomplete fields");
        return;
    }

    const newBoiler = {
        id,
        category,
        stock,
        installed,
        reserved,
        client_list,
        technicians_list,
        monthly_maintenance,
        eventual_maintenance
    };

    boiler.push(newBoiler);
    fs.writeFileSync('data/boilers.json', JSON.stringify(boiler, null, 2));
    res.json(newBoiler);
};

const getAllBoilers = (req, res) => {
    res.json(boiler);
};

const getBoilerById = (req, res) => {
    const idFound = boiler.some(b => b.id === parseInt(req.params.id));

    if (idFound) {
        res.json(boiler.filter(b => b.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No boiler with the id of ${req.params.id}` });
    }
};

const getBoilerByCategory = (req, res) => {
    const catFound = boiler.some(b => b.category.toLowerCase() === req.query.category.toLowerCase());

    if (catFound) {
        res.json(boiler.filter(b => b.category.toLowerCase() === req.query.category.toLowerCase()));
    } else {
        res.status(400).json({ msg: `No boiler category ${req.query.category}` });
    }
};

const updateBoiler = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        category = '',
        stock = '',
        installed = '',
        reserved = '',
        client_list = '',
        technicians_list = '',
        monthly_maintenance = '',
        eventual_maintenance = ''
    } = req.body;

    const boilerItem = boiler.find(boilerItem => boilerItem.id === parseInt(req.params.id));
    if (boilerItem) {
        const index = boiler.indexOf(boilerItem);
        const updatedBoiler = {
            id,
            category,
            stock,
            installed,
            reserved,
            client_list,
            technicians_list,
            monthly_maintenance,
            eventual_maintenance
        };

        if (!category || !stock || !installed || !reserved || !client_list || !technicians_list || !monthly_maintenance || !eventual_maintenance) {
            res.status(400).send("Incomplete fields");
            return;
        }

        boiler[index] = updatedBoiler;

        fs.writeFileSync('data/boilers.json', JSON.stringify(boiler, null, 2));
        res.json({ msg: 'Boiler updated', updatedBoiler });
    } else {
        res.status(400).json({ msg: `No boiler with the id of ${req.params.id}` });
    }
};

const deleteBoiler = (req, res) => {
    const idFound = boiler.some(b => b.id === parseInt(req.params.id));

    if (idFound) {
        boiler = boiler.filter(b => b.id !== parseInt(req.params.id));

        fs.writeFileSync('data/boilers.json', JSON.stringify(boiler, null, 2));
        res.json({ msg: 'Boiler deleted', boiler });
    } else {
        res.status(400).json({ msg: `No boiler with the id of ${req.params.id}` });
    }
};


module.exports = {
    createBoiler,
    getAllBoilers,
    getBoilerById,
    getBoilerByCategory,
    deleteBoiler,
    updateBoiler
};