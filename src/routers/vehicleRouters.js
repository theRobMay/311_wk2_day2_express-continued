const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {
    getVehicles,
    getVehicleByID,
    postNewVehicle,
} = require('../controllers/vehicleControllers.js');

router.get('/vehicles', getVehicles);

router.get('/vehicles/:id', getVehicleByID);

router.post('/vehicles', postNewVehicle);

module.exports = router;