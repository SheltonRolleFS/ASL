import { useParams, Link } from "react-router-dom"
import { useState ,useEffect } from "react"
import { IoIosArrowBack } from 'react-icons/io'

// Component Imports
import Header from './Header'
import Card from './Card'

const Item = ({ type }) => {
    
    const [quiz, setQuiz] = useState({
        Questions: []
    })
    const [question, setQuestion] = useState({
        Quiz: {}
    })
    const [choice, setChoice] = useState({
        Question: {}
    })

    const { id } = useParams()

    const fetchData = async (type) => {
        const opts = {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }

        fetch(`http://localhost:3001/${type}/${id}`, opts)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(type === 'quizzes'){
                setQuiz(data)
            }else if(type === 'questions'){
                setQuestion(data)
            }else{
                setChoice(data)
            }
        })
    }

    useEffect(() => {
        if(type === 'Quiz'){
            fetchData('quizzes')
        }else if(type === 'Question'){
            fetchData('questions')
        }else{
            fetchData('choices')
        }
    }, [])

    switch (type){
        case 'Quiz':
            return (
                <div className="item-display">
                    <Header />
                    
                    <div className="content">
                        <div className="content__header">
                            <div className="group">
                                <Link to="/quizzes"><IoIosArrowBack />Go Back</Link>
                                <h1>{quiz.name}</h1>
                            </div>
                            <Link to={`/quizzes/${quiz.id}/edit`}>Edit Quiz</Link>
                        </div>

                        <div className="content__description">
                            <div>
                                <h2>ID</h2>
                                <p>{quiz.id}</p>
                            </div>

                            <div>
                                <h2>Total Questions</h2>
                                <p>{quiz.Questions.length}</p>
                            </div>

                            <div>
                                <h2>Date Created</h2>
                                <p>{quiz.createdAt}</p>
                            </div>
                        </div>

                        <div className="content__questions-list">
                            <h3>Questions</h3>
                            {quiz.Questions.map((q) => {
                                return <Card type="questions" title={q.question} id={q.id} />
                            })}
                        </div>
                    </div>
                </div>
            )
        case 'Question':
            return (
                <div className="item-display">
                    <Header />

                    <div className="content">
                        <div className="content__header">
                            <div className="group">
                                <Link to="/questions">Go Back</Link>
                                <h1>{question.question}</h1>
                            </div>
                            <Link to={`/questions/${question.id}/edit`}>Edit Question</Link>
                        </div>

                        <div className="content__description">
                            <div>
                                <h2>ID</h2>
                                <p>{question.id}</p>
                            </div>

                            <div>
                                <h2>Parent Quiz</h2>
                                <p>{question.Quiz.name}</p>
                            </div>

                            <div>
                                <h2>Date Created</h2>
                                <p>{question.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 'Choice':
            return (
                <div className="item-display">
                    <Header />

                    <div className="content">
                        <div className="content__header">
                            <div className="group">
                                <Link to="/choices">Go Back</Link>
                                <h1>{choice.choice}</h1>
                            </div>
                            <Link to={`/choices/${choice.id}/edit`}>Edit Choice</Link>
                        </div>

                        <div className="content__description">
                            <div>
                                <h2>ID</h2>
                                <p>{choice.id}</p>
                            </div>

                            <div>
                                <h2>Parent Question</h2>
                                <p>{choice.Question.question}</p>
                            </div>

                            <div>
                                <h2>Date Created</h2>
                                <p>{choice.createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div>
                    <h1>Error - Invalid form type was requested.</h1>       
                </div>
            )
    }
}

export default Item