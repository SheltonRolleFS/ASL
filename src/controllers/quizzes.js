const express = require('express')
const router = express.Router()
const { Quiz } = require('../models')

router.get('/', async (req, res) => {
    const quizzes = await Quiz.findAll()
    res.json(quizzes)
})
router.post('/', async (req, res) => {
    const quiz = await Quiz.create(req.body)
    res.send(quiz)
})
router.get('/:id', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.json(quiz)
})
router.post('/:id', async (req, res) => {
    const { id } = req.params
    const quiz = await Quiz.update( req.body, {
        where: { id }
    })
    res.json(quiz)
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deleted = await Quiz.destroy({
        where: { id }
    })
    
    res.json(deleted)
})

module.exports = router