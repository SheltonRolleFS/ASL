const express = require('express')
const app = express()
const quizzesCtrl = require('./src/controllers/quizzes')
const questionsCtrl = require('./src/controllers/questions')
const choicesCtrl = require('./src/controllers/choices')

app.get('/', (req, res) => {
    res.send('Home Page! GET...')
})

app.use('/quizzes', quizzesCtrl)
app.use('/questions', questionsCtrl)
app.use('/choices', choicesCtrl)

app.listen(3000)
// ------ Week 1 Code
// const pageRouter = require('./src/controllers/page')

// app.use('/', pageRouter)