import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required: true,
        null : false,
        unique : true
    },
    fullName :{
        type : String,
        required : true,
        null : false
    }
})