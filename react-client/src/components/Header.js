import { Link, Redirect } from 'react-router-dom'

const Header = ({ active }) => {
    function logout(){
        sessionStorage.removeItem('username')
        return <Redirect to="/"/>
    }

    return (
        <header>
            <nav>
                <ul>
                    <Link to='/quizzes'>
                        {active === 'quiz' ? <li className="active">Quizzes</li> : <li>Quizzes</li>}
                    </Link>
                    <Link to='/questions'>
                        {active === 'question' ? <li className="active">Questions</li> : <li>Questions</li>}
                    </Link>
                    <Link to='/choices'>
                        {active === 'choice' ? <li className="active">Choices</li> : <li>Choices</li>}
                    </Link>
                </ul>

                <button onClick={() => logout()}>Logout</button>
            </nav>
        </header>
    )
}

export default Header