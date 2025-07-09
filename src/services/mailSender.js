import nodemailer from "nodemailer"



const sendMail = async(data)=>{
    const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "saugatgiri1070@gmail.com",
        pass : "hwhhfrienandfxiq"
    }
});

    try {
    const send = await transporter.sendMail(data)
    } catch (error) {
        console.log(error.message);
    }
}
export default sendMail;

