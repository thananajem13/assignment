const userModel = require("../../models/user/user.model")

module.exports.addUser = async (req, res) => {
    try {
        let { name, email, password } = req.body
        console.log(validateLength(name));
        if (validateLength(name) && validateLength(email) && validateLength(password)) {
            let result = await userModel.insertMany({ name, email, password })
            if (result.length != 0) {
                res.send('addded')

            } else {

                res.send('no document is added')
            } 

        } else {
            res.send('incorrect input of name and email and password in added section')
        }

    } catch (e) {
        res.send('incorrect input of name and email and password in added section')
    }


}
module.exports.allUsers = async (req, res) => {
    let users = await userModel.find(
        {})
        if(users.length!=0){
            res.json(users)
        }
        else{
            res.json("no users found")
        }
}
module.exports.updateUsers = async (req, res) => {


    try {
        let { id, Email, Password, Name } = req.body
        if (
            validateLength(id) &&
            validateLength(Email) &&
            validateLength(Password) &&
            validateLength(Name)
        ) {
            if(checkIfIdIsObjID(id)){
                 let result = await userModel.updateOne({ _id: id }, { name: Name, password: Password, email: Email })
            if (result.modifiedCount != 0) {
                res.send("updated")
            }
            else {
                res.send("no user updated")

            }
            }
            else{
                res.send("please enter correct objectID")
            }
           
        }
        else {

            res.send("error in inputs name or password or email or id")
        }

    } catch (e) {
        res.send("error in inputs name or password or email or id")
    }

    await userModel.updateMany(
        {
            name: "thana"
        },
        {
            name: "Thana'Najem"
        })
    res.json("ok")
}
module.exports.deleteUsers = async (req, res) => {
    try {
        let { id } = req.body
        if (validateLength(id)) {
            if(checkIfIdIsObjID(id)){
                 let result = await userModel.deleteOne({ _id: id })
            if (result.deletedCount != 0) {
                res.send('deleted')
            }
            else {
                res.send('no user deleted')

            }
            }
            else{
                res.send('please enter correct objectID')
            }
           
        }
        else {
            res.send('error in id input')

        }
    } catch (e) {
        res.send('error in id input')

    }

}
module.exports.getUserByID = async (req, res) => {
    try {

        let { id } = req.body
        if (validateLength(id)) {
            if(checkIfIdIsObjID(id)){
                 let result = await userModel.findOne({ _id: id })
            if (result.length != 0) {
                res.send(result)
            }
            else {
                res.send(`no one has this ${id}  `)

            }
            }
            else{

                res.send('please enter correct objectID')
            }
           
        }
        else {
            res.send('error in id input')

        }
    } catch (e) {
        res.send('error in id input')

    }

}
module.exports.searchByName = async (req, res) => {
    try {

        let { userName } = req.body
        if (validateLength(userName)) {
            let result = await userModel.find({ name: {"$regex": userName,
            "$options": "i"} }) 
            if (result.length != 0) {
                res.send(result)
            }
            else {
                res.send('no similar data')

            }
        }
        else {
            res.send('error in name input')

        }
    } catch (e) {
        res.send('error in name input')

    }

}
let validateLength = (elem) => {
    return elem.length !== 0;
}
let checkIfIdIsObjID = (id)=>{
    var ObjectId = require('mongoose').Types.ObjectId;
return ObjectId.isValid(id); //true
}