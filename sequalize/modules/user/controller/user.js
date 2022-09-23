import { Op } from "sequelize";
import { productModel } from "../../../DB/model/product.js";
import { userModel } from "../../../DB/model/user.js";

export let signup = async (req, res, next) => {
    try {
        let { firstName, lastName, eMail, password, phone, age } = req.body
        let newUser = await userModel.create({ firstName, lastName, eMail, password, phone, age })
        newUser ? res.json({ message: "Done", user: newUser }) : res.json({ message: "error", user: newUser })

    } catch (error) {
        (error?.original?.errno == 1062) ? res.json({ message: "email exist", error }) : res.json(`error: ${error}`)

    }

}
export let signin = async (req, res, next) => {
    try {
        let { eMail, password } = req.body
        let loginUser = await userModel.findOne(
            {
                where: {

                    [Op.and]:
                        [{ eMail },
                        { password }]
                }
            })
        loginUser ? res.json({ message: "Done", user: loginUser }) : res.json({ message: "invalid email or password", user: loginUser })
    } catch (error) {
        res.json({ message: "error", error })
    }

}
export let updateUser = async (req, res, next) => {
    try {
        let { id, firstName, lastName, eMail, password, phone, age } = req.body
        let updatedUser = await userModel.update({ firstName, lastName, eMail, password, phone, age }, { where: { id } })
        updatedUser[0] ? res.json({ message: "Done", updatedUser }) : res.json({ message: "in-valid id", user: updatedUser })
    } catch (error) {
        res.json({ message: "error", error })
    }

}
export let deleteUser = async (req, res, next) => {
    try {
        let { id } = req.body
        let deletedUser = await userModel.destroy({ where: { id } })
        deletedUser ? res.json({ message: "Done", user: deletedUser }) : res.json({ message: "in-valid id", user: deletedUser })
    } catch (error) {
        res.json({ message: "catch error", error })
    }


}
export let getUserByID = async (req, res, next) => {
    try {
        let { id } = req.params
        let user = await userModel.findOne({ where: { id } })
        user ? res.json({ message: "Done", user }) : res.json({ message: "in-valid id", user })
    } catch (error) {
        res.json("catch error", error)
    }

}
export let getUserByFirstName = async (req, res, next) => {
    try {
        let user = await userModel.findAll({
            where: {
                firstName: {
                    [Op.startsWith]: 'a'
                }
            }
        })
        user.length > 0 ? res.json({ message: "Done", user }) : res.json({ message: "no user start with a" })
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}
export let getUserOf_FN_Or_LN_StartWithA = async (req, res, next) => {
    try {
        let user = await userModel.findAll({
            where: {
                [Op.or]: [
                    { firstName: { [Op.startsWith]: 'a' } },//without writing a in capital or small case it will be converted internally so no need to convert it by myself
                    { lastName: { [Op.startsWith]: 'a' } }
                ]


            }
        })
        user.length > 0 ? res.json({ message: "Done", user }) : res.json({ message: "no fisrt name or last name of users start with a", user })
    } catch (error) {
        res.json({ message: "error", error })
    }

}
export let getUsersContainsA_InFirstOrLastName = async (req, res, next) => {
    try {
        let user = await userModel.findAll({
            where: {
                [Op.or]: [
                    { firstName: { [Op.substring]: "a" } },
                    { lastName: { [Op.substring]: "a" } },

                ]
            }
        })
        user.length ? res.json({ message: "Done", user }) : res.json({ message: "no users start their first name or last name contains a" })
    } catch (error) {
        res.json({ message: "error", error })
    }

}
export let getUsersGreaterThan20 = async (req, res, next) => {
    try {
        let user = await userModel.findAll({
            where: {
                age: {
                    [Op.gt]: 20
                }
            }
        })
        user.length ? res.json({ message: "Done", user }) : res.json({ message: "no users have age greater tha n 20" })
    } catch (error) {
        res.json({ message: "error", error })
    }

}
export let getUsersFisrNameStartWith_A_GreaterThanOrEquals20 = async (req, res, next) => {
    try {
        let user = await userModel.findAll({
            where: {
                [Op.and]: [
                    {
                        age: {
                            [Op.gte]: 20
                        }
                    },
                    { firstName: { [Op.startsWith]: 'a' } }


                ]

            }
        })
        user.length ? res.json({ message: "Done", user }) : res.json({ message: "no users have firstname start with a and age greater or equals to 20" })
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}
export let allusersWithAllProduct = async (req, res, next) => {
    try {
        let usersWithTheirProducts = await userModel.findAll({
            include: {
                model: productModel
            }
        })
        usersWithTheirProducts.length ? res.json({ message: "Done", usersWithTheirProducts }) : res.json({ message: "no data" })
    } catch (error) {
        res.json({ message: "catch error", error })
    }


}