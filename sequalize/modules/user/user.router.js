import {Router} from 'express'
import { allusersWithAllProduct, deleteUser, getUserByFirstName, getUserByID, getUserOf_FN_Or_LN_StartWithA, getUsersContainsA_InFirstOrLastName, getUsersFisrNameStartWith_A_GreaterThanOrEquals20, getUsersGreaterThan20, signin, signup, updateUser } from './controller/user.js'
let userRouter = Router()
userRouter.post('/signup',signup)
userRouter.post('/signin',signin)
userRouter.put('/',updateUser)
userRouter.delete('/',deleteUser)
userRouter.get("/id/:id",getUserByID)
userRouter.get("/fnameStartWithA",getUserByFirstName) 
userRouter.get("/fnameOrLnameStartWithA",getUserOf_FN_Or_LN_StartWithA) 
userRouter.get("/getUsersContainsA_InFirstOrLastName",getUsersContainsA_InFirstOrLastName) 
userRouter.get("/getUsersGreaterThan20",getUsersGreaterThan20) 
userRouter.get("/getUsersFisrNameStartWith_A_GreaterThanOrEquals20",getUsersFisrNameStartWith_A_GreaterThanOrEquals20) 
userRouter.get('/allusersWithAllProduct',allusersWithAllProduct)
export default userRouter