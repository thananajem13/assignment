import { messageModel } from "../../../DB/model/message.model.js"
import { userModel } from "../../../DB/model/user.model.js"
import bcrypt from 'bcryptjs'
import moment from 'moment'
export const signout = async (req, res) => {
  try {
    const { _id } = req.user

    const updateLogout = await userModel.updateOne({ _id, }, { lastSeen: moment().format('MMMM Do YYYY, h:mm:ss a'), isOnline: false })
    updateLogout.modifiedCount ? res.json({ message: "Done you logout" }) : res.json({ message: "invalid account" })

  } catch (error) {
    res.json({ message: "catch error" })
  }


}
export const updateProfile = async (req, res) => {
  try {
    const { _id } = req.user
    const { FirstName, LastName, Email, Password, phone, Age } = req.body
    const updateProfile = await userModel.findOneAndUpdate({ _id }, { FirstName, LastName, Email, Password, phone, Age })

    updateProfile ? res.json({ message: "Done" }) : res.json({ message: "invalid id" })
  } catch (error) {
    res.json({ message: "catch error", error })
  }

}
export const deleteProfile = async (req, res) => {
  try {
    const { _id } = req.user
    const deletedUser = await userModel.deleteOne({ _id })
    deletedUser.deletedCount ?
      res.json({ message: "Done" }) : res.json({ message: "invalid id" })
  } catch (error) {
    res.json({ message: "catch error", error })
  }


}
export const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({ isDeleted: false, ConfirmEmail: true, _id: { $ne: req.user._id } })
    users.length ?
      res.json({ message: "Done", users }) :
      res.json({ message: "no users exist", users })
  } catch (error) {
    res.json({ message: "catch error", error })
  }

}

export const profile = async (req, res) => {

  try {
    const user = await userModel.findOne({ _id: req.user._id, ConfirmEmail: true, isDeleted: false })
    user ? res.json({ message: "done", user }) : res.json({ message: "invalid id or unconfirm email or deleted account", user })

  } catch (error) {
    res.json({ message: "catch error" })
  }

}
export const softDelete = async (req, res) => {
  try {
    const { _id } = req.user._id
    const softDelete = await userModel.updateOne({ _id }, { isDeleted: true })
    softDelete.modifiedCount ? res.json({ message: "Done" }) : res.json({ message: "un done soft delete, try again" })
  } catch (error) {
    res.json({ message: "catch error", error })
  }

}
export const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await userModel.findById(req.user._id)
    const match = await bcrypt.compare(oldPassword, user.Password)
    if (!match) {
      res.json({ message: "invalid old password" })

    } else {
      const newHash = await bcrypt.hash(newPassword, parseInt(process.env.saltRound))
      const updateUser = await userModel.updateOne({ _id: user._id }, { Password: newHash }
      )
      updateUser.modifiedCount ? res.json({ message: 'Done' }) : res.json({ message: "fail in update password" })
    }
  } catch (error) {
    res.json({ message: "catch error", error })
  }
}
export const lastSeenLoggedOutUser = async (req, res) => {
  try {
    const lastSeen = await userModel.findOne({ _id: req.user._id, isOnline: false, lastSeen: { $ne: null } }).select('lastSeen')
    console.log(lastSeen);

    lastSeen ? res.json({ message: "Done", lastSeen }) : res.json({ message: "Your are online so no last seen exist", lastSeen })

  } catch (error) {
    res.json({ message: "catch error", error })
  }

}
export const getShareProfile = async (req, res) => {
  try {
    const { id } = req.params
    const user = await userModel.findById(id).select("FirstName LastName Email")
    user ? res.json({ message: "Done", user }) : res.json({ message: "invalid account", user })
  } catch (error) {
    res.json({ message: "catch error", error })
  }

}






