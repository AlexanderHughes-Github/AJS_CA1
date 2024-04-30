const { Schema, model } = require('mongoose');

const moduleSchema = new Schema({
    module_name: {
        type: String,
        required: [true, 'Module Name field is required'],
    },
    lecturer_id: {
        type: String,
        ref: 'Lecturer',
        required: [true, 'Lecturer ID field is required'],
    },
    module_image: {
        type: String,
    },
}, { timestamps: true });

module.exports = model('Module', moduleSchema);
