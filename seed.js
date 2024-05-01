const mongoose = require('mongoose');
require('dotenv').config();
const Student = require('./models/Student');
const Lecturer = require('./models/Lecturer');
const Module = require('./models/Module');
const StudentModule = require('./models/Student_Module');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

async function seedDatabase() {
  // Clear the database
  await Student.deleteMany({});
  await Lecturer.deleteMany({});
  await Module.deleteMany({});
  await StudentModule.deleteMany({});

  // Create sample lecturers
  const lecturers = await Lecturer.insertMany([
    { lecturer_id: 'L001', lecturer_fname: 'John', lecturer_lname: 'Doe', module_amount: 2 },
    { lecturer_id: 'L002', lecturer_fname: 'Jane', lecturer_lname: 'Smith', module_amount: 1 }
  ]);

  // Create sample modules
  const modules = await Module.insertMany([
    { module_id: 'M001', module_name: 'Mathematics', lecturer_id: lecturers[0]._id, module_image: 'math.jpg' },
    { module_id: 'M002', module_name: 'History', lecturer_id: lecturers[1]._id, module_image: 'history.jpg' }
  ]);

  // Create sample students
  const students = await Student.insertMany([
    { student_id: 'S001', student_fname: 'Alice', student_lname: 'Johnson', gpa: 3.7 },
    { student_id: 'S002', student_fname: 'Bob', student_lname: 'Brown', gpa: 3.4 }
  ]);

  // Create sample student_modules
  const studentModules = await StudentModule.insertMany([
    { student_id: students[0]._id, module_id: modules[0]._id },
    { student_id: students[1]._id, module_id: modules[1]._id }
  ]);

  console.log('Database seeded!');
  mongoose.connection.close();
}

seedDatabase();
