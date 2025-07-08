// const express = require("express")
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./src/Routes/userRoute.js"
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

// app.post("/",async (req,res)=>{
//     console.log("yes")
//     const {email,password,fullName} = req.body;
//     console.log(email,password,fullName);
//     // console.log(...req.body)
//     const userCreate = await User.create({
//         ...req.body
//     })
//     if(!userCreate){
//         res.json({
//             message : "failed in creation during database"
//         });
//         return;
//     }
//     res.json({
//         message : "user register successfull"
//     })

// })

app.use("/api/user",userRoute); //  http://localhost:3000/api/user


app.listen(3000, () => {
  console.log(`server is run at 3000`);
});

// https://github.com/saugat1070


// modelName.create() //
// modelName.find() //
// modelName.update()
