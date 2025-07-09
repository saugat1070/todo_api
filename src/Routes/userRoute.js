import express from "express";
import { userRegister,userLogin } from "../Controller/userController.js";
import { isLoggin } from "../middleware/authMiddleware.js";
import { fetchProfile } from "../Controller/userController.js";

const router = express.Router();

router.route("/register").post(userRegister); // http://localhost:3000/api/user/register
router.route("/login").post(userLogin)
router.route("/profile").post(isLoggin,fetchProfile)

export default router;
