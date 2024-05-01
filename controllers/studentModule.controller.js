const StudentModule = require('../models/Student_Module');

exports.readData = async (req, res) => {
    try {
        const studentModules = await StudentModule.find({})
            .populate('student_id')  // Assuming you want to populate details of the student
            .populate('module_id'); // And details of the module
        res.status(200).json(studentModules);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving student-modules", error: error });
    }
};

exports.readOne = async (req, res) => {
    try {
        const studentModule = await StudentModule.findById(req.params.id)
            .populate('student_id')
            .populate('module_id');
        if (!studentModule) return res.status(404).json({ message: "Student-Module not found" });
        res.status(200).json(studentModule);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving student-module", error: error });
    }
};

exports.createData = async (req, res) => {
    try {
        const newStudentModule = new StudentModule(req.body);
        const savedStudentModule = await newStudentModule.save();
        res.status(201).json(savedStudentModule);
    } catch (error) {
        res.status(400).json({ message: "Error creating student-module", error: error });
    }
};

exports.updateData = async (req, res) => {
    try {
        const updatedStudentModule = await StudentModule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudentModule) return res.status(404).json({ message: "Student-Module not found" });
        res.status(200).json(updatedStudentModule);
    } catch (error) {
        res.status(400).json({ message: "Error updating student-module", error: error });
    }
};

exports.deleteData = async (req, res) => {
    try {
        const deletedStudentModule = await StudentModule.findByIdAndDelete(req.params.id);
        if (!deletedStudentModule) return res.status(404).json({ message: "Student-Module not found" });
        res.status(200).json({ message: "Student-Module deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting student-module", error: error });
    }
};
