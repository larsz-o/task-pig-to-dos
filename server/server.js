//REQUIRES & CONSTS
const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000; 

const tasks = require('./modules/routers/tasks-router.js');

//USES
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(express.static('server/public'));
app.use('/tasks', tasks);

//SERVER
app.listen(PORT, ()=>{
    console.log('listening on:', PORT); 
});