const mongoose = require('mongoose');

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect('mongodb://127.0.0.1/Polling_System');

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;