import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

// Component Imports
import Header from '../components/Header'
import Row from '../components/Row'

function Quizzes({ loggedIn }) {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        const opts = {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }
        fetch('http://localhost:3001/quizzes', opts)
        .then(res => res.json())
        .then(data => {
            setQuizzes(data)
        })
    }, [])

    
    if(loggedIn){
        return (
            <div className="index">
                <Header />
    
                <section className="content container">
                    <div className="heading">
                        <div className="heading__text">
                            <h1>Quizzes</h1>
                            <p>Here are all the quizzes in the API</p>
                        </div>
                        <Link to="/quizzes/new">Create Quiz</Link>
                    </div>
    
                    <div className="quiz-table-header">
                        <h2>Quiz Name</h2>
                        <h2>Weight</h2>
                        <h2>ID</h2>
                        <h2>No. of Questions</h2>
                        <h2>Date Created</h2>
                    </div>
                    {quizzes.map((q) => {
                        let rowType
                        let idType = Number(q.id) % 2
                        if(idType === 0){
                            rowType = 'even-row'
                        }else{
                            rowType = 'odd-row'
                        }
                        return <Row key={q.id} rowType={rowType} quiz={q}/>
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

export default Quizzes