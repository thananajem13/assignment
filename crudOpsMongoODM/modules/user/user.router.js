import {Router} from 'express'
import { deleteManyUsers, deleteUser, firstNameEndsWithAAndAgeGTE20, firstNameStartsWithAAndAgeLT30, getUserById, getUsers, getUserWhichFirstNameContainAmi,   getUserWhichFirstNameOrLastNameContainA, signin, signup, updateManyUsers, updateUserByID } from './controller/user.js'
const router = Router()

router.get('/id/:id',getUserById)
router.get('/',getUsers)
router.get('/fnameOrLnameContainA',getUserWhichFirstNameOrLastNameContainA)
router.get('/firstNameContainAmi',getUserWhichFirstNameContainAmi)
router.get('/firstNameEndsWithAAndAgeGTE20',firstNameEndsWithAAndAgeGTE20)
router.get('/firstNameStartsWithAAndAgeLT30',firstNameStartsWithAAndAgeLT30)
router.post('/signup',signup)
router.post('/signin',signin)
router.put('/id/:id',updateUserByID)
router.put('/',updateManyUsers)
router.delete('/id/:id',deleteUser)
router.delete('/',deleteManyUsers)
export default router