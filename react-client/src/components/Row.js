import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineExpandAlt } from 'react-icons/ai'

const Row = ({ quiz, question, choice, rowType }) => {
    if(typeof(quiz) !== 'undefined'){
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
    }else if(typeof(question) !== 'undefined'){
        return (
            <div className={`question-row ${rowType}`}>
                <div className="name">
                    <p>{question.question}</p>

                    <div className="links">
                        <Link to={`questions/${question.id}/delete`}>
                            <AiOutlineDelete />
                        </Link>
                        <Link to={`questions/${question.id}/edit`}>
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`questions/${question.id}/show`}>
                            <AiOutlineExpandAlt />
                        </Link>
                    </div>
                </div>

                <p>{question.id}</p>
                <p>{question.QuizId}</p>
                <p>{question.createdAt}</p>
            </div>
        )
    }else{
        return (
            <div className={`choice-row ${rowType}`}>
                <div className="name">
                    <p>{choice.choice}</p>

                    <div className="links">
                        <Link to={`choices/${choice.id}/delete`}>
                            <AiOutlineDelete />
                        </Link>
                        <Link to={`choices/${choice.id}/edit`}>
                            <AiOutlineEdit />
                        </Link>
                        <Link to={`choices/${choice.id}/show`}>
                            <AiOutlineExpandAlt />
                        </Link>
                    </div>
                </div>

                <p>{choice.id}</p>
                <p>{choice.QuestionId}</p>
                <p>{choice.Question.question}</p>
                <p>{choice.createdAt}</p>
            </div>
        )
    }
}

export default Row