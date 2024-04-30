const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();
require('./configs/db.js')();

app.use(express.json());
app.set('view engine', 'html');

app.use(express.static(__dirname + '/views/'));

//custom middleware
app.use((req, res, next) => {

    console.log(req.headers);
    let token = null;

    if(req.headers.authorization){
        token = req.headers.authorization.split(' ');
    }

    console.log(token);

    if(token && token[0] === 'Bearer'){
        // verify token is valid
    }
    else {
        console.log("No token");
    }

    next();
});
///


app.use('/api/lecturers', require('./routes/lecturers'));
app.use('/api/modules', require('./routes/modules'));
app.use('/api/studentModule', require('./routes/studentModule'));
app.use('/api/students', require('./routes/students'));



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});