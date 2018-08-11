const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000; 
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/taskpig';
const Schema = mongoose.Schema; 

const TaskSchema = new Schema({
    task: {type: String}, 
    complete: {type: Boolean}
});

mongoose.connect(mongoURI, {useNewUrlParser: true});
mongoose.connection.on('open', ()=>{
    console.log('mongoose is working!');
});
mongoose.connection.on('error', (error) =>{
    console.log('mongoose failed. error:', error);
});

const Tasks = mongoose.model('tasks', TaskSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(express.static('server/public'));

//ROUTES
app.get('/tasks', (req, res)=>{
    Tasks.find({}).then((foundTasks)=>{
        res.send(foundTasks);
    })
});

app.post('/tasks', (req, res)=>{
   const dataFromClient = req.body;
   const taskToAdd = new Tasks(dataFromClient); 
   taskToAdd.save().then(()=>{
       console.log('Task Added:', taskToAdd);
       res.sendStatus(201);
   }).catch((error)=>{
       console.log(error);
       res.sendStatus(500);
   })
});

//SERVER
app.listen(PORT, ()=>{
    console.log('listening on:', PORT); 
});