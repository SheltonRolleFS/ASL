const express = require('express')
const app = express()
const pageRouter = require('./src/controllers/page')

app.use('/', pageRouter)

app.listen(3000)