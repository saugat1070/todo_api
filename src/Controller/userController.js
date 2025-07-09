import User from "../Model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../services/mailSender.js";
import { registerMail } from "../Static/registerMail.js";
import dotenv from "dotenv";
dotenv.config()

const userRegister = async (req,res)=>{
    const {email,password,fullName} = req.body;
    if(!email || !password || !fullName){
        res.status(400).json({
            message : "please provide all data"
        });
        return;
    }

    const createUSer = await User.create({
        fullName : fullName,
        email : email,
        password : bcrypt.hashSync(password,10)
    })

    if(!createUSer){
        res.status(403).json({
            message : "register fail in database creation"
        });
        return;
    }

    const data = {
        from : "saugatgiri1070@gmail.com",
        to : email,
        subject : "Thank you for register",
        html : registerMail()
    }
    sendMail(data);

    res.status(200).json({
        message : "user register succecssfully"
    })
}

const userLogin = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).json({
            message : "please enter email and password"
        });
        return;
    }

    const findUser = await User.findOne({
        email : email
    });

    if(!findUser){
        res.status(404).json({
            message : "user with this email is not found"
        });
        return;
    }

    const checkPassword = bcrypt.compareSync(password,findUser.password);
    if(!checkPassword){
        res.status(401).json({
            message : "password is incorrect"
        });
        return;
    }

    const token = jwt.sign({
        userId : findUser._id,
        name : findUser.fullName
    },process.env.JWT_SECRET_KEY,{
        expiresIn:"10d"
    })

    res.json({
        message : "login successfull",
        token : token
    })
}

const fetchProfile = async(req,res)=>{
    const userId = req.user.id;
    const findInformation = await User.findById(userId).select("-password")
    res.status(200).json({
        message : "profile fetch success",
        data : findInformation
    })
}

export  {userRegister,userLogin,fetchProfile};









