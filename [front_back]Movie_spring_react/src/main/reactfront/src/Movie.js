import PropTypes from 'prop-types'

const Movie = ({ coverImg, title, summary, genres }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImg} />
            <p>{summary}</p>
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.prototype = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
