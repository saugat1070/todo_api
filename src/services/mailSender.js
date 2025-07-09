import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "saugatgiri1070@gmail.com",
        pass : "hwhhfrienandfxiq"
    }
})

