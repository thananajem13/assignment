import { productModel } from "../../../DB/model/product.js"

export let addProduct = async (req, res, next) => {
    try {
        console.log(req.body);
        let product = await productModel.create(req.body)
        product ? res.json({ message: "Done", product }) : res.json({ message: "err", product })
    } catch (error) {
        res.json({ message: "catch err", error })
    }
}
export let getProduct = async (req, res, next) => {
    try {

        let products = await productModel.findAll({})
        products.length ? res.json({ message: "Done", products }) : res.json({ message: "no products exist", products })
    } catch (error) {
        res.json({ message: "error", error })
    }
}
export let updateProduct = async (req, res, next) => {
    try {
        let { id, UserId } = req.params
        let updatedProduct = await productModel.update(req.body, {
            where: {
                id, UserId
            }
        })
        updatedProduct[0] ? res.json({ message: "Done", product: updatedProduct }) : res.json({ message: "in-valid product id", product: updatedProduct })
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}
export let deleteProduct = async (req, res, next) => {
    try {
        let {id,UserId} = req.params
        let deletedProduct = await productModel.destroy({ where: { id,UserId } })
        deletedProduct ? res.json({ message: "Done", deletedProduct }) : res.json({ message: "invalid product id" ,deletedProduct})
    } catch (error) {
        res.json({ message: "catch error", error })
    }

}