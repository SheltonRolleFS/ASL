const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
let questions = require('../models/questions')

router.get('/', (req, res) => {
    res.json(questions)
})

router.post('/', (req, res) => {
    const { quizID, id, question } = req.body
    for(let i = 0; i < questions.length; i++){
        if(questions[i].quizId == quizID){
            questions[i].questions.push({
                id: Number(id),
                question
            })
        }
    }
    res.json(questions)
})

router.get('/:quizID', (req, res) => {
    const quizID = req.params.quizID
    const quizQuestions = questions.find(q => q.quizId == quizID)
    res.json(quizQuestions)
})

router.post('/:quizID', (req, res) => {
    const id = Number(req.body.id)
    const quizID = req.params.quizID

    questions.map((q) => {
        if(quizID == q.quizId){
            q.questions.map((c) => {
                if(id == c.id){
                    c.question = req.body.question
                    return c
                }
            })
        }
    })
    res.json(questions)
})

router.delete('/:quizID/:id', (req, res) => {
    const quiz = req.params.quizID
    const id = req.params.id
    
    questions.map((q) => {
        if(q.quizId == quiz){
            q.questions.map((c) => {
                if(c.id == id){
                    const index = q.questions.indexOf(c)
                    q.questions.splice(index, 1)
                }
            })
        }
    })

    res.json(questions)
})

module.exports = router