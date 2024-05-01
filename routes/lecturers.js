const express = require('express');
const router = express.Router();
const lecturerController = require('../controllers/lecturer.controller');
const authenticate = require('../middleware/auth');

console.log("Adding lecturer routes");

router.get('/', lecturerController.readData);
router.get('/:id', lecturerController.readOne);
router.post('/', authenticate, lecturerController.createData);
router.put('/:id', authenticate, lecturerController.updateData);
router.delete('/:id', authenticate, lecturerController.deleteData);

module.exports = router;
