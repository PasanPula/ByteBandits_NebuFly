const express = require('express');

const FlightSeatController = require('../Controllers/FlignSeat.Controller');
const Auth = require('../Middleware/authetication');

const router = express.Router();

router.post('/', Auth.verifyUser,Auth.verifyAdmin,(req, res) => {
    FlightSeatController.addFlightSeat(req, res);
});

router.get('/',Auth.verifyUser,Auth.verifyAdmin, (req, res) => {
    FlightSeatController.getAllFlightSeat(req, res);
});

router.get('/:id',Auth.verifyUser,(req, res) => {
    FlightSeatController.getFlightSeatById(req, res);
});

router.put('/:id',Auth.verifyUser,Auth.verifyAdmin, (req, res) => {
    FlightSeatController.updateFlightSeatById(req, res);
});

router.delete('/:id',Auth.verifyUser,Auth.verifyAdmin, (req, res) => {
    FlightSeatController.deleteFlightSeatById(req, res);
});

module.exports = router;


