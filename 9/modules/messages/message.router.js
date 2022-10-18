import { Router } from "express";
import * as Rc from './controller/message.js'
import { auth } from '../../middleware/auth.js'
const router = Router()

router.post("/:reciverId", Rc.sendMessage)
router.patch("/:id", auth(), Rc.softDeleteMsg)
router.get("/message", auth(), Rc.userMessage)



export default router