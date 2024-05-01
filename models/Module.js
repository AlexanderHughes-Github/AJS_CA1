const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  module_id: { type: String, required: true, unique: true },
  module_name: { type: String, required: true },
  lecturer_id: { type: mongoose.Schema.Types.String, ref: 'Lecturer' },
  module_image: { type: String }
});

module.exports = mongoose.model('Module', moduleSchema);

