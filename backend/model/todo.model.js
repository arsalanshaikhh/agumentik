const { mongoose, model, Schema } =require("mongoose")

const TodoSchema = new Schema({
    name:{ type: "String", required: true },
    des:{ type:"String", require:true }
})

const Todo = model("todo", TodoSchema)

module.exports=Todo
