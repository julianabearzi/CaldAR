const maintenance = require('../data/maintenance.json');

const getAllMaintenance = (req, res) => {
    res.json(maintenance);
};

const getMaintenanceById = (req, res) => {
    const idFound = maintenance.some(m => m.id === parseInt(req.params.param));

    if (idFound) {
        res.json(maintenance.filter(m => m.id === parseInt(req.params.param)));
    }
    else {
        res.status(400).json({ msg: `No maintenance with the id ${req.params.param}` });
    }
};

const getMaintenanceByBoiler = (req, res) => {
    const idFound = maintenance.some(m => m.boiler === (req.params.param));

    if (idFound) {
        res.json(maintenance.filter(m => m.boiler === (req.params.param)));
    }
    else {
        res.status(400).json({ msg: `No maintenance with the boiler ${req.params.param}` });
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