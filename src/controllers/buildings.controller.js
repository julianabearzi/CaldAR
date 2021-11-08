const models = require('../model');

const createBuilding = async (req, res) => {
  try {
    const type = await models.Constructions.findById(req.body.type);
    if (!type) {
      return res.status(400).json({
        msg: 'The type assigned to building was not found',
      });
    }
    const building = new models.Buildings(req.body);
    const newBuilding = await building.save();

    return res.status(201).json(newBuilding);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getAllBuildings = async (req, res) => {
  try {
    const response = await models.Buildings.find();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getBuildingById = async (req, res) => {
  try {
    const response = await models.Buildings.findOne({ _id: req.params.id });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No building with the id of ${req.params.id}`,
      });
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getBuildingByName = async (req, res) => {
  try {
    const response = await models.Buildings.findOne({ name: req.query.name });

    if (!response) {
      return res.status(404).json({
        error: true,
        msg: `No building with the name ${req.query.name}`,
      });
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const updateBuilding = async (req, res) => {
  try {
    const type = await models.Constructions.findById(req.body.type);
    if (!type) {
      return res.status(400).json({
        msg: 'The type assigned to building was not found',
      });
    }
    const buildingUpdated = await models.Buildings.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!buildingUpdated || buildingUpdated.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No building with the id ${req.params.id}`,
      });
    }

    return res.status(201).json(buildingUpdated);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const deleteBuilding = async (req, res) => {
  try {
    const maintenanceFound = await models.Maintenance.findOne({
      building: req.params.id,
    });
    if (maintenanceFound) {
      return res.status(400).json({
        msg: 'This building has pending maintenance',
      });
    }
    const buildingFound = await models.Buildings.findOneAndRemove({
      _id: req.params.id,
    });

    if (!buildingFound || buildingFound.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No building with the id ${req.params.id}`,
      });
    }

    return res.status(202).json(buildingFound);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

module.exports = {
  createBuilding,
  getAllBuildings,
  getBuildingById,
  getBuildingByName,
  updateBuilding,
  deleteBuilding,
};
