const express =  require("express")
const {serverConfig} = require("./config")
const mongoose = require('mongoose');
const ApiRoutes = require('./routes')
const path = require('path')

const mongoDB = serverConfig.url;
console.log(mongoDB)
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(()=>console.log('connected'));
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
const app = express();

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',ApiRoutes)

app.listen(serverConfig.port,()=>{
    console.log("The Express Server is Connected")
})
