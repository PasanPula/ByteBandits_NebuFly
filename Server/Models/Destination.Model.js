const mongoose = require('mongoose');

const DestinationSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        maxlength : [100, 'Your name cannot exceed 100 characters']
    },
    Description : {
        type : String,
        required : true,
        trim : true,
        maxlength : [300, 'Your name cannot exceed 300 characters']
    },
    KM : {
        type : String,
        required : true,
    },
    Temperature : {
        type : String,
        required : true
    },
    Rotation_Period : {
        type : String,
        required : true
    },
    Distance : {
        type : String,
        required : true
    },
    Surface_area : {
        type : String,
        required : true
    }
},{timestamps : true});

const DestinationModel= mongoose.model('Destination',DestinationSchema);

module.exports = DestinationModel;