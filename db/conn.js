const mongoose = require('mongoose');
const env = require('dotenv');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log('CONNECTED OK');
}).catch(()=>{
    console.log('Unable to Connect');
})