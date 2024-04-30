const { Schema, model } = require('mongoose');

const studentModuleSchema = new Schema({
    student_id: {
        type: String,
        ref: 'Student',
        required: [true, 'Student ID field is required'],
    },
    module_id: {
        type: String,
        ref: 'Module',
        required: [true, 'Module ID field is required'],
    },
}, { timestamps: true });

module.exports = model('Student_Module', studentModuleSchema);
