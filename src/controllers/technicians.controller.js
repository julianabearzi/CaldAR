const models = require('../model');

const createTechnician = async (req, res) => {
  try {
    for (let i = 0; i < req.body.boiler_specialty.length; i++) {
      const boilerSpecialty = await models.BoilersCategories.findById(
        req.body.boiler_specialty[i]
      );
      if (!boilerSpecialty) {
        return res.status(400).json({
          msg: 'the boiler specialty was not found',
        });
      }
    }
    const technician = new models.Technicians(req.body);
    const newTechnician = await technician.save();

    return res.status(201).json({
      data: newTechnician,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const getAllTechnicians = async (req, res) => {
  try {
    const response = await models.Technicians.find();

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

const getTechnicianById = async (req, res) => {
  try {
    const response = await models.Technicians.findOne({ _id: req.params.id });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No technician with the id of ${req.params.id}`,
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

const getTechnicianByFirstName = async (req, res) => {
  try {
    const response = await models.Technicians.findOne({ name: req.query.name });

    if (!response) {
      return res.status(404).json({
        error: true,
        msg: `No technician with the name ${req.query.name}`,
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

const updateTechnician = async (req, res) => {
  try {
    const technicianUpdated = await models.Technicians.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!technicianUpdated || technicianUpdated.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No technician with the id ${req.params.id}`,
      });
    }

    return res.status(201).json({
      msg: 'Technician updated',
      data: technicianUpdated,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      msg: error,
    });
  }
};

const deleteTechnician = async (req, res) => {
  try {
    const technicianFound = await models.Technicians.findOneAndRemove({
      _id: req.params.id,
    });

    if (!technicianFound || technicianFound.length === 0) {
      return res.status(404).json({
        error: true,
        msg: `No technician with the id ${req.params.id}`,
      });
    }

    return res.status(202).json({
      msg: 'Technician deleted',
      data: technicianFound,
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
  getAllTechnicians,
  getTechnicianById,
  getTechnicianByFirstName,
  createTechnician,
  updateTechnician,
  deleteTechnician,
};
