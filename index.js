// const express = require("express")  //CommonJs
import express from "express"; //ES6+
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./src/Routes/userRoute.js"
import taskRoute from "./src/Routes/taskRoute.js"
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
}).catch((err)=>{
  console.log(err.message)
    console.log("Something error on database connectioni");
})


app.use("/api/user",userRoute); //  http://localhost:3000/api/user
app.use("/api/task",taskRoute); //http://localhost:3000/api/task

app.listen(3000, () => {
  console.log(`server is run at 3000`);
});

// https://github.com/saugat1070


// Model(Database Schema) --> Controller --> Routes --> index.js link
