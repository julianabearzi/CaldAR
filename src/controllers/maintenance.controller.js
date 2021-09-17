const fs = require('fs');

const maintenances = fs.readFileSync('src/data/maintenance.json');
let maintenance = JSON.parse(maintenances);

const createMaintenance = (req, res) => {
  const { id, boiler, date, technicians_list, building } = req.body;

  if (!id || !boiler || !date || !technicians_list || !building) {
    res.status(400).send('Incomplete fields');
    return;
  }

  const newMaintenance = {
    id,
    boiler,
    date,
    technicians_list,
    building,
  };

  maintenance.push(newMaintenance);
  fs.writeFileSync(
    'data/maintenance.json',
    JSON.stringify(maintenance, null, 2)
  );
  res.json(newMaintenance);
};

const getAllMaintenance = (req, res) => {
  res.json(maintenance);
};

const getMaintenanceById = (req, res) => {
  const idFound = maintenance.some((m) => m.id === parseInt(req.params.id));

  if (idFound) {
    res.json(maintenance.filter((m) => m.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No maintenance with the id ${req.params.id}` });
  }
};

const getMaintenanceByBoiler = (req, res) => {
  const idFound = maintenance.some(
    (m) => m.boiler.toLowerCase() === req.query.boiler.toLowerCase()
  );

  if (idFound) {
    res.json(
      maintenance.filter(
        (m) => m.boiler.toLowerCase() === req.query.boiler.toLowerCase()
      )
    );
  } else {
    res
      .status(400)
      .json({ msg: `No maintenance with the boiler ${req.query.boiler}` });
  }
};

const updateMaintenance = (req, res) => {
  const id = parseInt(req.params.id);
  const {
    boiler = '',
    date = '',
    technicians_list = '',
    building = '',
  } = req.body;
  const maintenanceItem = maintenance.find(
    (maintenanceItem) => maintenanceItem.id === parseInt(req.params.id)
  );
  if (maintenanceItem) {
    const index = maintenance.indexOf(maintenanceItem);
    const updatedMaintenance = {
      id,
      boiler,
      date,
      technicians_list,
      building,
    };

    if (!boiler || !date || !technicians_list || !building) {
      res.status(400).send('Incomplete fields');
      return;
    }

    maintenance[index] = updatedMaintenance;

    fs.writeFileSync(
      'data/maintenance.json',
      JSON.stringify(maintenance, null, 2)
    );
    res.json({ msg: 'Maintenance updated', updatedMaintenance });
  } else {
    res
      .status(400)
      .json({ msg: `No maintenance with the id of ${req.params.id}` });
  }
};

const deleteMaintenance = (req, res) => {
  const idFound = maintenance.some((m) => m.id === parseInt(req.params.id));

  if (idFound) {
    maintenance = maintenance.filter((m) => m.id !== parseInt(req.params.id));

    fs.writeFileSync(
      'data/maintenance.json',
      JSON.stringify(maintenance, null, 2)
    );
    res.json({ msg: 'Maintenance deleted', maintenance });
  } else {
    res
      .status(400)
      .json({ msg: `No maintenance with the id of ${req.params.id}` });
  }
};

module.exports = {
  createMaintenance,
  getAllMaintenance,
  getMaintenanceById,
  getMaintenanceByBoiler,
  deleteMaintenance,
  updateMaintenance,
};
