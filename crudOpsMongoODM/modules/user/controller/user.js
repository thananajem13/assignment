import { userModel } from "../../../DB/model/user.js"
import bcrypt from 'bcryptjs'

const hashPass = (pass) => {

    return bcrypt.hash(pass, 8)

}
export const signup = async (req, res) => {

    try {
        let { email, password, firstname, lastname, cpassword,age } = req.body
        if (password === cpassword) {
            let user = await userModel.findOne({ email })
            console.log(user);

            if (!user) {
                const hashPassword = await hashPass(password)
                console.log(hashPassword);

                let newUser = new userModel({ age,email, password: hashPassword, firstname, lastname })
                const savedUser = await newUser.save()
                console.log(`saved user: ${savedUser}`);

                savedUser ? res.json({ message: "Done", newUser }) : res.json({ message: "invalid data", newUser })
            }
            else {
                res.json({ message: "exist email", user })
            }
        }
        else {
            res.json({ message: "mismatch password with cpassword" })
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }


}
export const signin = async (req, res) => {
    try {
          const { password, email } = req.body
    const user = await userModel.findOne({ email })

    if (user) {
        const match = await bcrypt.compare(password, user.password)
        match ? res.json({ message: "done", user }) : res.json({ message: "invalid data", user })
    }
    else {
        res.json({ message: "invalid data", user })
    }
    } catch (error) {
        res.json({message:"catch error",error})
    }
  
}
export const updateUserByID = async (req, res) => {
    try {
         let { id } = req.params
    let { age, firstname, lastname, email, password } = req.body
    // first solution
    // const updatedUser = await userModel.findByIdAndUpdate(id, { age, firstname, lastname, email, password: await hashPass(password) }, { new: true })
    const updatedUser = await userModel.findOneAndReplace(id, { age, firstname, lastname, email, password: await hashPass(password) }, { new: true })
    updatedUser ? res.json({ message: "Done", updatedUser }) : res.json({ message: "invalid id", updatedUser })
    } catch (error) {
        res.json({message:"error",error})
    }
   
}
export const updateManyUsers = async (req, res) => {
    try {
        let { age } = req.body
    const updatedUser = await userModel.updateMany({ age: { $gt: 25 } }, { age }, { new: true })
    updatedUser.modifiedCount ? res.json({ message: "Done", updatedUser }) : res.json({ message: "invalid id", updatedUser })
    } catch (error) {
        res.json({message:"catch error",error})
    }
    
}
export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
    users ? res.json({ message: "Done", users }) : res.json({ message: "no users", users })

    } catch (error) {
        res.json({message:"catch error",error})
    }
    
}
export const deleteUser = async (req, res) => {
    try {
        let { id } = req.params
        let deletedUser = await userModel.findByIdAndDelete(id)
        deletedUser ? res.json({ message: "Done", deletedUser }) : res.json({ message: "invalid id", deletedUser })
    } catch (error) {
        res.json({ message: "catch error" })
    }

}
export const deleteManyUsers = async (req,res)=>{ 
    try {

        const deletedUser = await userModel.deleteMany(req.body||{firstname:"thana"}) 
    
    deletedUser.deletedCount?res.json({message : "Done",deletedUser}):res.json({message:"no data achieve that condition" ,deletedUser})
    } catch (error) {
        res.json({message:"catch error",error})
    }
    
}
export const getUserById= async(req,res)=>{
    try {
    const {id } = req.params
const user = await userModel.findById(id)
user?res.json({message:"Done",user}):res.json({message:"invalid id",user})
        
    } catch (error) {
        res.json({message:"catch error",error})
    }
}
export const getUserWhichFirstNameOrLastNameContainA = async(req,res)=>{
    try {
        const user = await userModel.find({$or:[{firstname:/a/},{lastname:/a/}]})
        user?res.json({message:"Done",user}):res.json({message:"no user has a at his first or last name"})
    } catch (error) {
        res.json({message:"error",error})
    }
    
    res.json({user})
}
export const getUserWhichFirstNameContainAmi = async(req,res)=>{ 
    try {
        const {str} = req.body 
    let regex = new RegExp(`${str}`, "ig"); 
    
    const user = await userModel.find({firstname:{ $regex:regex}})
    user?
    res.json({message:"done",user}):res.json({message:`no user contain ${str} at his first name`,user})
    } catch (error) {
        res.json({message:"catch error",error})
    }
    
}
export const firstNameEndsWithAAndAgeGTE20 = async(req,res)=>{ 
    try {  
        // second solution
    // let regex = new RegExp(`a$`, "ig");
    // console.log(regex);
     
    const user = await userModel.find({$and:[{firstname:/a$/},{age:{$gte:20}}]})
    user?
    res.json({message:"done",user}):res.json({message:`no user contain ${str} at his first name`,user})
    } catch (error) {
        res.json({message:"catch error",error})
    }
    
}
export const firstNameStartsWithAAndAgeLT30 = async(req,res)=>{ 
    try {   
     
    const user = await userModel.find({$and:[{firstname:/^a/},{age:{$lt:30}}]})
    user?
    res.json({message:"done",user}):res.json({message:`no user contain starts with a at his first name and age less than 30`,user})
    } catch (error) {
        res.json({message:"catch error",error})
    }
    
}
