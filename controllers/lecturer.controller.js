const Lecturer = require('../models/Lecturer');

exports.readData = async (req, res) => {
    try {
        const lecturers = await Lecturer.find({});
        res.status(200).json(lecturers);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving lecturers", error: error });
    }
};

exports.readOne = async (req, res) => {
    try {
        const lecturer = await Lecturer.findById(req.params.id);
        if (!lecturer) return res.status(404).json({ message: "Lecturer not found" });
        res.status(200).json(lecturer);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving lecturer", error: error });
    }
};

exports.createData = async (req, res) => {
    try {
        const newLecturer = new Lecturer(req.body);
        const savedLecturer = await newLecturer.save();
        res.status(201).json(savedLecturer);
    } catch (error) {
        res.status(400).json({ message: "Error creating lecturer", error: error });
    }
};

exports.updateData = async (req, res) => {
    try {
        const updatedLecturer = await Lecturer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLecturer) return res.status(404).json({ message: "Lecturer not found" });
        res.status(200).json(updatedLecturer);
    } catch (error) {
        res.status(400).json({ message: "Error updating lecturer", error: error });
    }
};

exports.deleteData = async (req, res) => {
    try {
        const deletedLecturer = await Lecturer.findByIdAndDelete(req.params.id);
        if (!deletedLecturer) return res.status(404).json({ message: "Lecturer not found" });
        res.status(200).json({ message: "Lecturer deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting lecturer", error: error });
    }
};
