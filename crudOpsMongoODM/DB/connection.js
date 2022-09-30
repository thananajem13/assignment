import mongoose from 'mongoose'
export const conn = async()=>{
return await  mongoose.connect('mongodb://localhost:27017/mongocruds').then((result) => {
    console.log("connected to DB ...");
}).catch((error)=>{
    console.log('failed too connect to DB ...');
    
})
}