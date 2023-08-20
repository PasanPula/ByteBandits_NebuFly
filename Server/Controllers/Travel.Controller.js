const Traval = require("../Models/Travel.Model");

const addTraval = async (req, res) => {
  try {
    const {
      From,
      To,
      From_Location,
      To_Location,
      Date,
      Time,
      Ship_No,
      Travel_Mode,
      Price_Bissness,
      Price_Economy,
      Price_Executive,
    } = req.body;

    const traval = new Traval({
      From: From,
      To: To,
      From_Location: From_Location,
      To_Location: To_Location,
      Date: Date,
      Time: Time,
      Ship_No: Ship_No,
      Travel_Mode: Travel_Mode,
      Price_Bissness: Price_Bissness,
      Price_Economy: Price_Economy,
      Price_Executive: Price_Executive,
    });

    const result = await traval.save();
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The traval Created Successfully ",
      data: result,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

const getAllTraval = async (req, res) => {
  try {
    const traval = await Traval.find()
      .populate("From")
      .populate("To")
      .populate("Travel_Mode");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The traval Get Successfully ",
      data: traval,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

const GetTravalByFromAndToAndModeAndDateAndPassengersAndClass = async (
  req,
  res
) => {
  try {
    const { From, To, Mode, Date, Passengers, Class } = req.body;
    const traval = await Traval.find({
      From: From,
      To: To,
      Travel_Mode: Mode,
      Date: Date,
    })
      .populate("From")
      .populate("To")
      .populate("Travel_Mode");
   
    const populatedTraval_sync = traval.map(async (t) => {
    const result_Populate =   await t.Travel_Mode.populate("Flight_Seat");

    t.Traval_Mode = result_Populate;
 
      if (Class == "Economy") {
        if (
          (t.Traval_Mode.Flight_Seat.Economy_Seats.length -
            t.Booked_Seats_Economy.length) >=
          Passengers
        ){
          return t;
        }
      } else if (Class == "Business") {
        if (
          (t.Traval_Mode.Flight_Seat.Business_Seats.length -
            t.Booked_Seats_Biness.length) >=
          Passengers
        );
        {
          return t;
        }
      } else if (Class == "Executive") {
        if (
          (t.Traval_Mode.Flight_Seat.Executive_Seats.length -
            t.Booked_Seats_Executive.length) >=
          Passengers
        );
        {
          return t;
        }


      }
    });

    const FilterdTraval = await Promise.all(populatedTraval_sync);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The traval Get Successfully ",
      data: FilterdTraval,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

const getTravalById = async (req, res) => {
  try {
    const traval = await Traval.findById(req.params.id)
      .populate("From")
      .populate("To")
      .populate("Travel_Mode");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The traval Get Successfully ",
      data: traval,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

const updateTravalById = async (req, res) => {
  try {
    const {
      From,
      To,
      From_Location,
      To_Location,
      Date,
      Time,
      Ship_No,
      Traval_Mode,
      Price_Bissness,
      Price_Economy,
      Price_Executive,
    } = req.body;

    const traval = await Traval.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          From: From,
          To: To,
          From_Location: From_Location,
          To_Location: To_Location,
          Date: Date,
          Time: Time,
          Ship_No: Ship_No,
          Traval_Mode: Traval_Mode,
          Price_Bissness: Price_Bissness,
          Price_Economy: Price_Economy,
          Price_Executive: Price_Executive,
        },
      },
      { new: true }
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The traval Updated Successfully ",
      data: traval,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

const deleteTravalById = async (req, res) => {
  try {
    const traval = await Traval.findByIdAndDelete(req.params.id);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The traval Deleted Successfully ",
      data: traval,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};

module.exports = {
  addTraval,
  getAllTraval,
  getTravalById,
  updateTravalById,
  deleteTravalById,
  GetTravalByFromAndToAndModeAndDateAndPassengersAndClass,
};
