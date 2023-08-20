const mongoose = require('mongoose');

const TravelSchema = mongoose.Schema({
    From : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Destination',
        required : true
    },
    To : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Destination',
        required : true
    },
    From_Location : {
        type : String,
        required : true,
        trim : true,
        maxlength : [100, 'Your name cannot exceed 100 characters']
    },
    To_Location : {
        type : String,
        required : true,
        trim : true,
        maxlength : [100, 'Your name cannot exceed 100 characters']
    },
    Date : {
        type : Date,
        required : true
    },
    Time : {
        type : String,
        required : true
    },
    Ship_No : {
        type : String,
        required : true,
        trim : true,
        maxlength : [100, 'Your name cannot exceed 100 characters']
    },
    Travel_Mode : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'TravelMode',
        required : true
    },
    Booked_Seats_Biness : {
        type : Array,
        default : []
    },
    Booked_Seats_Economy : {
        type : Array,
        default : []
    },
    Booked_Seats_Executive : {
        type : Array,
        default : []
    },
    Price_Bissness : {
        type : Number,
        required : true
    },
    Price_Economy : {
        type : Number,
        required : true
    },
    Price_Executive : {
        type : Number,
        required : true
    }
},{timestamps : true});

const Travel = mongoose.model('Travel',TravelSchema);

module.exports = Travel;