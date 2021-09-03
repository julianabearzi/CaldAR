const buildings = require('../data/buildings.json');

const getAllBuildings = (req, res) => {
        res.json(buildings);
};

const getBuildingById = (req, res) => {
    const idFound = buildings.some(building => building.id === parseInt(req.params.id));

    if (idFound) {
        res.json(buildings.filter(building => building.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No building with the id of ${req.params.id}` });
    }
};

const getBuildingByType = (req, res) => {

    const typeFound = buildings.some(building => building.type.toLowerCase() === (req.query.type.toLowerCase()));

    if (typeFound) {
        res.json(buildings.filter(building => building.type.toLowerCase() === (req.query.type.toLowerCase())));
    } else {
        res.status(400).json({ msg: `No building with the type ${req.query.type}` })
    }
}

const deleteBuilding = (req, res) => {
    const idFound = buildings.some(building => building.id === parseInt(req.params.id));

    if (idFound) {
        res.json({ msg: 'Building deleted', buildings: buildings.filter(building => building.id !== parseInt(req.params.id)) });
    } else {
        res.status(400).json({ msg: `No building with the id of ${req.params.id}` })
    }
};


module.exports = {
    getAllBuildings,
    getBuildingById,
    getBuildingByType,
    deleteBuilding
};