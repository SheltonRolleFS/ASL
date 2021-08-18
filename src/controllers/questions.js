const express = require('express')
const router = express.Router()
const { Questions, Quiz } = require('../models')

router.get('/', async (req, res) => {
    const questions = await Questions.findAll()

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(questions)
    }else{
        res.render('questions/index', { questions })
    }
})

router.get('/new', (req, res) => {
    res.render('questions/create')
})

router.post('/', async (req, res) => {
    const question = await Questions.create( req.body )

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(question)
    }else{
        res.redirect('/questions/' + question.id)
    }
})

router.get('/:id', async (req, res) => {
    const question = await Questions.findByPk( Number(req.params.id), {
        include: Quiz
    } )

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(question)
    }else{
        res.render('questions/show', { question })
    }
})

router.get('/:id/edit', async (req, res) => {
    const question = await Questions.findByPk(req.params.id)
    res.render('questions/edit', { question })
})

router.post('/:id', async (req, res) => {
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

router.get('/:id/delete', async (req, res) => {
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