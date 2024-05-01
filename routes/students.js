const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const authenticate = require('../middleware/auth');

console.log("Loading student routes");

router.get('/', studentController.readData);
router.get('/:id', studentController.readOne);
router.post('/', authenticate, studentController.createData);
router.put('/:id', authenticate, studentController.updateData);
router.delete('/:id', authenticate, studentController.deleteData);

module.exports = router;
