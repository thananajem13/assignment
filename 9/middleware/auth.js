import jwt from 'jsonwebtoken'
import { userModel } from '../DB/model/user.model.js';

export const auth = () => {
    return async (req, res, next) => {
        const { authorization } = req.headers;
        console.log({ authorization });
        if (!authorization?.startsWith(process.env.bearerToken)) {
            res.json({ message: "in-valid bearer key" })
        } else {
            const token = authorization.split(' ')[1]
            console.log(token);
            const decoded = jwt.verify(token, process.env.loginToken)
            if (!decoded?.id) {
                res.json({ message: "invalid token playload" })
            } else {
                const user = await userModel.findOne({ _id: decoded.id, isDeleted: false, ConfirmEmail: true })
                if (!user) {
                    res.json({ message: "invalid token user or unconfirm email or soft deleted account" })
                } else {
                    req.user = user
                    next()
                }
            }

        }

    }
}