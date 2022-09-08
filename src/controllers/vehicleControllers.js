// Copied code, rewrite once things slow down next week

let vehicleData = require('../../data/vehicles');

const getVehicles = (req, res) => {
    res.json(vehicleData);
};

const getVehicleByID = (req, res) => {
    const vehicleID = req.params.id;
    // console.log(contactID);
    const getVehicle = vehicleData.find((contact) => contact._id === +vehicleID);
    if (!getVehicle) {
        res.status(500).send('Account not found.');
    } else {
        res.json(getVehicle);
    }
};

const postNewVehicle = (req, res) => {
    // * Mapping the contactDataArray to get all the existing ID's into an array.
    idArray = vehicleData.map((object) => object._id);
    // * Finding the max value in the array of IDs
    let maxID = Math.max(...idArray);
    // * Adding 1 to the current max value every time the postNewContact route is run.
    let newID = maxID + 1;

    let newVehicle = req.body;
    // * Adding newID key and value to req.body at the object's first position.
    let keyValues = Object.entries(newVehicle);
    keyValues.splice(0, 0, ['_id', newID]);
    newVehicle = Object.fromEntries(keyValues);
    vehicleData.push(newVehicle);
    res.json(newVehicle);
};

//* Exporting route functions
module.exports = {
    getVehicles,
    getVehicleByID,
    postNewVehicle,
};