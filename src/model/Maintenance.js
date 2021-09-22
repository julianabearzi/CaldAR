const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    boiler: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boilers',
      required: true,
    },
    building: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Buildings',
      required: true,
    },
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Technicians',
      required: true,
    },
    maintenanceType: {
      type: String,
      enum: ['monthly', 'eventual'],
      required: true,
    },
    monthlyHours: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model('Maintenance', maintenanceSchema);
