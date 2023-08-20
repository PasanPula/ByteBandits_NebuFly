const TravalMode = require("../Models/TravelMode.Model");
const FlightSeat = require("../Models/FlightSeat.Model");

const AddTravalMode = async (req, res) => {
  try {
    const { Name, Image, Flight_Seat } = req.body;
    

    const Flight_Seat_obj = await FlightSeat.findById(Flight_Seat);
    if(!Flight_Seat_obj){
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        status: "The Flight Seat Not Found ",
        data: null,
      });
    }

    const newTravalMode = new TravalMode({
      Name: Name,
      Image: Image,
      Flight_Seat: Flight_Seat,
    });
    const Tarvelmode_data = await newTravalMode.save();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Traval Model Created Successfully ",
      data: Tarvelmode_data,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

const GetAllTravalMode = async (req, res) => {
  try {
    const travalmodes = await TravalMode.find().populate("Flight_Seat");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Traval Model Get Successfully ",
      data: travalmodes,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

const GetTravalModeById = async (req, res) => {
  try {
    const travalmode = await TravalMode.findById(req.params.id).populate("Flight_Seat");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Traval Model Get Successfully ",
      data: travalmode,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};


const UpdateTravalMode = async (req, res) => {
    try {
        const { Name, Image, Flight_Seat } = req.body;
        const travalmode = await TravalMode.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
            Name: Name,
            Image: Image,
            Flight_Seat: Flight_Seat,
            },
        },
        { new: true }
        );
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: true,
        status: "The Traval Model Updated Successfully ",
        data: travalmode,
        });
    } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: false, status: error.message, data: null });
    }
    };

const DeleteTravalMode = async (req, res) => {

    try {
        const travalmode = await TravalMode.findByIdAndDelete(req.params.id).populate("Flight_Seat");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: true,
        status: "The Traval Model Deleted Successfully ",
        data: travalmode,
        });
    }
    catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: false, status: error.message, data: null });
    }
};

module.exports = {
    AddTravalMode,
    GetAllTravalMode,
    GetTravalModeById,
    UpdateTravalMode,
    DeleteTravalMode
};