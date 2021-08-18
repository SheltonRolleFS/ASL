const express = require('express')
const router = express.Router()
const { Choices, Questions } = require('../models')

router.get('/', async (req, res) => {
    const choices = await Choices.findAll({
        include: Questions
    })
    res.render('choices/index', { choices })
})

router.get('/new', (req, res) => {
    res.render('choices/create')
})

router.post('/', async (req,res) => {
    const choice = await Choices.create( req.body, {
        include: Questions
    })
    res.redirect('/choices/' + choice.id)
})

router.get('/:id', async (req, res) => {
    const choice = await Choices.findByPk( Number(req.params.id), {
        include: Questions
    })
    res.render('choices/show', { choice })
})

router.get('/:id/edit', async (req, res) => {
    const choice = await Choices.findByPk(req.params.id)
    res.render('choices/edit', { choice })
})

router.post('/:id', async (req, res) => {
    let choice = await Choices.update( req.body, {
        where: { id: Number(req.params.id) }
    })
    choice = await Choices.findByPk( Number(req.params.id) )
    res.redirect('/choices/' + req.params.id)
})

router.get('/:id/delete', async (req, res) => {
    const deleted = await Choices.destroy({
        where: { id: req.params.id }
    })

    res.redirect('/choices')
})

module.exports = router