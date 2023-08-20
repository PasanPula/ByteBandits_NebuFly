
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxlength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true,
        validate : {
            validator : function(email) {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(email);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        trim: true,
        minlength: [6, 'Your password must be longer than 6 characters'],
    },
    NIC: {
        type: String,
        required: [true, 'Please enter your NIC'],
        trim: true,
        unique: true,
        validate : {
            validator : function(NIC) {
                const NICRegex =  /^(?:\d{9}[Vv]?|\d{12})$/;
                return NICRegex.test(NIC);
            },
            message: props => `${props.value} is not a valid NIC!`
        },
    },
    otp_secret: {
        type: String,
        default: null
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    is_active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: Date,
    deleted_at: Date
},{timestamps: true});

const User= mongoose.model('User', userSchema);

module.exports = User;
