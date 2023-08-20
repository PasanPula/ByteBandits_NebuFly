const express = require("express");
const BookingController = require("../Controllers/Booking.Controller");
const Auth = require("../Middleware/authetication");


const router = express.Router();


router.get("/", Auth.verifyUser,Auth.verifyAdmin,(req, res) => {
  BookingController.getBooking(req, res);
});

router.get("/:id",Auth.verifyUser,(req, res) => {
  BookingController.getBookingById(req, res);
});

router.post("/",Auth.verifyUser, (req, res) => {
  BookingController.addBooking(req, res);
});

router.put("/:id",Auth.verifyUser, (req, res) => {
  BookingController.updateBooking(req, res);
});

router.delete("/:id",Auth.verifyUser,(req, res) => {
  BookingController.deleteBooking(req, res);
});


module.exports = router;
