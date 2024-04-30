const Module = require('../models/module.model');

const readData = (req, res) => {
    Module.find({})
        .then((data) => {
            if (data.length > 0) {
                res.status(200).json(data);
            } else {
                res.status  (404).json('None found');
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
};

const readOne = (req, res) => {
    let id = req.params.id;

    Module.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).json({ msg: `Module ${id} not found!` });
            }
            res.status(200).json(data);
        })
        .catch(err => {
            if (err.name === 'CastError') {
                res.status(404).json({ msg: `Module ${id} not found!` });
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        });
};

const createData = (req, res) => {
    let inputData = req.body;

    Module.create(inputData)
        .then(data => {
            console.log(`New Module Created`, data);
            res.status(201).json(data);
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                res.status(422).json(err);
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        });
};

const updateData = (req, res) => {
    let id = req.params.id;
    let data = req.body;

    Module.findByIdAndUpdate(id, data, {
        new: true,
    })
        .then(newData => {
            res.status(201).json(newData);
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                res.status(422).json(err);
            } else if (err.name === 'CastError') {
                res.status(404).json({ msg: `Module ${id} not found!` });
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        });
};

const deleteData = (req, res) => {
    let id = req.params.id;

    Module.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).json({ msg: `Module ${id} not found!` });
            }
            res.status(200).json({ msg: `Module ${id} deleted!` });
        })
        .catch(err => {
            if (err.name === 'CastError') {
                res.status(404).json({ msg: `Module ${id} not found!` });
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        });
};

module.exports = {
    readData,
    readOne,
    createData,
    updateData,
    deleteData
};
