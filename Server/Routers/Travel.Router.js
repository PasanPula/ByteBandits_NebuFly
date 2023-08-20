const express = require('express');

const router = express.Router();

const TravelController = require('../Controllers/Travel.Controller');
const Auth = require('../Middleware/authetication');

router.get('/',Auth.verifyUser, (req, res) => {
    TravelController.getAllTraval(req, res);
});

router.get('/:id',Auth.verifyUser, (req, res) => {
    TravelController.getTravalById(req, res);
});

router.get('/travel/serach',Auth.verifyUser, (req, res) => {
    TravelController.GetTravalByFromAndToAndModeAndDateAndPassengersAndClass(req, res);
});

router.post('/', Auth.verifyUser,Auth.verifyAdmin,(req, res) => {
    TravelController.addTraval(req, res);
});

router.put('/:id',Auth.verifyUser,Auth.verifyAdmin, (req, res) => {
    TravelController.updateTravalById(req, res);
});

router.delete('/:id',Auth.verifyUser,Auth.verifyAdmin, (req, res) => {

    TravelController.deleteTravalById(req, res);
});


module.exports = router;