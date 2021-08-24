import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineExpandAlt } from 'react-icons/ai'

const Row = ({ quiz, question, choice, rowType }) => {
    if(quiz.name !== ''){
        return (
            <div className={`quiz-row ${rowType}`}>
                <div className="name">
                    <p>{quiz.name}</p>

                    <div className="links">
                        <Link to={`quizzes/${quiz.id}/delete`}>
                            <AiOutlineDelete />
                        </Link>
                        <Link to={`quizzes/${quiz.id}/edit`}>
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`quizzes/${quiz.id}/show`}>
                            <AiOutlineExpandAlt />
                        </Link>
                    </div>
                </div>
                <p>{quiz.weight}</p>
                <p>{quiz.id}</p>
                <p>{quiz.Questions.length}</p>
                <p>{quiz.createdAt}</p>
            </div>
        )
    }else if(question.question !== ''){
        return (
            <div className="question-row">
                <h1>{question.name}</h1>
            </div>
        )
    }else{
        return (
            <div className="choice-row">
                <h1>{choice.choice}</h1>
            </div>
        )
    }
}

export default Row