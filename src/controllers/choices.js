const express = require('express')
const router = express.Router()
const { Choices, Questions } = require('../models')
const questions = require('../models/questions')

router.get('/', async (req, res) => {
    const choices = await Choices.findAll({
        include: Questions
    })
    res.json(choices)
})

router.post('/', async (req,res) => {
    const choice = await Choices.create( req.body, {
        include: Questions
    })
    res.json(choice)
})

router.get('/:id', async (req, res) => {
    const choice = await Choices.findByPk( Number(req.params.id), {
        include: Questions
    })
    res.json(choice)
})

router.post('/:id', async (req, res) => {
    let choice = await Choices.update( req.body, {
        where: { id: Number(req.params.id) }
    })
    choice = await Choices.findByPk( Number(req.params.id) )
    res.json(choice)
})

router.delete('/:id', async (req, res) => {
    const deleted = await Choices.destroy({
        where: { id: req.params.id }
    })

    res.json(deleted)
})

module.exports = router