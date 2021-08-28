import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Component Imports
import Header from './Header'

const CreateForm = ({ type }) => {
    const [quizzes, setQuizzes] = useState([])
    const [questions, setQuestions] = useState([])

    const opts = {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }
    
    const fetchQuizzes = async () => {

        await fetch('http://localhost:3001/quizzes', opts)
        .then(res => res.json())
        .then(data => {
            setQuizzes(data)
        })
    }

    const fetchQuestions = async () => {

        await fetch('http://localhost:3001/questions', opts)
        .then(res => res.json())
        .then(data => {
            setQuestions(data)
        })
    }

    useEffect(() => {

        if(type === 'Question'){
            fetchQuizzes()
        }else if(type === 'Choice'){
            fetchQuestions()
        }

    }, [])


    switch (type){
        case 'Quiz':
            return (
                <div className="form">
                    <Header />
                    
                    <div className="content">
                        <h1>Create New Quiz</h1>
                        <p>Fill out the following information to create a new quiz.</p>
                        <form action="http://localhost:3001/quizzes" method="post">
                            <div className="form-field">
                                <label htmlFor="quiz-name">Quiz Name</label>
                                <input type="text" id="quiz-name" name="name" placeholder="Example Quiz 1" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="quiz-weight">Quiz Weight</label>
                                <input type="number" id="quiz-weight" name="weight" placeholder="50" />
                            </div>

                            <div className="buttons">
                                <input type="submit" className="save-btn" value="Save" />
                                <Link to="/quizzes">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            )
        case 'Question':
            return (
                <div className="form">
                    <Header />

                    <div className="content">
                        <h1>Create New Question</h1>
                        <p>Fill out the following information to create a new question</p>

                        <form action="http://localhost:3001/questions" method="POST">
                            <div className="form-field">
                                <label htmlFor="question">Question</label>
                                <input type="text" id="question" name="question" placeholder="How are you today?"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="quiz">Parent Quiz</label>
                                <select id="quiz" name="QuizId">
                                    {quizzes.map((q) => {
                                        return <option key={q.id} value={q.id}>{q.name}</option>
                                    })}
                                </select>
                            </div>

                            <div className="buttons">
                                <input type="submit" className="save-btn" value="Save" />
                                <Link to="/questions">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            )
        case 'Choice':
            return (
                <div className="form">
                    <Header />

                    <div className="content">
                        <h1>Create New Choice</h1>
                        <p>Fill out the following information to create a new choice</p>

                        <form action="http://localhost:3001/choices" method="POST">
                            <div className="form-field">
                                <label htmlFor="choice">Choice</label>
                                <input type="text" id="choice" name="choice" placeholder="Today was a good day!"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="question-id">Parent Question</label>
                                <select name="QuestionId" id="question-id">
                                    {questions.map((q) => {
                                        return <option key={q.id} value={q.id}>{q.question}</option>
                                    })}
                                </select>
                            </div>

                            <div className="buttons">
                                <input type="submit" className="save-btn" value="Save" />
                                <Link to="/questions">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            )
        default:
            return(
                <h1>Error - Invalid Form type.</h1>
            )
    }
}

export default CreateForm