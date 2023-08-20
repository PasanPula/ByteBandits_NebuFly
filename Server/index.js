const http = require('http');
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const  mongoose = require('mongoose');
const passport = require('passport');
const  logger = require('morgan');
var fs = require('fs')
require('dotenv').config();

const UserRouter =  require('./Routers/User.Router');
const DestinationRouter =  require('./Routers/Destination.Router');
const FlightSeatRouter =  require('./Routers/FlightSeat.Router');
const TravelModeRouter =  require('./Routers/TravelMode.Router');
const TravelRouter =  require('./Routers/Travel.Router');
const BookingRouter =  require('./Routers/Booking.Router');


const app = express();

app.locals.webLang = "EN"

const server = http.createServer(app);



mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log("MongoDB database connection established successfully");
});



app.use(logger('dev'));


app.use(logger('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());


app.use('/api/user', UserRouter);
app.use('/api/destination', DestinationRouter);
app.use('/api/flightseat', FlightSeatRouter);
app.use('/api/travelmode', TravelModeRouter);
app.use('/api/travel', TravelRouter);
app.use('/api/book', BookingRouter);




app.get('/', (req, res) => {

    res.contentType('text/html');
    res.sendFile('/index.html');
});


server.listen(5000|process.env.PORT, () => {
    console.log('Server is running on port http://localhost:5000');
})