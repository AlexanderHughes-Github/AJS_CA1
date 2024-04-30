const express = require('express');
const router = express.Router();
const lecturerController = require('../controllers/lecturer.controller');

router
    .get('/lecturers', lecturerController.readData)
    .get('/lecturers/:id', lecturerController.readOne)
    .post('/lecturers', lecturerController.createData)
    .put('/lecturers/:id', lecturerController.updateData)
    .delete('/lecturers/:id', lecturerController.deleteData);

module.exports = router;

