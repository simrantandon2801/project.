require('dotenv').config()
const express=require('express');

const app=express();
const cors = require('cors')
const port= 5000;

const connectToDatabase = require('./db');
connectToDatabase();

const jhgg=require('./Simran')


const ram=require('./Api')
app.use(cors());
app.use('/a',jhgg)
app.post('/',function(req,res){
    res.send('hello world')
});


app.use('/hum',ram)
app.listen(port,function(){
    console.log('server listening on port ${port}')
});
