const mongoose = require('mongoose');

const boilerSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'boilers-categories',
      required: true,
    },
    boilerSituation: {
      type: String,
      enum: ['installed', 'reserved', 'available'],
      required: true,
    },
    building: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'buildings',
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model('Boilers', boilerSchema);
