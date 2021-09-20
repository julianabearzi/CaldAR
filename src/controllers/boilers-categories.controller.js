const BoilerCategorySchema = require('../model/Boilers-categories');

const createBoilerCategory = async (req, res) => {
  try {
    const boilerCategory = new BoilerCategorySchema(req.body);
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
    const response = await BoilerCategorySchema.find();

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
    const response = await BoilerCategorySchema.findOne({ _id: req.params.id });

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
    const response = await BoilerCategorySchema.findOne({
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
    const BoilerCategoryUpdated = await BoilerCategorySchema.findOneAndUpdate(
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
    const BoilerCategoryFound = await BoilerCategorySchema.findOneAndRemove({
      _id: req.params.id,
    });

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
