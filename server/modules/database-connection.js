const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskpig';

//mongo connections 
mongoose.connect(mongoURI, {useNewUrlParser: true});
mongoose.connection.on('open', ()=>{
    console.log('Connected to Mongo');
});
mongoose.connection.on('error', (error) =>{
    console.log('Connection to Mongo Failed. Error:', error);
});
module.exports = mongoose; 