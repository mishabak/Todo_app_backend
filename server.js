const express = require('express')
const cors = require('cors')
const userRouter = require('./router/userRouter')
const db = require('./config/connection/mongoConnection')
const app = express()
const morgon = require('morgan')

app.use(morgon('dev'))
app.use(express.json())
app.use(cors())
app.use('/',userRouter);

db.Connect((err)=>{
    if(err){
        console.log(err);  // database connection err 
    } else{
        console.log('mongo connected');
    }
})

// lisetening on to port 3001
app.listen(3001,()=>{
    console.log('port is connected');
})