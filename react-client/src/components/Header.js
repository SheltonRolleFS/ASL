import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/quizzes'>Quizzes</Link></li>
                    <li><Link to='/questions'>Questions</Link></li>
                    <li><Link to='/choices'>Choices</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header