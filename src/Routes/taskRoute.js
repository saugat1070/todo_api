import express from "express";
import { TaskCreate } from "../Controller/taskController.js";
import { subTaskCreate } from "../Controller/taskController.js";
import { isLoggin } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
import { subtaskEdit } from "../Controller/taskController.js";
import { deleteSubTask } from "../Controller/taskController.js";

const router = express.Router();

//routes for task creation
router.route("/create").post(isLoggin,TaskCreate);
router.route("/:titleId/create").post(isLoggin,upload.single("imageName"),subTaskCreate);
router.route("/subtask/:subtaskId").patch(isLoggin,subtaskEdit).delete(isLoggin,deleteSubTask);

export default router;

//https://cloud.mongodb.com/v2/686d488971850b1df7b03efc#/metrics/replicaSet/686d49812dd3a77893691697/explorer/test/subtasks/find --> req.params