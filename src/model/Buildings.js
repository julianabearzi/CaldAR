const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({

    name: {
        type: String,
        lowercase: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Construction-companies',
    },
    phone: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Buildings', buildingSchema);