import { Router } from "express";
import * as rgister from './controller/register.js'
const router = Router()

router.post("/signup", rgister.signup)
router.get('/confirmEmail/:token', rgister.confirmEmail)
router.post('/signin', rgister.signin)

router.patch('/sendCode', rgister.sendCode)
router.patch("/forgetPassword", rgister.forgetPassword)
router.get('/refToken/:token', rgister.refreshEmail)
export default router