const technicians = require('../data/technicians.json');

const getAllTechnicians = (req, res) => {
    res.json(technicians);
};

const getTechnicianById = (req, res) => {
    const found = technicians.some(technician => technician.id === parseInt(req.params.param));

    if(found) {
        res.json(technicians.filter(technician => technician.id === parseInt(req.params.param)));
    } else {
        res.status(400).json({ msg: `No technician with the id of ${req.params.param}`});
    }
};


const getTechnicianByFirstName = (req, res) => {
    const found = technicians.some(technician => technician.first_name === req.params.param);

    if(found) {
        res.json(technicians.filter(technician => technician.first_name === req.params.param));
    } else {
        res.status(400).json({ msg: `No technician with the name ${req.params.param}`});
    }
};


const deleteTechnician = (req, res) => {
    const found = technicians.some(technicians => technicians.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg: 'technician deleted', technicians: technicians.filter(technician => technician.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg: `No technician with the id of ${req.params.id}`});
    }
};


module.exports = {
   getAllTechnicians,
   getTechnicianById,
   getTechnicianByFirstName,
   deleteTechnician
};
