const BookingModel = require("../Models/Booking.Model");
const TravalModel = require("../Models/Travel.Model");

const addBooking = async (req, res) => {
  try {
    const {
      From,
      To,
      No_Of_Passengers,
      Booked_Seats,
      Class,
      Travel,
    } = req.body;

    const travalobj = await TravalModel.findById(Travel);

    if (Class == "Economy") {
      travalobj.Booked_Seats_Economy =
        travalobj.Booked_Seats_Economy.concat(Booked_Seats);
    } else if (Class == "Business") {
      travalobj.Booked_Seats_Biness =
        travalobj.Booked_Seats_Biness.concat(Booked_Seats);
    } else if (Class == "Executive") {
      travalobj.Booked_Seats_Executive =
        travalobj.Booked_Seats_Executive.concat(Booked_Seats);
    }

    const result_Traval = await travalobj.save();

    const booking = new BookingModel({
      From: From,
      To: To,
      No_Of_Passengers: No_Of_Passengers,
      Class: Class,
      Booked_Seats: Booked_Seats,
      User: req.user,
      Travel: result_Traval,
    });

    const result = await booking.save();
    const result_final =  await result.populate("Travel")
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Booking Created Successfully ",
      data: result_final,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Booking Created Failed ",
      error: err.message,
    });
  }
};

const getBooking = async (req, res) => {
  try {
    const result = await BookingModel.find({})
      .populate("From")
      .populate("To")
      .populate("Class")
      .populate("User")
      .populate("Travel");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Booking Get Successfully ",
      data: result,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Booking Get Failed ",
      error: err.message,
    });
  }
};

const getBookingById = async (req, res) => {
  try {
    const result = await BookingModel.findById(req.params.id)
      .populate("From")
      .populate("To")
      .populate("Class")
      .populate("User")
      .populate("Travel");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Booking Get Successfully ",
      data: result,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Booking Get Failed ",
      error: err.message,
    });
  }
};

const updateBooking = async (req, res) => {
  try {
    const {
      From,
      To,
      No_Of_Passengers,
      Booked_Seats,
      Cancaled_Seats,
      Is_Canceled,
      Is_Paid,
      Traval,

    } = req.body;

    const booked_obj = await BookingModel.findById(req.params.id).populate("Travel");
    

    if (booked_obj.Class == "Economy") {
      booked_obj.Travel.Booked_Seats_Economy = booked_obj.Travel.Booked_Seats_Economy.concat(
        Booked_Seats
      );
      booked_obj.Travel.Booked_Seats_Economy = booked_obj.Travel.Booked_Seats_Economy.filter(
        (item) => !Cancaled_Seats.includes(item)
      );

      booked_obj.Booked_Seats = Booked_Seats ;
    } else if (booked_obj.Class == "Business") {
      console.log("here");
      console.log(booked_obj.Travel.Booked_Seats_Biness);
      booked_obj.Travel.Booked_Seats_Biness =[...new Set (booked_obj.Travel.Booked_Seats_Biness.concat(
        Booked_Seats
      ))];
      booked_obj.Travel.Booked_Seats_Biness = [...new Set (booked_obj.Travel.Booked_Seats_Biness.filter(
        (item) => !Cancaled_Seats.includes(item)
      ))];
      booked_obj.Booked_Seats = Booked_Seats ;
    } else if (booked_obj.Class == "Executive") {
      booked_obj.Travel.Booked_Seats_Executive = [...new Set ( booked_obj.Travel.Booked_Seats_Executive.concat(
        Booked_Seats
      ))];
      booked_obj.Travel.Booked_Seats_Executive = [...new Set (booked_obj.Travel.Booked_Seats_Executive.filter(
        (item) => !Cancaled_Seats.includes(item)
      ))];
      booked_obj.Booked_Seats = Booked_Seats ;
    }

   
    
   
    booked_obj.From = From;
    booked_obj.To = To;
    booked_obj.No_Of_Passengers = No_Of_Passengers;
    booked_obj.User = req.user;
    booked_obj.Traval = Traval;
    booked_obj.Is_Canceled = Is_Canceled;
    booked_obj.Is_Paid = Is_Paid;

    const result_Booking = await booked_obj.save();

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Booking Updated Successfully ",
      data: result_Booking,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Booking Updated Failed ",
      error: err.message,
    });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const Booking_obj = await BookingModel.findByIdAndDelete(req.params.id);

    Booking_obj.Is_Canceled = true;
    const result = await Booking_obj.save();
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Booking Deleted Successfully ",
      data: result,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Booking Deleted Failed ",
      error: err.message,
    });
  }
};

module.exports = {
  addBooking,
  getBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
};
