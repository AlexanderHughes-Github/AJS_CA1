const express = require('express');
const router = express.Router();
const studentModuleController = require('../controllers/studentModule.controller');
const authenticate = require('../middleware/auth');

router.get('/', studentModuleController.readData);
router.get('/:id', studentModuleController.readOne);
router.post('/', authenticate, studentModuleController.createData);
router.put('/:id', authenticate, studentModuleController.updateData);
router.delete('/:id', authenticate, studentModuleController.deleteData);

module.exports = router;
