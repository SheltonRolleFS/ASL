import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineExpandAlt } from 'react-icons/ai'

const Row = ({ quiz, question, choice, rowType }) => {

    const [quizDate, setQuizDate] = useState('')
    const [questionDate, setQuestionDate] = useState('')
    const [choiceDate, setChoiceDate] = useState('')
    
    
    useEffect(() => {

        if(quiz){
            const splitQuiz = quiz.createdAt.split('T')
            setQuizDate(splitQuiz[0])
        }else if(question){
            const splitQuestion = question.createdAt.split('T')
            setQuestionDate(splitQuestion[0])
        }else{
            const splitChoice = choice.createdAt.split('T')
            setChoiceDate(splitChoice[0])
        }

    }, [])

    if(typeof(quiz) !== 'undefined'){
        return (
            <div className={`quiz-row ${rowType}`}>
                <div className="name">
                    <p>{quiz.name}</p>

                    <div className="links">
                        <a href={`http://localhost:3001/quizzes/${quiz.id}/delete`}>
                            <AiOutlineDelete />
                        </a>
                        <Link to={`quizzes/${quiz.id}/edit`}>
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`quizzes/${quiz.id}/show`}>
                            <AiOutlineExpandAlt />
                        </Link>
                    </div>
                </div>
                <p>{quiz.weight}</p>
                <p>{quiz.id}</p>
                <p>{quiz.Questions.length}</p>
                <p>{quizDate}</p>
            </div>
        )
    }else if(typeof(question) !== 'undefined'){
        return (
            <div className={`question-row ${rowType}`}>
                <div className="name">
                    <p>{question.question}</p>

                    <div className="links">
                        <a href={`http://localhost:3001/questions/${question.id}/delete`}>
                            <AiOutlineDelete />
                        </a>
                        <Link to={`questions/${question.id}/edit`}>
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`questions/${question.id}/show`}>
                            <AiOutlineExpandAlt />
                        </Link>
                    </div>
                </div>

                <p>{question.id}</p>
                <p>{question.QuizId}</p>
                <p>{questionDate}</p>
            </div>
        )
    }else{
        return (
            <div className={`choice-row ${rowType}`}>
                <div className="name">
                    <p>{choice.choice}</p>

                    <div className="links">
                        <a href={`http://localhost:3001/choices/${choice.id}/delete`}>
                            <AiOutlineDelete />
                        </a>
                        <Link to={`choices/${choice.id}/edit`}>
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`choices/${choice.id}/show`}>
                            <AiOutlineExpandAlt />
                        </Link>
                    </div>
                </div>

                <p>{choice.id}</p>
                <p>{choice.QuestionId}</p>
                {choice.Question ? <p>{choice.Question.question}</p> : <p>No parent Question</p>}
                <p>{choiceDate}</p>
            </div>
        )
    }
}

export default Row