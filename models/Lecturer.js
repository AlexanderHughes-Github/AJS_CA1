const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({
  lecturer_id: { type: String, required: true, unique: true },
  lecturer_fname: { type: String, required: true },
  lecturer_lname: { type: String, required: true },
  module_amount: { type: Number, required: true }
});

module.exports = mongoose.model('Lecturer', lecturerSchema);

