const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

//mongo schema 
const TaskSchema = new Schema({
    task: {type: String}, 
    category: {type: String},
    complete: {type: Boolean}
});

module.exports = mongoose.model('tasks', TaskSchema);