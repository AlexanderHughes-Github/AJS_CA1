const mongoose = require('mongoose');

const studentModuleSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.String, ref: 'Student', required: true },
  module_id: { type: mongoose.Schema.Types.String, ref: 'Module', required: true }
});

module.exports = mongoose.model('Student_Module', studentModuleSchema);

