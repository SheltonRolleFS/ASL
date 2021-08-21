const express = require('express')
const router = express.Router()
const { Choices, Questions } = require('../models')
const { isAuthenticated } = require('../middlewares/auth')
const { choiceIsValid } = require('../middlewares/forms')

router.get('/', isAuthenticated, async (req, res) => {
    const choices = await Choices.findAll({
        include: Questions
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(choices)
    }else{
        res.render('choices/index', { choices })
    }
})

router.get('/new', isAuthenticated, (req, res) => {
    res.render('choices/create')
})

router.post('/', isAuthenticated, choiceIsValid, async (req,res) => {
    if(req.errors.length > 0){
        res.render('choices/create', { errors: req.errors })
    }else{
        const choice = await Choices.create( req.body, {
            include: Questions
        })
    
        if(req.headers.accept.indexOf('/json') > -1){
            res.json(choice)
        }else{
            res.redirect('/choices/' + choice.id)
        }
    }
})

router.get('/:id', isAuthenticated, async (req, res) => {
    const choice = await Choices.findByPk( Number(req.params.id), {
        include: Questions
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json(choice)
    }else{
        res.render('choices/show', { choice })
    }
})

router.get('/:id/edit', isAuthenticated, async (req, res) => {
    const choice = await Choices.findByPk(req.params.id)
    res.render('choices/edit', { choice })
})

router.post('/:id', isAuthenticated, choiceIsValid, async (req, res) => {
    if(req.errors.length > 0){
        const choice = await Choices.findByPk( Number(req.params.id) )
        res.render('choices/edit', { errors: req.errors, choice })
    }else{
        let choice = await Choices.update( req.body, {
            where: { id: Number(req.params.id) }
        })
        choice = await Choices.findByPk( Number(req.params.id) )
    
        if(req.headers.accept.indexOf('/json') > -1){
            res.json(choice)
        }else{
            res.redirect('/choices/' + req.params.id)
        }
    }
})

router.get('/:id/delete', isAuthenticated, async (req, res) => {
    const deleted = await Choices.destroy({
        where: { id: req.params.id }
    })

    if(req.headers.accept.indexOf('/json') > -1){
        res.json({'success': true})
    }else{
        res.redirect('/choices')
    }

})

module.exports = router