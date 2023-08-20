
const mongoose = require('mongoose');

const FlightSeatSchema = mongoose.Schema({

    Name : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        maxlength : [100, 'Your name cannot exceed 100 characters']
    },

    Business_Seats : {
        type : Array,
        required : true,
    },

    Economy_Seats : {
        type : Array,
        required : true,
    },
    Executive_Seats : {
        type : Array,
        required : true,
    }
},{timestamps : true});

const FlightSeatModel= mongoose.model('FlightSeat',FlightSeatSchema);

module.exports = FlightSeatModel;