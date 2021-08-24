import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Component Imports
import Header from '../components/Header'
import Row from '../components/Row'

function Questions() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const opts = {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }

        fetch('http://localhost:3001/questions', opts)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setQuestions(data)
        })
    }, [])

    
    return (
        <div className="index">
            <Header />
            <section className="content container">

                <div className="heading">
                    <div className="heading__text">
                        <h1>Questions</h1>
                        <p>Here are all the questions in the API</p>
                    </div>
                    <Link to="/questions/new">Create Question</Link>
                </div>

                <div className="question-table-header">
                    <h2>Question</h2>
                    <h2>ID</h2>
                    <h2>QuizID</h2>
                    <h2>Date Created</h2>
                </div>

                {questions.map((q) => {
                    let rowType
                    let idType = Number(q.id) % 2
                    if(idType === 0){
                        rowType = 'even-row'
                    }else{
                        rowType = 'odd-row'
                    }
                    return <Row key={q.id} rowType={rowType} question={q}/>
                })}
            </section>
        </div>
    )
}

export default Questions