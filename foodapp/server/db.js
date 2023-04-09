const mongoose = require('mongoose')

const baseUrl="mongodb://localhost:27017"
mongoose.connect(baseUrl,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

const db=mongoose.connection

db.on('connection',()=>{
    console.log('mongo db connected')
})

db.on('error',()=>{
    console.log('mongo db not connected')
})

module.exports=mongoose

