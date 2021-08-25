import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

// Component Imports
import Header from '../components/Header'
import Row from '../components/Row'

function Choices({ loggedIn }) {
    const [choices, setChoices] = useState([])

    useEffect(() => {
        const opts = {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }

        fetch('http://localhost:3001/choices', opts)
        .then(res => res.json())
        .then(data => {
            setChoices(data)
        })
    }, [])

    if(loggedIn){
        return (
            <div className="index">
                <Header  active="choice"/>
    
                <section className="content container">
                    <div className="heading">
                        <div className="heading__text">
                            <h1>Choices</h1>
                            <p>Here are all the choices in the API</p>
                        </div>
    
                        <Link to="choices/new">Create Choice</Link>
                    </div>
    
                    <div className="choice-table-header">
                        <h2>Choice</h2>
                        <h2>ID</h2>
                        <h2>QuestionId</h2>
                        <h2>Question</h2>
                        <h2>Date Created</h2>
                    </div>
    
                    {choices.map((c) => {
                        let rowType
                        let idType = Number(c.id) % 2
                        if(idType === 0){
                            rowType = 'even-row'
                        }else{
                            rowType = 'odd-row'
                        }
    
                        return <Row key={c.id} rowType={rowType} choice={c} />
                    })}
                </section>
            </div>
        )
    }else{
        return(
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

export default Choices