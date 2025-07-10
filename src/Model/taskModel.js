import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        null : false
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
},{
    timestamps : true
})

const Task = new mongoose.model("Task",taskSchema);
export default Task;