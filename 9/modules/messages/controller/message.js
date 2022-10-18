import { messageModel } from "../../../DB/model/message.model.js"
import { userModel } from "../../../DB/model/user.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { reciverId } = req.params
        const { message } = req.body
        const user = await userModel.findById(reciverId).select("FirstName")
        if (!user) {
            res.json({ message: "invalid reciver" })
        } else {
            const newMessage = new messageModel({ text: message, reciverId, isDeleted: false })
            const savedMsg = await newMessage.save()
            savedMsg ? res.json({ message: "Done", savedMsg }) : res.json({ mesage: "fail to save message", savedMsg })
        }
    } catch (error) {
        res.json({ message: "catch error" })
    }

}
export const softDeleteMsg = async (req, res) => {
    try {
        const reciverId = req.user._id
        const { id } = req.params
        const softDelMsg = await messageModel.findOneAndUpdate({ reciverId, _id: id, isDeleted: false }, { isDeleted: true })
        console.log(softDelMsg);

        softDelMsg ? res.json({ message: "message deleted" }) : res.json({ message: "invalid id" })
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}

export const userMessage = async (req, res) => {
    try {
        const message = await messageModel.find({ reciverId: req.user._id, isDeleted: false }).populate([{
            path: 'reciverId',
            select: 'Email FirstName LastName'
        }])
        message ? res.json({ message: "done", message }) : res.json({ message: "invalid id", message })
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}





