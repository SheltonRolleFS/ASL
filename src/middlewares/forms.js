const { Quiz } = require('../models')

const quizIsValid = (req, res, next) => {
    const { name, weight } = req.body
    req.errors = []
    if(name.length <= 0) { req.errors.push('Invalid Quiz Name - cannot be empty') }
    if(weight.length <= 0) { req.errors.push('Invalid Weight - cannot be empty') }
    if(weight < 0) { req.errors.push('Invalid Weight - cannot be less than 0') }
    next()
}

const questionIsValid = async (req, res, next) => {
    const { question, QuizId } = req.body
    req.errors = []
    if(question.length <= 0) { req.errors.push('Invalid Question - cannot be empty') }
    if(QuizId.length <= 0) { req.errors.push('Invalid QuizId - cannot be empty') }
    if(QuizId < 0) { req.errors.push('Invalid QuizId - cannot be less than zero (0)') }
    next()
}

const choiceIsValid = (req, res, next) => {
    const { choice, QuestionId } = req.body
    req.errors = []
    if(choice.length <= 0) { req.errors.push('Invalid Choice - cannot be empty') }
    if(QuestionId.length <= 0) { req.errors.push('Invalid QuestionId - cannot be empty') }
    if(QuestionId < 0) { req.errors.push('Invalid QuestionId - cannot be less than zero (0)') }
    next()
}

module.exports = { quizIsValid, questionIsValid, choiceIsValid }