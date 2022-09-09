
let mongoose = require('mongoose')  
module.exports.dbconn = ()=>{
    mongoose.connect('mongodb://localhost:27017/demo3').then(()=>{console.log("db connected");})
}