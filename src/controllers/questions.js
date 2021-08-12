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

router.get('/:quizID/:id', (req, res) => {
    const { quizID, id } = req.params
    questions.map((q) => {
        if(q.quizId == quizID){
            q.questions.map((question) => {
                if(question.id == id){
                    res.json(question)
                }
            })
        }
    })
})

router.post('/:quizID/:id', (req, res) => {
    const { quizID, id } = req.params

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