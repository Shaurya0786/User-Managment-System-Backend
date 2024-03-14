const {UserService} = require('../services')
const bcrypt = require('bcrypt')
const { MailService } = require('../services')


function registeruser(req,res){

   return  res.render('Users/registration')
}

 async function createUser(req,res){
    try {
        console.log(req.file)
        const password=req.body.password
        const hash = await bcrypt.hash(password,12)
        const user = await UserService.CreateUser({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mno,
        image:req.file.originalname,
        password:hash,
        is_admin:1,
    })
    if(user){
        const info = await MailService(req.body.name,req.body.email,user._id)
        return res.render('Users/registration',{message:'Your Registeration was Successful please verity your mail'})
    }
    } catch (error) {
        console.log(error)
        return res.render('Users/registration',{message:'Your Registeration was unSuccessful please register again'})
    }
}

async function verify(req,res){
    try {
    const id = req.query.id
    console.log(id)
    const user = await UserService.verifyUser(id)
    return res.render('Users/Email-Verified')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {
    registeruser,
    createUser,
    verify
}