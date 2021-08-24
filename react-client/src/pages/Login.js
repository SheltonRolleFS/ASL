import React from 'react'

const Login = ({ loggedIn }) => {
    console.log(loggedIn)
    
    return (
        <div>
            <a href='https://github.com/login/oauth/authorize?client_id=d5895cc0b46eefc0976a'>Login</a>
        </div>
    )
}

export default Login