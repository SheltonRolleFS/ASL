import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Component Imports
import Header from '../components/Header'
import Row from '../components/Row'

function Choices() {
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

    return (
        <div className="choices-page">
            <Header />
            <h1>Choices</h1>
        </div>
    )
}

export default Choices