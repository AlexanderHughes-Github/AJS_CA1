const { Schema, model } = require('mongoose');

const lecturerSchema = new Schema({
    lecturer_fname: {
        type: String,
        required: [true, 'First Name field is required'],
    },
    lecturer_lname: {
        type: String,
        required: [true, 'Last Name field is required'],
    },
    module_amount: {
        type: String,
        required: [true, 'Module Amount field is required'],
    },
}, { timestamps: true });

module.exports = model('Lecturer', lecturerSchema);

