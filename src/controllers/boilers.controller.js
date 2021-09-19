const BoilerSchema = require('../model/Boilers');

const createBoiler = async (req, res) => {
  try {
    const boiler = new BoilerSchema(req.body);
    const newBoiler = await boiler.save();

    return res.status(201).json({
      data: newBoiler,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getAllBoilers = async (req, res) => {
  try {
    const response = await BoilerSchema.find();

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

const getBoilerById = async (req, res) => {
  try {
    const response = await BoilerSchema.findOne({ _id: req.params.id });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No Boiler with the id of ${req.params.id}`,
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

const getBoilerBySituation = async (req, res) => {
  try {
    const response = await BoilerSchema.find({
      boilerSituation: req.query.boilerSituation,
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No boiler ${req.query.boilerSituation}`,
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

const updateBoiler = async (req, res) => {
  try {
    const BoilerUpdated = await BoilerSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!BoilerUpdated || BoilerUpdated.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No boiler with the id ${req.params.id}`,
      });
    }

    return res.status(201).json({
      msg: 'Boiler updated',
      data: BoilerUpdated,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const deleteBoiler = async (req, res) => {
  try {
    const BoilerFound = await BoilerSchema.findOneAndRemove({
      _id: req.params.id,
    });

    if (!BoilerFound || BoilerFound.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No boiler with the id ${req.params.id}`,
      });
    }

    return res.status(202).json({
      msg: 'Boiler deleted',
      data: BoilerFound,
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
  createBoiler,
  getAllBoilers,
  getBoilerById,
  getBoilerBySituation,
  deleteBoiler,
  updateBoiler,
};
