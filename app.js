const env = require('dotenv');
const cors = require('cors');
const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
env.config({path: './config.env'});
app.use(cors({
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200
}));
app.use(cookieParser());
app.use(express.json()); // middleware
// Creating DB Connection
    require('./db/conn');
// End Here


app.use(require('./router/auth')); 


if(process.env.NODE_ENV === "production"){
    app.use(express.static("cleint/build"));
}

 
app.listen(port, ()=>{
    console.log(`Working at port ${port}`);
})