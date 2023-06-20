import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Movie = ({ id, coverImg, title, rate }) => {
    return (
        <div className="movie-container">
            <img src={coverImg} />
            <div className="movie-info">
                <h4>
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={process.env.PUBLIC_URL + `/movie/${id}`}
                    >
                        {title}
                    </Link>
                </h4>
                <span>{rate}</span>
            </div>
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
