
const ConstructionSchema = require('../model/Construction-company');

const createConstruction = async (req, res) => {
    try {
        const construction = new ConstructionSchema(req.body);
        const newConstruction = await construction.save();

        return res.status(201).json({
            data: newConstruction,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};


const getAllConstructions = async (req, res) => {
    try {
        const response = await ConstructionSchema.find();

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

const getConstructionById = async (req, res) => {
    try {
        const response = await ConstructionSchema.findOne({ _id: req.params.id });

        if (!response || response.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No construction company with the id of ${req.params.id}`
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

const getConstructionByFirstName = async (req, res) => {
    try {
        const response = await ConstructionSchema.findOne({ name: req.query.name });

        if (!response) {
            return res.status(404).json({
                error: true,
                msg: `No construction company with the name ${req.query.name}`
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

const updateConstruction = async (req, res) => {
    try {
        const constructionUpdated = await ConstructionSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

        if (!constructionUpdated || constructionUpdated.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No construction company with the id ${req.params.id}`
            });
        }

        return res.status(201).json({
            msg: 'Construction updated',
            data: constructionUpdated,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const deleteConstruction = async (req, res) => {
    try {
        const constructionFound = await ConstructionSchema.findOneAndRemove({ _id: req.params.id });

        if (!constructionFound || constructionFound.length === 0) {
            return res.status(404).json({
                error: true,
                msg: `No construction company with the id ${req.params.id}`
            });
        }

        return res.status(202).json({
            msg: 'Construction deleted',
            data: constructionFound,
            error: false
        });

    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

module.exports ={
    getAllConstructions,
    getConstructionById,
    getConstructionByFirstName,
    createConstruction,
    updateConstruction,
    deleteConstruction
}