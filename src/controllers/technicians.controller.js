const fs = require('fs');

const technicians = fs.readFileSync('src/data/technicians.json');
let technician = JSON.parse(technicians);

const createTechnician = (req, res) => {
    const {
        id,
        first_name,
        last_name,
        phone_number,
        dni,
        boiler_specialty
       
    } = req.body;

    if (!id || !first_name || !last_name || !phone_number || !dni || !boiler_specialty ) {
        res.status(400).send("Incomplete fields");
        return;
    }

    const newTechnician = {
        id,
        first_name,
        last_name,
        phone_number,
        dni,
        boiler_specialty      
    };

    technician.push(newTechnician);
    fs.writeFileSync('data/technicians.json', JSON.stringify(technician, null, 2));
    res.json(newTechnician);
};

const getAllTechnicians = (req, res) => {
    res.json(technician);
};

const getTechnicianById = (req, res) => {
    const found = technician.some(t=> t.id === parseInt(req.params.id));

    if(found) {
        res.json(technician.filter(t => t.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No technician with the id of ${req.params.id}`});
    }
};


const getTechnicianByFirstName = (req, res) => {
    const found = technician.some(t => t.first_name.toLowerCase() === (req.query.first_name.toLowerCase()));

    if(found) {
        res.json(technician.filter(t => t.first_name.toLowerCase() === (req.query.first_name.toLowerCase())));
    } else {
        res.status(400).json({ msg: `No technician with the name ${req.query.first_name}`});
    }
};

const updateTechnician = (req, res) => {
    const id = parseInt(req.params.id);
    const {
        first_name = '',
        last_name = '',
        phone_number = '',
        dni = '',
        boiler_specialty = '',
    } = req.body;

    const technicianItem = technician.find(technicianItem => technicianItem.id === parseInt(req.params.id));
    if (technicianItem) {
        const index = technician.indexOf(technicianItem);
        const updatedTechnician = {
            id,
            first_name,
            last_name,
            phone_number,
            dni,
            boiler_specialty 
        };

        if (!first_name || !last_name || !phone_number || !dni || !boiler_specialty) {
            res.status(400).send("Incomplete fields");
            return;
        }

        technician[index] = updatedTechnician;

        fs.writeFileSync('data/technicians.json', JSON.stringify(technician, null, 2));
        res.json({ msg: 'Technician updated', updatedTechnician });
    } else {
        res.status(400).json({ msg: `No technician with the id of ${req.params.id}` });
    }
};

const deleteTechnician = (req, res) => {
    const found = technician.some(t => t.id === parseInt(req.params.id));

    if (found) {
        technician = technician.filter(t => t.id !== parseInt(req.params.id));

        fs.writeFileSync('data/technicians.json', JSON.stringify(technician, null, 2));
        res.json({ msg: 'Technician deleted', technician });
    } else {
        res.status(400).json({ msg: `No technician with the id of ${req.params.id}` });
    }
};


module.exports = {
   getAllTechnicians,
   getTechnicianById,
   getTechnicianByFirstName,
   createTechnician,
   updateTechnician,
   deleteTechnician
};
