const express = require("express")
const router = express.Router();


const {userController} = require("../controllers")



const multer = require('multer')
const upload = multer({dest:`./src/public/Users/`})


router.get('/')
router.get('/register',userController.registeruser)

router.post('/users',upload.single('UserImage') , userController.createUser)

router.get('/verify',userController.verify);

module.exports=router
