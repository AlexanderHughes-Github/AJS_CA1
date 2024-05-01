const Module = require('../models/Module');

exports.readData = async (req, res) => {
    try {
        const modules = await Module.find({});
        res.status(200).json(modules);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving modules", error: error });
    }
};

exports.readOne = async (req, res) => {
    try {
        const module = await Module.findById(req.params.id);
        if (!module) return res.status(404).json({ message: "Module not found" });
        res.status(200).json(module);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving module", error: error });
    }
};

exports.createData = async (req, res) => {
    try {
        const newModule = new Module(req.body);
        const savedModule = await newModule.save();
        res.status(201).json(savedModule);
    } catch (error) {
        res.status(400).json({ message: "Error creating module", error: error });
    }
};

exports.updateData = async (req, res) => {
    try {
        const updatedModule = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedModule) return res.status(404).json({ message: "Module not found" });
        res.status(200).json(updatedModule);
    } catch (error) {
        res.status(400).json({ message: "Error updating module", error: error });
    }
};

exports.deleteData = async (req, res) => {
    try {
        const deletedModule = await Module.findByIdAndDelete(req.params.id);
        if (!deletedModule) return res.status(404).json({ message: "Module not found" });
        res.status(200).json({ message: "Module deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting module", error: error });
    }
};
