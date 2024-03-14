const dotenv = require("dotenv")
dotenv.config()


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.MAIL_PASS
    }
})

async function SendMail(name,email,user_id){
        const mailOptions = {
            from:process.env.EMAIL,
            to:email,
            subject:"Verification Mail",
            html:`<p>Hi ${name} thanks for Sigining Up please <a href="http://localhost:5000/api/usersRoutes/verify?id=${user_id}">Verify</a> your mail to complete the signUp Process</p>`
        }
        transporter.sendMail(mailOptions,(error, info) => {
            if (error) {
                console.log(error);
                return error
            }
            return info;
        })
    }


module.exports=SendMail