const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshalsgore:YLWXQoTvv7T5RphA@cluster0.uucjlco.mongodb.net/Poling-API?retryWrites=true&w=majority');

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;