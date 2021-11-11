const models = require('../model');

const createConstruction = async (req, res) => {
  try {
    const construction = new models.Constructions(req.body);
    const newConstruction = await construction.save();

    return res.status(201).json(newConstruction);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getAllConstructions = async (req, res) => {
  try {
    const response = await models.Constructions.find();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getConstructionById = async (req, res) => {
  try {
    const response = await models.Constructions.findOne({ _id: req.params.id });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No construction company with the id of ${req.params.id}`,
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

const getConstructionByFirstName = async (req, res) => {
  try {
    const response = await models.Constructions.findOne({
      name: req.query.name,
    });

    if (!response) {
      return res.status(404).json({
        error: true,
        msg: `No construction company with the name ${req.query.name}`,
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

const updateConstruction = async (req, res) => {
  try {
    const constructionUpdated = await models.Constructions.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!constructionUpdated || constructionUpdated.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No construction company with the id ${req.params.id}`,
      });
    }
    return res.status(201).json(constructionUpdated);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const deleteConstruction = async (req, res) => {
  try {
    const buildingFound = await models.Buildings.findOne({
      type: req.params.id,
    });
    if (buildingFound) {
      return res.status(400).json({
        msg: 'This construction company has registered buildings. It cannot be removed.',
      });
    }
    const constructionFound = await models.Constructions.findOneAndRemove({
      _id: req.params.id,
    });

    if (!constructionFound || constructionFound.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No construction company with the id ${req.params.id}`,
      });
    }
    return res.status(202).json(constructionFound);
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

module.exports = {
  getAllConstructions,
  getConstructionById,
  getConstructionByFirstName,
  createConstruction,
  updateConstruction,
  deleteConstruction,
};
