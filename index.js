const Port=3000
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(express.urlencoded());
const db=require('./configs/mongoose');

app.use('/',require('./routes/index'));
   
app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing on port...",Port);
})