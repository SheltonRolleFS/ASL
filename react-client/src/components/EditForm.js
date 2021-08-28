import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Component Imports
import Header from './Header'

const EditForm = ({ type }) => {
    const { id } = useParams()
    const [item, setItem] = useState({})
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
        let endpoint = ''

        if(type === 'Quiz'){
            endpoint = 'quizzes'
        }else if(type === 'Question'){
            endpoint = 'questions'
            fetchQuizzes()
        }else{
            endpoint = 'choices'
            fetchQuestions()
        }
        
        fetch(`http://localhost:3001/${endpoint}/${id}`, opts)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        })
    }, [])    

    switch (type) {
        case 'Quiz':
            return (
                <div className="form">
                    <Header />

                    <div className="content">
                        <h1>Edit Quiz</h1>
                        <p>Edit the current quiz information below.</p>

                        <form action={`http://localhost:3001/quizzes/${id}`} method="POST">
                            <div className="form-field">
                                <label htmlFor="quiz-name">Quiz Name</label>
                                <input type="text" id="quiz-name" name="name" placeholder={item.name} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="quiz-weight">Quiz Weight</label>
                                <input type="number" id="quiz-weight" name="weight" placeholder={item.weight} />
                            </div>

                            <div className="buttons">
                                <input type="submit" className="save-btn" value="Save" />
                                <Link to={`/quizzes/${id}/show`}>Cancel</Link>
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
                        <h1>Edit Question</h1>
                        <p>Edit the current question information below.</p>

                        <form action={`http://localhost:3001/questions/${id}`} method="POST">
                            <div className="form-field">
                                <label htmlFor="question">Question</label>
                                <input type="text" id="question" name="question" placeholder={item.question} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="quiz">Parent Quiz</label>
                                <select name="QuizId" id="quiz">
                                    {quizzes.map((q) => {
                                        return <option key={q.id} value={q.id}>{q.name}</option>
                                    })}
                                </select>
                            </div>

                            <div className="buttons">
                                <input type="submit" className="save-btn" value="Save" />
                                <Link to={`/questions/${id}/show`}>Cancel</Link>
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
                        <h1>Edit Choice</h1>
                        <p>Edit the current choice information below.</p>

                        <form action={`http://localhost:3001/choices/${id}`} method="POST">
                            <div className="form-field">
                                <label htmlFor="choice">Choice</label>
                                <input type="text" id="choice" name="choice" placeholder={item.choice} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="question">Parent Question</label>
                                <select name="QuestionId" id="question">
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
            <h1>Error - Invalid Form Type</h1>
    }
}

export default EditForm