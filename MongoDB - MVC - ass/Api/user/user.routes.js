const { addUser, allUsers, updateUsers, deleteUsers, getUserByID, searchByName } = require('../../services/user/user.services')

let router = require('express').Router() 
router.post('/addUser',addUser)
router.get('/getUsers',allUsers)

router.put('/updateUser',updateUsers)

router.delete('/deleteUser',deleteUsers)
router.get("/getUserByID",getUserByID)
router.get("/searchByName",searchByName) 
module.exports = router