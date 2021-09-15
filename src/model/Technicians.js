const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: true
        },

        lastname: {
            type: String,
            lowercase: true,
            required: true
        },

        phone: {
            type: Number,
            required: true
        },

        dni: {
            type: Number,
            required: true
        },
        
        boiler_specialty: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'boilers-categories',
            required: true
        }]

    },
    { timestamp: true }

);

module.exports = mongoose.model('Technician', technicianSchema);