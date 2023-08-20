const mongoose = require('mongoose');

const TravelModelSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        maxlength : [100, 'Your name cannot exceed 100 characters']
    },

    Image : {
        type : String
    },

    Flight_Seat : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'FlightSeat',
        required : true
    }
},{timestamps : true});

const TravelModel= mongoose.model('TravelMode',TravelModelSchema);

module.exports = TravelModel;