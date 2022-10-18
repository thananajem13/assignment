import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { userModel } from "../../../DB/model/user.model.js"
import { myEmail } from '../../../services/email.js'
import { nanoid } from 'nanoid'
export const signup = async (req, res) => {
    try {
        const { Email, FirstName, LastName, Password } = req.body
        const user = await userModel.findOne({ Email }).select('Email')
        if (user) {
            res.json({ message: "email exist" })
        } else {
            const hashPass = await bcrypt.hash(Password, parseInt(process.env.SaltRound))
            const newUser = new userModel({ Email, LastName, FirstName, Password: hashPass })
            const savedUser = await newUser.save()

            const token = jwt.sign({ id: savedUser._id }, process.env.emailToken)

            const rfToken = jwt.sign({ id: savedUser._id }, process.env.emailToken)

            const link = `${req.protocol}://${req.headers.host}${process.env.BASEURL}/auth/confirmEmail/${token}`
            // myEmail(Email, 'ConfirmEmail', `<a href='${link}'>follow me to confirm your account</a>`)

            const linkrf = `${req.protocol}://${req.headers.host}${process.env.BASEURL}/auth/confirmEmail/${rfToken}`
            // myEmail(Email, 'ConfirmEmail', `<a href='${linkrf}'>follow me to confirm your account</a>`)

            myEmail(Email, 'confirmEmail',
                `
<a href='${link}'>Follow me to confirm your account</a>
<br>
<a href='${linkrf}'>Re-send confirmation email</a>
`)

            savedUser ? res.json({ message: "Done", token }) : res.json({ message: "fail to signup" })
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}

export const confirmEmail = async (req, res) => {
    try {
        const { token } = req.params
        if (!token) {
            res.json({ message: "in-valid token" })
        } else {
            const decoded = jwt.verify(token, process.env.emailToken)
            if (!decoded?.id) {
                res.json({ message: "in-valid token payload" })

            }
            else {
                const user = await userModel.updateOne({ _id: decoded.id, ConfirmEmail: false }, { ConfirmEmail: true })
                user.modifiedCount ? res.json({ message: "please procceed to login page" }) : res.json({ message: "already confirmed" })
            }
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}
export const signin = async (req, res) => {
    try {
        const { Email, Password } = req.body
        const user = await userModel.findOne({ Email, ConfirmEmail: true, isDeleted: false })
        console.log(user);

        if (!user) {
            res.json({ message: "In-valid or deleted or your email doesn't confirm account" })

        } else {
            const match = await bcrypt.compare(Password, user.Password)
            if (!match) {
                res.json({ message: "in-valid account password" })
            } else {

                const token = jwt.sign({ id: user._id, isLogged: true }, process.env.loginToken, { expiresIn: '30s' })
                const rftoken = jwt.sign({ id: user._id, isLogged: true }, process.env.loginToken)

                const updateOnlineAndLastSeen = await userModel.updateOne({ _id: user._id }, { isOnline: true, lastSeen: null })
                res.json({ message: "Done", token, rftoken })
            }
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}

export const sendCode = async (req, res) => {
    try {
        const { Email } = req.body
        const user = await userModel.findOne({ Email }).select('Email')
        if (!user) {
            res.json({ message: "In-valid account" })
        } else {
            const code = nanoid()
            myEmail(Email, "forget password", `<h1>Access code : ${code}</h1>`)
            const updateUser = await userModel.updateOne({ _id: user._id }, { code })
            updateUser.modifiedCount ? res.json({ message: "Done" }) : res.json({ message: "fail" })
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}
export const forgetPassword = async (req, res) => {
    try {
        const { code, newPassword, Email } = req.body
        if (code == null) {
            res.json({ message: "invalid code null not accepted" })
        } else {
            const hashPassword = await bcrypt.hash(newPassword, parseInt(process.env.SaltRound))
            const user = await userModel.updateOne({ Email, code }, { Password: hashPassword, code: null })
            user.modifiedCount ? res.json({ message: "Done" }) : res.json({ message: "in-valid code" })
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}
export const refreshEmail = async (req, res) => {
    try {
        const { token } = req.params
        const decoded = jwt.verify(token, process.env.emailToken)
        if (!decoded?.id) {
            res.json({ message: "invalid token payload" })
        } else {
            const user = await userModel.findById(decoded.id).select('email confirmEmail')
            if (!user) {
                res.json({ message: "not register account" })
            } else {
                if (user.confirmEmail) {
                    res.json({ message: "already confirmed" })
                }
                else {
                    const token = jwt.sign({ id: user._id }, process.env.emailToken, { expiresIn: 60 * 60 })
                    const link = `${req.protocol}://${req.headers.host}${process.env.BASEURL}/auth/confirmEmail/${token}`
                    myEmail(user.email, 'confirmationEmail',
                        `<a href='${link}'>Follow me to confirm your account</a>`)
                    res.json({ message: "Done" })

                }
            }
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}