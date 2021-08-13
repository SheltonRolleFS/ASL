const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
// let choices = require('../models/choices')

router.get('/', (req, res) => {
    res.json(choices)
})

router.post('/', (req, res) => {
    const { quizID, questionID, id, choice } = req.body
    choices.map((q) => {
        if(quizID == q.quizId){
            q.questions.map((question) => {
                if(questionID == question.id){
                    question.choices.push({
                        id: Number(id),
                        choice
                    })
                }
            })
        }
    })
    res.json(choices)
})

router.get('/:quizID/:questionID/:id', (req, res) => {
    const { quizID, questionID, id } = req.params
    choices.map((q) => {
        if(quizID == q.quizId){
            q.questions.map((question) => {
                if(questionID == question.id){
                    question.choices.map((c) => {
                        if(c.id == id){
                            res.json(c)
                        }
                    })
                }
            })
        }
    })
})

router.post('/:quizID/:questionID/:id', (req, res) => {
    const newChoice = req.body.choice
    const { quizID, questionID, id } = req.params

    choices.map((q) => {
        if(q.quizId == quizID){
            q.questions.map((quesiton) => {
                if(quesiton.id == questionID){
                    quesiton.choices.map((c) => {
                        if(c.id == id){
                            c.answer = newChoice
                        }
                    })
                }
            })
        }
    })

    res.json(choices)
})

router.delete('/:quizID/:questionID/:id', (req, res) => {
    const { quizID, questionID, id } = req.params

    choices.map((q) => {
        if(q.quizId == quizID){
            q.questions.map((question) => {
                if(question.id == questionID){
                    question.choices.map((c) => {
                        if(c.id == id){
                            const index = question.choices.indexOf(c)
                            question.choices.splice(index, 1)
                        }
                    })
                }
            })
        }
    })

    res.json(choices)
})

module.exports = router