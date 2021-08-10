const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
let choices = require('../models/choices')

router.get('/', (req, res) => {
    res.json(choices)
})

router.post('/', (req, res) => {
    res.send('Choices#New')
})

router.get('/:id', (req, res) => {
    res.send('Choices#GetSpecific')
})

router.post('/:id', (req, res) => {
    res.send('Choices#Update')
})

router.delete('/:id', (req, res) => {
    res.send('Choices#Delete')
})

module.exports = router