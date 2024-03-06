const {UserService} = require('../services')
const bcrypt = require('bcrypt')

function registeruser(req,res){
   return  res.render('Users/registration')
}

 async function createUser(req,res){
    try {
        //console.log(req.file);
        //console.log(req)
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
        return res.render('Users/registration',{message:'Your Registeration was Successful please verity your mail'})
    }
    } catch (error) {
        return res.render('/registration',{message:'Your Registeration was unSuccessful please register again'})
    }
}

module.exports = {
    registeruser,
    createUser
}