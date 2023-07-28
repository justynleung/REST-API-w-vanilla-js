const Product = require('../models/productModel');
const { getPostData } = require('../utils')
// get all products 
// GET /api/products
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()

        res.writeHead(200, 'Content-Type', 'application/json')
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

const getProduct = async (req, res, id) => {
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, 'Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'product not found' }))
        } else {
            res.writeHead(200, 'Content-Type', 'application/json')
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async (req, res) => {
    try {
        const body = await getPostData(req)

        const { name, description, price } = JSON.parse(body)

        const product = {
            name,
            description,
            price
        }
        const newProduct = await Product.create(product)

        res.writeHead(201, 'Content-Type', 'application/json')
        return res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}