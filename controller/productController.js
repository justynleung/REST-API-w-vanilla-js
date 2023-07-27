const Product = require('../models/productModel');
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

const creatProduct = async (req, res, id) => {
    try {
        const product = {
            title: 'test',
            description: 'this is testing',
            price: 100
        }

        const newProduct = creat(product)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct
}