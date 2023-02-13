const express = require("express")
const app = express.Router();
const Todo = require("../model/todo.model")
///////////////////
app.get("/", async (req, res) => {
    try {
        const user = await Todo.find()
        res.send(user)
        
    } catch (err) {
        res.send(err.message)
    }
})

/////////////////

app.post("/", async (req, res) => {
    const {name,des} = req.body
    try {
        const todo = await Todo.create({name,des})
        res.send(todo)
    } catch(err) {
        res.send(err.message)
    }
})

//////////////////////
app.delete("/:id", async (req, res) => { 
    let {id}=req.params
    try {
        let Newtod = await Todo.deleteOne({id})
        res.send('Item deleted')
    } catch (err) {
        console.log(err)
    }
})
///////////////////

app.patch("/:id",async(req, res) => {
    let { id } = req.params

    try {
        let newdata = await Todo.replaceOne({ id })
        res.send(newdata)
    } catch (err) {
        res.status(401).send("Wrong id")
    }
    
})
//////////////////
module.exports=app