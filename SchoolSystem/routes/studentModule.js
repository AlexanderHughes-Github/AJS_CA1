const express = require('express');
const router = express.Router();
const studentModuleController = require('../controllers/studentModule.controller');

router
    .get('/student-modules', studentModuleController.readData)
    .get('/student-modules/:id', studentModuleController.readOne)
    .post('/student-modules', studentModuleController.createData)
    .put('/student-modules/:id', studentModuleController.updateData)
    .delete('/student-modules/:id', studentModuleController.deleteData);

module.exports = router;
