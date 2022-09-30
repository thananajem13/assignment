import express from 'express'
import { conn } from './DB/connection.js'
import userRouter from './modules/user/user.router.js'
const app = express()
const port = 7000
const baseUrl = '/api/v1'
app.use(express.json())
conn()
app.use(`${baseUrl}/user`,userRouter)

app.use("*",(req,res)=>{res.json("in-valid router")})
app.listen(port,()=>{console.log(`server is running at port: ${port}`);
})