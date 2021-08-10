const express = require('express')
const app = express()
const quizzesCtrl = require('./src/controllers/quizzes')

app.get('/', (req, res) => {
    res.send('Home Page! GET...')
})

app.use('/quizzes', quizzesCtrl)

app.listen(3000)
// ------ Week 1 Code
// const pageRouter = require('./src/controllers/page')

// app.use('/', pageRouter)