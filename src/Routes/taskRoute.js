import express from "express";
import { TaskCreate } from "../Controller/taskController.js";
import { isLoggin } from "../middleware/authMiddleware.js";
const router = express.Router();

//routes for task creation
router.route("/create").post(isLoggin,TaskCreate)


export default router;