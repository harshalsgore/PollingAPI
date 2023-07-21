const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Polling_System');

//mongoose.connect('mongodb+srv://harshalsgore:Harshal123@cluster0.uucjlco.mongodb.net/');

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;