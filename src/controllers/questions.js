const express = require('express')
const router = express.Router()
const { Questions, Quiz } = require('../models')
const { isAuthenticated } = require('../middlewares/auth')

router.get('/', isAuthenticated, async (req, res) => {
    const questions = await Questions.findAll()

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(questions)
    }else{
        res.render('questions/index', { questions })
    }
})

router.get('/new', isAuthenticated, (req, res) => {
    res.render('questions/create')
})

router.post('/', isAuthenticated, async (req, res) => {
    const question = await Questions.create( req.body )

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(question)
    }else{
        res.redirect('/questions/' + question.id)
    }
})

router.get('/:id', isAuthenticated, async (req, res) => {
    const question = await Questions.findByPk( Number(req.params.id), {
        include: Quiz
    } )

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(question)
    }else{
        res.render('questions/show', { question })
    }
})

router.get('/:id/edit', isAuthenticated, async (req, res) => {
    const question = await Questions.findByPk(req.params.id)
    res.render('questions/edit', { question })
})

router.post('/:id', isAuthenticated, async (req, res) => {
    let question = await Questions.update( req.body, {
        where: { id: Number(req.params.id) }
    })
    question = await Questions.findByPk( Number(req.params.id) )

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(question)
    }else{
        res.redirect('/questions/' + req.params.id)
    }
})

router.get('/:id/delete', isAuthenticated, async (req, res) => {
    const { id } = req.params
    const deleted = await Questions.destroy({
        where: { id }
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json({ 'success': true })
    }else{
        res.redirect('/questions')
    }
    
})

module.exports = router