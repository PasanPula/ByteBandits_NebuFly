
const Destination = require('../models/Destination.Model');

const AddDestination = async (req, res) => {
    try {
        const { Name, Description, KM, Temperature, Rotation_Period, Distance, Surface_area } = req.body;
        const newDestination = new Destination({
            Name: Name,
            Description: Description,
            KM: KM,
            Temperature: Temperature,
            Rotation_Period: Rotation_Period,
            Distance: Distance,
            Surface_area: Surface_area
        });
        const Destination_data = await newDestination.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The Destination Created Successfully ', data: Destination_data });
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}

const GetAllDestination = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The Destination Get Successfully ', data: destinations });
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}

const GetDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The Destination Get Successfully ', data: destination });
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}

const UpdateDestinationById = async (req, res) => {
    try {
        const { Name, Description, KM, Temperature, Rotation_Period, Distance, Surface_area } = req.body;
        const destination = await Destination.findByIdAndUpdate(req.params.id, {
            $set: {
            Name: Name,
            Description: Description,
            KM: KM,
            Temperature: Temperature,
            Rotation_Period: Rotation_Period,
            Distance: Distance,
            Surface_area: Surface_area
            }
        }, { new: true });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The Destination Updated Successfully ', data: destination });
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}

const DeleteDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findByIdAndDelete(req.params.id);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, status: 'The Destination Deleted Successfully ', data: destination });
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: false, status: error.message, data: null });
    }
}

module.exports = {
    AddDestination,
    GetAllDestination,
    GetDestinationById,
    UpdateDestinationById,
    DeleteDestinationById
}