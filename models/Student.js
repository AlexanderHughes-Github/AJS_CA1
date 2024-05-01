const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true },
  student_fname: { type: String, required: true },
  student_lname: { type: String, required: true },
  gpa: { type: Number, required: true }
});

module.exports = mongoose.model('Student', studentSchema);

