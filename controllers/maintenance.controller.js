const maintenance = require('../data/maintenance.json');

const getAllMaintenance = (req, res) => {
    res.json(maintenance);
};

const getMaintenanceById = (req, res) => {
    const idFound = maintenance.some(m => m.id === parseInt(req.params.id));

    if (idFound) {
        res.json(maintenance.filter(m => m.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: `No maintenance with the id ${req.params.id}` });
    }
};

const getMaintenanceByBoiler = (req, res) => {
    const idFound = maintenance.some(m => m.boiler.toLowerCase() === (req.query.boiler.toLowerCase()));

    if (idFound) {
        res.json(maintenance.filter(m => m.boiler.toLowerCase() === (req.query.boiler.toLowerCase())));
    }
    else {
        res.status(400).json({ msg: `No maintenance with the boiler ${req.query.boiler}` });
    }
};

const deleteMaintenance = (req, res) => {
    const idFound = maintenance.some(m => m.id === parseInt(req.params.id));

    if (idFound) {
        res.json({ msg: 'Maintenance deleted', maintenance: maintenance.filter(m => m.id !== parseInt(req.params.id)) });
    } else {
        res.status(400).json({ msg: `No maintenance with the id of ${req.params.id}` });
    }
};


module.exports = {
    getAllMaintenance,
    getMaintenanceById,
    getMaintenanceByBoiler,
    deleteMaintenance
};