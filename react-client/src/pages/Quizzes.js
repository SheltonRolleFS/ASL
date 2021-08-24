import { useState, useEffect } from 'react'
import Header from '../components/Header'

function Quizzes() {

    const fetchData = async () => {
        const opts = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
        fetch('http://localhost:3001/quizzes', opts)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    
    return (
        <>
            <Header />
            <h1>Quizzes</h1>
        </>
    )
}

export default Quizzes