import { Link } from 'react-router-dom'

const Header = ({ active }) => {

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
            </nav>
        </header>
    )
}

export default Header