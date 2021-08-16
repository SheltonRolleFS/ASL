const express = require('express')
const router = express.Router()
const { Questions, Quiz } = require('../models')

router.get('/', async (req, res) => {
    const questions = await Questions.findAll({ 
        include: Quiz
     })
    res.json(questions)
})
router.post('/', async (req, res) => {
    const question = await Questions.create( req.body )
    let quiz = await Quiz.findAll()
    res.json(question)
})
router.get('/:id', async (req, res) => {
    const question = await Questions.findByPk( Number(req.params.id), {
        include: Quiz
    } )
    res.json(question)
})
router.post('/:id', async (req, res) => {
    let question = await Questions.update( req.body, {
        where: { id: Number(req.params.id) }
    })
    question = await Questions.findByPk( Number(req.params.id) )
    res.json(question)
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deleted = await Questions.destroy({
        where: { id }
    })
    
    res.json(deleted)
})

module.exports = router