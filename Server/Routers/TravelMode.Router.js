const express = require("express");

const TravelModeController = require("../Controllers/TravelMode.Controller");
const Auth = require("../Middleware/authetication");

const router = express.Router();

router.post("/",Auth.verifyUser,Auth.verifyAdmin, (req, res) => {
  TravelModeController.AddTravalMode(req, res);
});

router.get("/", Auth.verifyUser, (req, res) => {
  TravelModeController.GetAllTravalMode(req, res);
});

router.get("/:id",Auth.verifyUser,(req, res) => {
  TravelModeController.GetTravalModeById(req, res);
});

router.put("/:id", Auth.verifyUser,Auth.verifyAdmin, (req, res) => {
  TravelModeController.UpdateTravalMode(req, res);
});

router.delete("/:id",Auth.verifyUser,Auth.verifyAdmin,  (req, res) => {
  TravelModeController.DeleteTravalMode(req, res);
});

module.exports = router;
