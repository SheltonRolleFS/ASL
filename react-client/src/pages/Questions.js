import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

// Component Imports
import Header from '../components/Header'
import Row from '../components/Row'

function Questions() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        if(localStorage.getItem('username') !== 'null'){
            setLoggedIn(true)

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
        }
    }, [])

    
    if(loggedIn){
        return (
            <div className="index">
                <Header active="question"/>
                <section className="content container">
    
                    <div className="heading">
                        <div className="heading__text">
                            <h1>Questions</h1>
                            <p>Here are all the questions in the API</p>
                        </div>
                        <Link to="/questions/new">Create Quiz</Link>
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
    }else{
        return (
            <div className="no-access-error">
                <div className="content">
                    <a href="/">
                        <IoIosArrowBack />
                        Go Back
                    </a>
                    <h1>Halt! You've Violated the Law!</h1>
                    <p>You have to sign in with GitHub before you can view this data.</p>
                </div>
            </div>
        )
    }
}

export default Questions