const http = require('http');
const products = require('./data/products.json');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controller/productController')

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    } else if (req.url.match(/\/api\/products\/([a-z0-9]+)/) && req.method === "GET") {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    } else if (req.url === '/api/products' && req.method === "POST") {
        createProduct(req, res)
    } else if (req.url.match(/\/api\/products\/([a-z0-9]+)/) && req.method === "PUT") {
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    } else if (req.url.match(/\/api\/products\/([a-z0-9]+)/) && req.method === "DELETE") {
        const id = req.url.split('/')[3]
        deleteProduct(req, res, id)
    } else {
        res.writeHead(404, 'Content-Type', 'application/json')
        res.end(JSON.stringify({ mesage: "route not found" }))
    }

}).listen(PORT, () => console.log(`Server running on Port ${PORT}`))