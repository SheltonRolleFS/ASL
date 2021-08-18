const express = require('express')
const app = express()
const { Quiz } = require('./src/models')
const quizzesCtrl = require('./src/controllers/quizzes')
const questionsCtrl = require('./src/controllers/questions')
const choicesCtrl = require('./src/controllers/choices')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', __dirname + '/src/views')
app.set('view engine', 'twig')

app.get('/', async (req, res) => {
    res.render('home/home')
})

app.use('/quizzes', quizzesCtrl)
app.use('/questions', questionsCtrl)
app.use('/choices', choicesCtrl)

app.listen(3000)