const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    student_fname: {
        type: String,
        required: [true, 'First Name field is required'],
    },
    student_lname: {
        type: String,
        required: [true, 'Last Name field is required'],
    },
    gpa: {
        type: String,
        required: [true, 'GPA field is required'],
    },
}, { timestamps: true });

module.exports = model('Student', studentSchema);
