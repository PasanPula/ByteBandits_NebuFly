const express = require("express");
const DestinationController = require("../Controllers/Destination.Controller");
const Auth = require("../Middleware/authetication");

const router = express.Router();

router.post("/", Auth.verifyUser,Auth.verifyAdmin , (req, res) => {
  DestinationController.AddDestination(req, res);
});

router.get("/",  Auth.verifyUser,(req, res) => {
  DestinationController.GetAllDestination(req, res);
});

router.get("/:id", Auth.verifyUser, (req, res) => {
  DestinationController.GetDestinationById(req, res);
});

router.put("/:id", Auth.verifyUser,Auth.verifyAdmin,(req, res) => {
  DestinationController.UpdateDestinationById(req, res);
});

router.delete("/:id",Auth.verifyUser,Auth.verifyAdmin, (req, res) => {
  DestinationController.DeleteDestinationById(req, res);
});

module.exports = router;
