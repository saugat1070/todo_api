import express from "express";
import { userRegister } from "../Controller/userController";


const router = express.Router();

router.route("/register").post(userRegister);

