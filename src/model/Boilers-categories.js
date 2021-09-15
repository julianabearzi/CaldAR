const mongoose = require('mongoose');

const boilerCategorySchema = mongoose.Schema(
    {
      description: {
        type: String,
        lowercase: true,
        required: true
      },
      maintenanceMonthlyHours: {
        type: Number,
        required: true
      },
      eventualMonthlyHours: {
        type: Number,
        required: true
      }
    }
  );
  module.exports = mongoose.model('Boilers-categories', boilerCategorySchema);