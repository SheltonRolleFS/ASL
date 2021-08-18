const express = require('express')
const router = express.Router()
const { Quiz } = require('../models')

router.get('/', async (req, res) => {
    const quizzes = await Quiz.findAll()
    res.render('quiz/index', { quizzes })
})

router.get('/new', (req, res) => {
    res.render('quiz/create')
})

router.post('/', async (req, res) => {
    const name = req.body.name
    const weight = Number(req.body.weight)
    const quiz = await Quiz.create({
        name,
        weight: weight
    })
    res.redirect('/quizzes/' + quiz.id)
})

router.get('/:id', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/show', { quiz })
})

router.get('/:id/edit', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/edit', { quiz })
})

router.post('/:id', async (req, res) => {
    const { id } = req.params
    const quiz = await Quiz.update( req.body, {
        where: { id }
    })
    res.redirect('/quizzes/' + id)
})

router.get('/:id/delete', async (req, res) => {
    const { id } = req.params
    const deleted = await Quiz.destroy({
        where: { id }
    })
    
    res.redirect('/quizzes')
})

module.exports = router