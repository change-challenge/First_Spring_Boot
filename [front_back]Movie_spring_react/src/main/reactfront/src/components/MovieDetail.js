import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MovieDetail = ({ coverImg, title, detail }) => {
    return (
        <div>
            <p>
                <Link to={process.env.PUBLIC_URL + `/`}>back</Link>
            </p>
            <h2>{title}</h2>
            <img src={coverImg} />
            <p>{detail}</p>
        </div>
    )
}

MovieDetail.prototype = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
}

export default MovieDetail
