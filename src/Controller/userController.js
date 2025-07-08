import User from "../Model/userModel";


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
        password : password
    })

    if(!createUSer){
        res.status(403).json({
            message : "register fail in database creation"
        });
        return;
    }
    res.status(200).json({
        message : "user register succecssfully"
    })
}

export  {userRegister};