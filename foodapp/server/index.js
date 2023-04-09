const express = require('express')
const mongoose = require('mongoose')
// const baseUrl = "mongodb://localhost:27017"
const db=require('./db')
const app = express()

const port = 3004

app.use(express.json())

app.get('/', (req, res) => {
    res.send('i am working  ')

})
// mongoose.connect(baseUrl, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })

// const db = mongoose.connection

// db.on('connection', () => {
//     console.log('mongo db connected')
// })

// db.on('error', () => {
//     console.log('mongo db not connected')
// })

app.listen(port,db, () => {
    `server running on ${port}`
})