import { Router } from "express";

import { auth } from "../../middleware/auth.js";
import { deleteProfile, getAllUser, getShareProfile, lastSeenLoggedOutUser, profile, signout, softDelete, updatePassword, updateProfile } from "./controller/user.js";
const router = Router()

router.get('/signout', auth(), signout)
router.get('/users', auth(), getAllUser)
router.patch('/updateProfile', auth(), updateProfile)
router.delete('/deleteProfile', auth(), deleteProfile)
router.get("/profile", auth(), profile)
router.patch('/softDelete', auth(), softDelete)
router.patch('/password', auth(), updatePassword)
router.get('/lastSeenLoggedOutUser', auth(), lastSeenLoggedOutUser)
router.get("/profile/share/:id", getShareProfile)




export default router