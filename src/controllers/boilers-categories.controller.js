const models = require('../model');

const createBoilerCategory = async (req, res) => {
  try {
    const boilerCategory = new models.BoilersCategories(req.body);
    const newBoilerCategory = await boilerCategory.save();

    return res.status(201).json({
      data: newBoilerCategory,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getAllBoilerCategories = async (req, res) => {
  try {
    const response = await models.BoilersCategories.find();

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

const getBoilerCategoryById = async (req, res) => {
  try {
    const response = await models.BoilersCategories.findOne({
      _id: req.params.id,
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No Boiler category with the id of ${req.params.id}`,
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

const getBoilerCategoryByDescription = async (req, res) => {
  try {
    const response = await models.BoilersCategories.findOne({
      description: req.query.description,
    });

    if (!response) {
      return res.status(404).json({
        error: true,
        msg: `No boiler category with the name ${req.query.description}`,
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

const updateBoilerCategory = async (req, res) => {
  try {
    const BoilerCategoryUpdated =
      await models.BoilersCategories.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

    if (!BoilerCategoryUpdated || BoilerCategoryUpdated.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No boiler category with the id ${req.params.id}`,
      });
    }

    return res.status(201).json({
      msg: 'Boiler category updated',
      data: BoilerCategoryUpdated,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const deleteBoilerCategory = async (req, res) => {
  try {
    const boilerFound = await models.Boilers.findOne({
      categoryId: req.params.id,
    });
    if (boilerFound) {
      return res.status(400).json({
        msg: 'This category of boilers has boilers. It cannot be removed.',
      });
    }
    const technicianFound = await models.Technicians.findOne({
      boiler_specialty: req.params.id,
    });
    if (technicianFound) {
      return res.status(400).json({
        msg: 'This boiler category has technicians assigned to it. It cannot be removed.',
      });
    }
    const BoilerCategoryFound = await models.BoilersCategories.findOneAndRemove(
      {
        _id: req.params.id,
      }
    );

    if (!BoilerCategoryFound || BoilerCategoryFound.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No boiler category with the id ${req.params.id}`,
      });
    }

    return res.status(202).json({
      msg: 'Boiler category deleted',
      data: BoilerCategoryFound,
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
  getAllBoilerCategories,
  getBoilerCategoryById,
  getBoilerCategoryByDescription,
  createBoilerCategory,
  updateBoilerCategory,
  deleteBoilerCategory,
};
