const express = require('express')
const router = express.Router()
const { Quiz, Questions } = require('../models')
const { isAuthenticated } = require('../middlewares/auth')
const { quizIsValid } = require('../middlewares/forms')

router.get('/', isAuthenticated, async (req, res) => {
    const quizzes = await Quiz.findAll({
        include: Questions
    })
    if(req.headers.accept.indexOf('/json') > -1){
        res.json(quizzes)
    }else{
        res.render('quiz/index', { quizzes })
    }
})

router.get('/new', isAuthenticated, (req, res) => {
    res.render('quiz/create')
})

router.post('/', isAuthenticated, quizIsValid, async (req, res) => {
    if(req.errors.length > 0){
        res.render('quiz/create', { errors: req.errors })
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
            res.redirect('/quizzes/' + quiz.id)
        }
    }
})

router.get('/:id', isAuthenticated, async (req, res) => {
    const quiz = await Quiz.findByPk( Number(req.params.id), {
        include: Questions
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(quiz)
    }else{
        res.render('quiz/show', { quiz })
    }
})

router.get('/:id/edit', isAuthenticated, async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.render('quiz/edit', { quiz })
})

router.post('/:id', isAuthenticated, quizIsValid, async (req, res) => {
    if(req.errors.length > 0){
        const quiz = await Quiz.findByPk( Number(req.params.id) )
        res.render('quiz/edit', { errors: req.errors, quiz })
    }else{
        const { id } = req.params
        const quiz = await Quiz.update( req.body, {
            where: { id }
        })
    
        if(req.headers.accept.indexOf('/json') > -1){
            res.json(quiz)
        }else{
            res.redirect('/quizzes/' + id)
        }
    }
})

router.get('/:id/delete', isAuthenticated, async (req, res) => {
    const { id } = req.params
    const deleted = await Quiz.destroy({
        where: { id }
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json({'success': true})
    }else{
        res.redirect('/quizzes')
    }
    
})

module.exports = router