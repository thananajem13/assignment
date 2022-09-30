import mongoose from 'mongoose' 

const userSchema =new mongoose.Schema({
firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:true  
},
email:{
    type:String,
    required:true,
    unique:true


},
confirmEmail:{
    type:Boolean,
    default:false
},
password:{
    type:String,
    required:true
},
age:Number
},{timestamps:true})
export const userModel = mongoose.model('user',userSchema)