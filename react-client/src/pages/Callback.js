import { useLocation, Redirect } from 'react-router-dom'
import querystring from 'query-string'

function Callback() {
    const { search } = useLocation()
    const { access_token } = querystring.parse(search)

    const logUserIn = async () => {
        const opts = {
            method: 'GET',
            headers: {
                Authorization: `token ${access_token}`
            }
        }
    
        await fetch('https://api.github.com/user', opts)
            .then(res => res.json())
            .then(data => {
            sessionStorage.setItem('username', data.login)
        })
    }

    if(access_token !== ''){
        logUserIn()
        return <Redirect to='/quizzes' />
    }

    return (
        <>
            <h1>Log In Error</h1>
            <a href="https://github.com/login/oauth/authorize?client_id=d5895cc0b46eefc0976a">Try Again Here</a>
        </>
    )
}

export default Callback