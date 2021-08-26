import { Link } from 'react-router-dom'

const Card = ({ type, title, id }) => {
    return (
        <article className="item-card">
            <h1>{title}</h1>
            <p>Question ID: {id}</p>
            <Link to={`/${type}/${id}/show`}>View this question</Link>
        </article>
    )
}

export default Card