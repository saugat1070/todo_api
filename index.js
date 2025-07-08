// const express = require("express")
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./userModel.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(process.env.DB_URL
).then(()=>{
    console.log("DataBase is connected!!");
}).catch(()=>{
    console.log("Something error on database connectioni");
})

app.post("/",async(req,res)=>{
    const {email,password,fullName} = req.body;
    const userCreate = await User.create({
        ...req.body
    })
    if(!userCreate){
        res.json({
            message : "failed in creation during database"
        });
        return;
    }
    res.json({
        message : "user register successfull"
    })

})

app.listen(3000, () => {
  console.log(`server is run at 3000`);
});

// https://github.com/saugat1070
