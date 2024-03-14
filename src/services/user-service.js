const user = require("../models/user-model");

async function CreateUser(data){
    try {
        const Newuser = await user(data)
        await Newuser.save();
        return Newuser
    } catch (error) {
        throw error
    }
}

async function verifyUser(id){
    try {
        const Updateuser = await user.updateOne({_id:id},{$set:{isVerified:1}})
        return Updateuser;
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports = {
    CreateUser,
    verifyUser
}