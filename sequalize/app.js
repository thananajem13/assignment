import express from 'express'
import { dbConn } from './DB/connection.js'
import { productModel } from './DB/model/product.js'
import { userModel } from './DB/model/user.js'
import productRouter from './modules/product/product.router.js'
import userRouter from './modules/user/user.router.js'
let app = express()
let port = 5000
let baseURL = '/api/v1'
app.use(express.json())
dbConn()
userModel.hasMany(productModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
productModel.belongsTo(userModel)
app.use(`${baseURL}/user`,userRouter)
app.use(`${baseURL}/product`,productRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))