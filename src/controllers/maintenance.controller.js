const models = require('../model');

const createMaintenance = async (req, res) => {
  try {
    const boiler = await models.Boilers.findById(req.body.boiler);
    if (!boiler) {
      return res.status(400).json({
        msg: 'The boiler assigned to maintenance was not found',
      });
    }

    const building = await models.Buildings.findById(req.body.building);
    if (!building) {
      return res.status(400).json({
        msg: 'The building assigned to maintenance was not found',
      });
    }
    const technician = await models.Technicians.findById(req.body.technician);
    if (!technician) {
      return res.status(400).json({
        msg: 'The technician assigned to maintenance was not found',
      });
    }

    const maintenance = new models.Maintenance(req.body);
    const newMaintenance = await maintenance.save();

    return res.status(201).json({
      data: newMaintenance,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getAllMaintenance = async (req, res) => {
  try {
    const response = await models.Maintenance.find();

    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getMaintenanceById = async (req, res) => {
  try {
    const response = await models.Maintenance.findOne({
      _id: req.params.id,
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No maintenance with the id of ${req.params.id}`,
      });
    }

    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getMaintenanceByBoiler = async (req, res) => {
  try {
    const response = await models.Maintenance.find({
      boiler: req.query.boiler,
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No maintenance with boiler ${req.query.boiler}`,
      });
    }
    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const updateMaintenance = async (req, res) => {
  try {
    const boiler = await models.Boilers.findById(req.body.boiler);
    if (!boiler) {
      return res.status(400).json({
        msg: 'The boiler assigned to maintenance was not found',
      });
    }

    const building = await models.Buildings.findById(req.body.building);
    if (!building) {
      return res.status(400).json({
        msg: 'The building assigned to maintenance was not found',
      });
    }
    const technician = await models.Technicians.findById(req.body.technician);
    if (!technician) {
      return res.status(400).json({
        msg: 'The technician assigned to maintenance was not found',
      });
    }
    const MaintenanceUpdated = await models.Maintenance.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!MaintenanceUpdated || MaintenanceUpdated.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No maintenance with the id ${req.params.id}`,
      });
    }

    return res.status(201).json({
      msg: 'Maintenance updated',
      data: MaintenanceUpdated,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const deleteMaintenance = async (req, res) => {
  try {
    const MaintenanceFound = await models.Maintenance.findOneAndRemove({
      _id: req.params.id,
    });

    if (!MaintenanceFound || MaintenanceFound.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No maintenance with the id ${req.params.id}`,
      });
    }

    return res.status(202).json({
      msg: 'Maintenance deleted',
      data: MaintenanceFound,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
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
