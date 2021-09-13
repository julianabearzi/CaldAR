const BuildingSchema = require('../model/Buildings');
const ConstructionSchema = require('../model/Construction-company');


const createBuilding = async (req, res) => {
    const { type } = req.body;
    const validationType = await ConstructionSchema.findById(type);
    console.log(type, validationType)
    if (!validationType) {
        return res.status(400).json({
            msg: `The building type was not found in the database.`
        });
    }
    try {
        const building = new BuildingSchema(req.body);
        const newBuilding = await building.save();

        return res.status(201).json({
            data: newBuilding,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};


const getAllBuildings = async (req, res) => {
    try {
        const response = await BuildingSchema.find();

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

const getBuildingById = async (req, res) => {
    try {
        const response = await BuildingSchema.findOne({ _id: req.params.id });
        console.log(response)

        if (!response || response.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No building with the id of ${req.params.id}`
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

const getBuildingByName = async (req, res) => {
    try {
        const response = await BuildingSchema.findOne({ name: req.query.name });

        if (!response) {
            return res.status(404).json({
                error: true,
                msg: `No building with the name ${req.query.name}`
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

const updateBuilding = async (req, res) => {
    const { type } = req.body;
    if (type) {
        const validationType = await ConstructionSchema.findById(type);
        if (!validationType) {
            return res.status(400).json({
                msg: `The building type was not found in the database.`
            });
        }
    }
    try {
        const buildingUpdated = await BuildingSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

        if (!buildingUpdated || buildingUpdated.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No building with the id ${req.params.id}`
            });
        }

        return res.status(201).json({
            msg: 'Building updated',
            data: buildingUpdated,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const deleteBuilding = async (req, res) => {
    try {
        const buildingFound = await BuildingSchema.findOneAndRemove({ _id: req.params.id });

        if (!buildingFound || buildingFound.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No building with the id ${req.params.id}`
            });
        }

        return res.status(202).json({
            msg: 'Building deleted',
            data: buildingFound,
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
    createBuilding,
    getAllBuildings,
    getBuildingById,
    getBuildingByName,
    updateBuilding,
    deleteBuilding
};