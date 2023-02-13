const express = require('express')
const cors=require("cors")
const mongoose = require('mongoose')
const todo=require("../todobackend/Routing/route")

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => res.send('hello'))
app.use("/todo",todo)

app.listen(8080, async() => {
await mongoose.connect("mongodb://127.0.0.1:27017/Unit6ev")
    console.log('server started on port 8080')
})