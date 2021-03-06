const express = require('express')
const router = express.Router()
const { Quiz, Questions } = require('../models')
const { isAuthenticated } = require('../middlewares/auth')
const { quizIsValid } = require('../middlewares/forms')

router.get('/', async (req, res) => {
    const quizzes = await Quiz.findAll({
        include: Questions
    })
    if(req.headers.accept.indexOf('/json') > -1){
        res.json(quizzes)
    }else{
        res.render('quiz/index', { quizzes })
    }
})

router.get('/new', (req, res) => {
    res.render('quiz/create')
})

router.post('/', quizIsValid, async (req, res) => {
    if(req.errors.length > 0){
        res.redirect('http://localhost:3000/quizzes/new')
    }else{
        const name = req.body.name
        const weight = Number(req.body.weight)
        const quiz = await Quiz.create({
            name,
            weight: weight
        }, { include: Questions })

        if(req.headers.accept.indexOf('/json') > -1){
            res.json(quiz)
        }else{
            res.redirect('http://localhost:3000/quizzes')
        }
    }
})

router.get('/:id', async (req, res) => {
    const quiz = await Quiz.findByPk( Number(req.params.id), {
        include: Questions
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(quiz)
    }else{
        res.render('quiz/show', { quiz })
    }
})

router.get('/:id/edit', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/edit', { quiz })
})

router.post('/:id', quizIsValid, async (req, res) => {
    if(req.errors.length > 0){
        const quiz = await Quiz.findByPk( Number(req.params.id) )
        res.redirect(`http://localhost:3000/quizzes/${req.params.id}/edit`)
    }else{
        const { id } = req.params
        const quiz = await Quiz.update( req.body, {
            where: { id }
        })
    
        if(req.headers.accept.indexOf('/json') > -1){
            res.json(quiz)
        }else{
            res.redirect(`http://localhost:3000/quizzes/${id}/show`)
        }
    }
})

router.get('/:id/delete', async (req, res) => {
    const { id } = req.params
    const deleted = await Quiz.destroy({
        where: { id }
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json({'success': true})
    }else{
        res.redirect('http://localhost:3000/quizzes')
    }
    
})

module.exports = router