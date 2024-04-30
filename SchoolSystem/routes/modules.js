const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/module.controller');

router
    .get('/modules', moduleController.readData)
    .get('/modules/:id', moduleController.readOne)
    .post('/modules', moduleController.createData)
    .put('/modules/:id', moduleController.updateData)
    .delete('/modules/:id', moduleController.deleteData);

module.exports = router;
