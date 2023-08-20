const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({

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
    Date : {
        type : Date,
        default : Date.now
    },

    No_Of_Passengers : {
        type : Number,
        required : true
    },

    Booked_Seats : {
        type : Array,
        required : true,
        validate :{
            validator : function(v){
                return v.length <= this.No_Of_Passengers;
            },
            message : 'The Booked Seats Must Be Less Than Or Equal The Number Of Passengers'
        }
    },

    Is_Canceled : {
        type : Boolean,
        default : false
    },

    Is_Paid : {
        type : Boolean,
        default : false
    },
    Class : {
        type :  String,
        required : true,
        enum : ['Economy','Business','Executive']
    },
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    Travel : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Travel',
        required : true
    }
},{timestamps : true});

const BookingModel= mongoose.model('Booking',BookingSchema);

module.exports = BookingModel;