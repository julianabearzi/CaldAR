const fs = require('fs');

const buildings = fs.readFileSync('data/buildings.json');
let building = JSON.parse(buildings);

const createBuilding = (req, res) => {
    const { id, type, state, address } = req.body;

    if (!id || !type || !state || !address) {
        res.status(400).send("Incomplete fields");
        return;
    }

    const newBuilding = {
        id,
        type,
        state,
        address
    };

    building.push(newBuilding);
    fs.writeFileSync('data/buildings.json', JSON.stringify(building, null, 2));
    res.json(newBuilding);
};


const getAllBuildings = (req, res) => {
    res.json(building);
};

const getBuildingById = (req, res) => {
    const idFound = building.some(b => b.id === parseInt(req.params.id));

    if (idFound) {
        res.json(building.filter(b => b.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No building with the id of ${req.params.id}` });
    }
};

const getBuildingByType = (req, res) => {
    const typeFound = building.some(b => b.type.toLowerCase() === (req.query.type.toLowerCase()));

    if (typeFound) {
        res.json(building.filter(b => b.type.toLowerCase() === (req.query.type.toLowerCase())));
    } else {
        res.status(400).json({ msg: `No building with the type ${req.query.type}` })
    }
}

const updateBuilding = (req, res) => {
    const id = parseInt(req.params.id);
    const { type = '', state = '', address = '' } = req.body;
    const buildingItem = building.find(buildingItem => buildingItem.id === parseInt(req.params.id));
    if (buildingItem) {
        const index = building.indexOf(buildingItem);
        const updatedBuilding = {
            id,
            type,
            state,
            address
        };

        if (!type || !state || !address) {
            res.status(400).send("Incomplete fields");
            return;
        }

        building[index] = updatedBuilding;

        fs.writeFileSync('data/buildings.json', JSON.stringify(building, null, 2));
        res.json({ msg: 'Building updated', updatedBuilding });
    } else {
        res.status(400).json({ msg: `No building with the id of ${req.params.id}` });
    }
};

const deleteBuilding = (req, res) => {
    const idFound = building.some(b => b.id === parseInt(req.params.id));

    if (idFound) {
        building = building.filter(b => b.id !== parseInt(req.params.id));

        fs.writeFileSync('data/buildings.json', JSON.stringify(building, null, 2));
        res.json({ msg: 'Building deleted', building });
    } else {
        res.status(400).json({ msg: `No building with the id of ${req.params.id}` })
    }
};


module.exports = {
    createBuilding,
    getAllBuildings,
    getBuildingById,
    getBuildingByType,
    updateBuilding,
    deleteBuilding
};