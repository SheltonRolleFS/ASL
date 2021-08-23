import { useLocation, Redirect } from 'react-router-dom'
import querystring from 'query-string'

function Home() {
    const { search } = useLocation()
    const { access_token } = querystring.parse(search)

    if(access_token !== ''){
        return <Redirect to='/quizzes' />
    }

    return (
        <>
            <h1>Log In Error</h1>
            <a href="https://github.com/login/oauth/authorize?client_id=d5895cc0b46eefc0976a">Try Again Here</a>
        </>
    )
}

export default Home