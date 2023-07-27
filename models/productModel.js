const products = require('../data/products.json');

const findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}


const findById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

const create = (product) => {
    return new Promise((resolve, reject) => {

    })
}

module.exports = {
    findAll,
    findById
}

console.log(products)