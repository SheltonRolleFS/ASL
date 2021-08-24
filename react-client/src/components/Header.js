import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to='/quizzes'><li>Quizzes</li></Link>
                    <Link to='/questions'><li>Questions</li></Link>
                    <Link to='/choices'><li>Choices</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header