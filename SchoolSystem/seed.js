const mongoose = require('mongoose');
require('dotenv').config();
const Lecturer = require('./models/lecturer.model');
const Module = require('./models/module.model');
const Student = require('./models/student.model');
const Student_Module = require('./models/studentModule.model');

const seedData = async () => {
    mongoose.connect(process.env.DB_ATLAS_URL, {
        useNewUrlParser: true
    })

    const lecturersData = [
        { lecturer_fname: 'John', lecturer_lname: 'Doe', module_amount: 3 },
        { lecturer_fname: 'Jane', lecturer_lname: 'Doe', module_amount: 2 },
        { lecturer_fname: 'Michael', lecturer_lname: 'Smith', module_amount: 4 },
        { lecturer_fname: 'Emily', lecturer_lname: 'Johnson', module_amount: 3 },
    ];

    const modulesData = [
        { module_name: 'Math', lecturer_id: 'lecturerId1', module_image: 'math.jpg' },
        { module_name: 'History', lecturer_id: 'lecturerId2', module_image: 'history.jpg' },
        { module_name: 'Science', lecturer_id: 'lecturerId3', module_image: 'science.jpg' },
        { module_name: 'English', lecturer_id: 'lecturerId1', module_image: 'english.jpg' },
    ];

    const studentsData = [
        { student_fname: 'Alice', student_lname: 'Smith', gpa: 3.5 },
        { student_fname: 'Bob', student_lname: 'Johnson', gpa: 3.2 },
        { student_fname: 'Megan', student_lname: 'Williams', gpa: 3.8 },
        { student_fname: 'Alex', student_lname: 'Davis', gpa: 3.5 },
    ];

    const studentModulesData = [
        { student_id: 'studentId1', module_id: 'moduleId1' },
        { student_id: 'studentId2', module_id: 'moduleId1' },
        { student_id: 'studentId3', module_id: 'moduleId2' },
        { student_id: 'studentId1', module_id: 'moduleId3' },
    ];

    try {
        const lecturers = await Lecturer.create(lecturersData);
        const modules = await Module.create(modulesData);
        const students = await Student.create(studentsData);
        const studentModules = await Student_Module.create(studentModulesData);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedData();
