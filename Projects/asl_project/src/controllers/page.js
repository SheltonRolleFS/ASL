const express = require('express')
const pageRouter = express.Router()

// pageRouter.use('/', (req, res) => {
//     res.send('Hello World from Page Router!')
// })

// pageRouter.get('/', (req, res) => {
//     res.send('Home Page! GET...')
// })

// pageRouter.post('/', (req, res) => {
//     res.send('Home Page! POST...')
// })

// pageRouter.get('/products/:productName', (req, res) => {
//     res.send('Product Page! Product Name: ' + req.params.productName)
// })

pageRouter.get('/products', (req, res) => {
    res.send('All Products...')
})

pageRouter.post('/products', (req, res) => {
    res.send('Created a New Product...')
})

pageRouter.post('/products/:urlID', (req, res) => {
    res.send('Updated a product with an id of ' + req.params.urlID)
})

module.exports = pageRouter