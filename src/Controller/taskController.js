import User from "../Model/userModel.js";
import SubTask from "../Model/subtaskModel.js";
import Task from "../Model/taskModel.js";


export const TaskCreate = async (req,res)=>{
    const {title} = req.body;
    const userId = req.user.id;
    if(!title || !userId){
        res.status(400).json({
            message : "title or userId is missing"
        });
        return;
    }

    const taskCreate = await Task.create({
        title:title,
        createdBy : userId
    });
    if(!taskCreate){
        res.status(400).json({
            message : "task creation failed in database"
        });
        return;
    }
    res.status(200).json({
        message : "task create successfull"
    })
}

export const subTaskCreate = async(req,res)=>{
    const {subtitle,description} = req.body;
    if(!subtitle || !description){
        res.status(400).json({
            message : "subtitle,description must be provided"
        });
        return;
    }
    let imageName = ""
    if(req.file){
        imageName = req.file.filename;
    }

    const userId = req.user.id;
    const {titleId} = req.params;
    if(!userId || !titleId){
        res.status(400).json({
            message : "userId and titleId must be provided"
        });
        return;
    }

    const subTaskCreate = await SubTask.create({
        title : titleId,
        subtitle : subtitle,
        description : description,
        image : imageName
    });

    if(!subTaskCreate){
        res.json({
            message : "Something fail during subTaskCreation"
        });
    return;
    }

    res.status(200).json({
        message : "subTask created"
    })
}

export const subtaskEdit = async (req,res)=>{
    const {description} = req.body;
    const {subtaskId} = req.params;
    if(!subtaskId){
        res.status(400).json({
            message : "please provide subtaskID"
        });
        return;
    }

    const findsubTask = await SubTask.findById(subtaskId);
    if(!findsubTask){
        res.status(404).json({
            message : "subtask with this id is not found"
        });
        return;
    }
    const editSubtask = await SubTask.findByIdAndUpdate({_id:subtaskId},{
        description : description
    });
    res.status(200).json({
         message : "subtask update successfully"
    })

}

export const deleteSubTask = async (req,res)=>{
    const {subtaskId} = req.params;
    if(!subtaskId){
        res.status(400).json({
            message : "please provide subtask id"
        });
        return;
    }

    const deleteSubTask = await SubTask.findByIdAndDelete({_id:subtaskId});
    res.status(200).json({
        message : "data delete successfull"
    })
}


