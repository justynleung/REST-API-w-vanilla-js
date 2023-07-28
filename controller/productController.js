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
// get all products 
// GET /api/products/:id
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
// Create a product
// POST /api/products
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
        res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
    }
}
// Update a product
// PUT request to /api/products/:id
const updateProduct = async (req, res, id) => {
    try {
        const product = await Product.findById(id)

        if (!product) {
            res.writeHead(404, 'Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'product not found' }))
        } else {
            const body = await getPostData(req)

            const { name, description, price } = JSON.parse(body)

            const productData = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price
            }
            const updatedProduct = await Product.update(id, productData)

            res.writeHead(200, 'Content-Type', 'application/json')
            res.end(JSON.stringify(updatedProduct))
        }
    } catch (error) {
        console.log(error)
    }
}
// Update a product
// DELETE request to /api/products/:id
const deleteProduct = async (req, res, id) => {
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, 'Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'product not found' }))
        } else {
            await Product.remove(id)
            res.writeHead(404, 'Content-Type', 'application/json')
            res.end(JSON.stringify({ message: `product removed, reference id: ${id}` }))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}