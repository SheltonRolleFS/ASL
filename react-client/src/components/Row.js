import React from 'react'

const Row = ({ quiz, question, choice }) => {
    if(quiz.name !== ''){
        return (
            <div className="quiz-row">
                <p>{quiz.name}</p>
                <p>{quiz.weight}</p>
                <p>{quiz.id}</p>
                <p>{quiz.Questions.length}</p>
                <p>{quiz.createdAt}</p>
            </div>
        )
    }else if(question.question !== ''){
        return (
            <div className="question-row">
                <h1>{question.name}</h1>
            </div>
        )
    }else{
        return (
            <div className="choice-row">
                <h1>{choice.choice}</h1>
            </div>
        )
    }
}

export default Row