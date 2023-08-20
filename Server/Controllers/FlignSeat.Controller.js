const FlightSeatModel = require('../Models/FlightSeat.Model');


const addFlightSeat = async (req,res) => {
    try{
        const {Name,Business_Seats,Economy_Seats,Executive_Seats} = req.body;

        const FlightSeat = new FlightSeatModel({
            Name:Name,
            Business_Seats:Business_Seats,
            Economy_Seats:Economy_Seats,
            Executive_Seats:Executive_Seats
        });

        const result = await FlightSeat.save();
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The FlightSeat Created Successfully ', data: result });
    }
    catch(error){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}


const getAllFlightSeat = async (req,res) => {
    try{
        const FlightSeat = await FlightSeatModel.find();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The FlightSeat Get Successfully ', data: FlightSeat });
    }
    catch(error){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}

const getFlightSeatById = async (req,res) => {
    try{
        const FlightSeat = await FlightSeatModel.findById(req.params.id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The FlightSeat Get Successfully ', data: FlightSeat });
    }
    catch(error){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}

const updateFlightSeatById = async (req,res) => {

    try{
        const {Name,Business_Seats,Economy_Seats,Executive_Seats} = req.body;

        const FlightSeat = await FlightSeatModel.findByIdAndUpdate(req.params.id,{
            $set:{
                Name:Name,
                Business_Seats:Business_Seats,
                Economy_Seats:Economy_Seats,
                Executive_Seats:Executive_Seats
            }
        },{new:true});

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The FlightSeat Updated Successfully ', data: FlightSeat });
    }
    catch(error){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });

    }
}


const deleteFlightSeatById = async (req,res) => {
    try{
        const FlightSeat = await FlightSeatModel.findByIdAndDelete(req.params.id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The FlightSeat Deleted Successfully ', data: FlightSeat });
    }
    catch(error){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });

    }
}

module.exports = {
    addFlightSeat,
    getAllFlightSeat,
    getFlightSeatById,
    updateFlightSeatById,
    deleteFlightSeatById
}

