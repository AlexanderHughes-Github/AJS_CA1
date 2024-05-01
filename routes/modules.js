const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/module.controller');
const authenticate = require('../middleware/auth');

console.log("Adding module routes");

router.get('/', moduleController.readData);
router.get('/:id', moduleController.readOne);
router.post('/', authenticate, moduleController.createData);
router.put('/:id', authenticate, moduleController.updateData);
router.delete('/:id', authenticate, moduleController.deleteData);

module.exports = router;
