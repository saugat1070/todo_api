import mongoose, { Schema } from "mongoose";

const subtaskSchema = new mongoose.Schema({
    title : {
        type : Schema.Types.ObjectId,
        ref : "Task",
        required : true
    },
    subtitle : {
        type : String,
        required : true
    },
    description : {
        type : String,
        null : true
    },
    image : {
        type : String
    },
    isCompleted : {
        type : Boolean,
        default : false
    }

},{
    timeseries : true
})

const SubTask = new mongoose.model("SubTask",subtaskSchema);
export default SubTask;