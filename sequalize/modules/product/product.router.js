import { Router } from "express";
import { addProduct, deleteProduct, getProduct, updateProduct } from "./controller/product.js";

let productRouter = Router()
productRouter.post('/',addProduct)
productRouter.get('/',getProduct)
productRouter.put('/id/:id/userId/:UserId',updateProduct)
productRouter.delete('/id/:id/UserId/:UserId',deleteProduct)
export default productRouter