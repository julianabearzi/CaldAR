const MaintenanceSchema = require('../model/Maintenance');

const createMaintenance = async (req, res) => {
    try {
        const maintenance = new MaintenanceSchema(req.body);
        const newMaintenance = await maintenance.save();

        return res.status(201).json({
            data: newMaintenance,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};


const getAllMaintenance = async (req, res) => {
    try {
        const response = await MaintenanceSchema.find();

        return res.status(200).json({
            data: response,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const getMaintenanceById = async (req, res) => {
    try {
        const response = await MaintenanceSchema.findOne({ _id: req.params.id });

        if (!response || response.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No Maintenance with the id of ${req.params.id}`
            });
        }

        return res.status(200).json({
            data: response,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
}

const getMaintenanceByBoiler = async (req, res) => {
    try {
        const response = await MaintenanceSchema.findOne({ boiler: req.query.boiler });

        if (!response) {
            return res.status(404).json({
                error: true,
                msg: `No Maintenance with the boiler ${req.query.boiler}`
            });
        }

        return res.status(200).json({
            data: response,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
}

const updateMaintenance = async (req, res) => {
    try {
        const maintenanceUpdated = await MaintenanceSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

        if (!maintenanceUpdated || maintenanceUpdated.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No Maintenance with the id ${req.params.id}`
            });
        }

        return res.status(201).json({
            msg: 'Maintenance updated',
            data: maintenanceUpdated,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const deleteMaintenance = async (req, res) => {
    try {
        const maintenanceFound = await MaintenanceSchema.findOneAndRemove({ _id: req.params.id });

        if (!maintenanceFound || maintenanceFound.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No Maintenance with the id ${req.params.id}`
            });
        }

        return res.status(202).json({
            msg: 'Maintenance deleted',
            data: maintenanceFound,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

module.exports = {
    createMaintenance,
    getAllMaintenance,
    getMaintenanceById,
    getMaintenanceByBoiler,
    updateMaintenance,
    deleteMaintenance
};