import mongoose from "mongoose";


const connectDB = async () => {
    return await mongoose.connect(process.env.DBURI)
        .then(res => {
            console.log(`Connected DB Success on  ${process.env.DBURI}`);
        }).catch(err => console.log(`Fail to connectDB ${err}`))
}

export default connectDB