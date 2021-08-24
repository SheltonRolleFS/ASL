import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Component Imports
import Header from '../components/Header'
import Row from '../components/Row'

function Quizzes() {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        const opts = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
        fetch('http://localhost:3001/quizzes', opts)
        .then(res => res.json())
        .then(data => {
            setQuizzes(data)
        })
    }, [])

    
    return (
        <>
            <Header />

            <section className="content">
                <div className="heading">
                    <div className="heading__text">
                        <h1>Quizzes</h1>
                        <p>Here are all the quizzes in the API</p>
                    </div>
                    <Link to="/quizzes/new">Create Quiz</Link>
                </div>

                <div className="table-header">
                    <h2>Quiz Name</h2>
                    <h2>Weight</h2>
                    <h2>ID</h2>
                    <h2>No. of Questions</h2>
                    <h2>Date Created</h2>
                </div>
                {quizzes.map((q) => {
                    return <Row key={q.id} quiz={q}/>
                })}
            </section>
        </>
    )
}

export default Quizzes