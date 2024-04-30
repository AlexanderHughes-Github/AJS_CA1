const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router
    .get('/students', studentController.readData)
    .get('/students/:id', studentController.readOne)
    .post('/students', studentController.createData)
    .put('/students/:id', studentController.updateData)
    .delete('/students/:id', studentController.deleteData);

module.exports = router;