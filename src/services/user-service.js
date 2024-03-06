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

module.exports = {
    CreateUser
}