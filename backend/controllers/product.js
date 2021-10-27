import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('product Not found')
    }

})

const createProduct = asyncHandler(async (req, res) => {
    const {productID,description,CD,RD,SD,VAT} = req.body
    const product = new Product({
        productID,
        description,
        CD,
        RD,
        SD,
        VAT
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

const updateProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        product.CD = req.body.CD || product.CD
        product.RD = req.body.RD || product.RD
        product.SD = req.body.SD || product.SD
        product.VAT = req.body.VAT || product.VAT
    }
    const updatedUser = await user.save()
    res.json(product)
})