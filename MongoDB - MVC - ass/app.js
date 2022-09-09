const express = require('express')
const app = express()
const port = 5000

const { dbconn } = require('./dbConn')
app.use(express.json())
app.use('/users',require('./Api/user/user.routes'))
 
dbconn()


 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))