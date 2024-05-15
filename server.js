const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
    res.status(200).send('Test route is working');
});

require('dotenv').config();
const dbInit = require('./configs/db');
dbInit();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/students', require('./routes/students'));
app.use('/api/lecturers', require('./routes/lecturers'));
app.use('/api/modules', require('./routes/modules'));
app.use('/api/studentModules', require('./routes/studentModules'));
app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});