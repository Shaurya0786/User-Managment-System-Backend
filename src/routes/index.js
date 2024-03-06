const express = require('express')
const router = express.Router()

const userRoutes = require("./user-routes") 

router.use('/usersRoutes',userRoutes)


module.exports=router