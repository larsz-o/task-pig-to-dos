const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//mongo schema 
const TaskSchema = new Schema({
    task: {type: String}, 
    category: {type: String},
    complete: {type: Boolean}
});
//mongo model 
const Tasks = mongoose.model('tasks', TaskSchema);
//ROUTES
router.get('/', (req, res)=>{
    Tasks.find({}).then((foundTasks)=>{
        res.send(foundTasks);
    })
});

router.post('/', (req, res)=>{
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

router.delete('/:id', (req, res)=>{
    Tasks.findByIdAndRemove(req.params.id).then((response)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
});

router.put('/complete/:id', (req, res)=>{
    console.log('update:', req.params.id);
    Tasks.findOne({_id: req.params.id}).then((foundTask)=>{
        console.log(foundTask);
        foundTask.complete = !foundTask.complete; 
        foundTask.save().then((response)=>{
            res.sendStatus(200);
        }).catch((error)=>{
            console.log(error);
            res.sendStatus(500);
        })
    })
});

module.exports = router; 