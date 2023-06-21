import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// 스타일을 정의한 컴포넌트 생성
const MovieContainer = styled.div`
    text-align: center;
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`

const MovieImage = styled.img`
    margin-top: 10px;
    max-width: 100%;
`

const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`

const MovieTitle = styled.h4`
    margin: 0;
`

const MovieRate = styled.span`
    margin-left: 3px;
`

const Movie = ({ id, coverImg, title, rate }) => {
    return (
        <MovieContainer>
            <MovieImage src={coverImg} />
            <MovieInfo>
                <MovieTitle>
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={process.env.PUBLIC_URL + `/movie/${id}`}
                    >
                        {title}
                    </Link>
                </MovieTitle>
                <MovieRate>{rate}</MovieRate>
            </MovieInfo>
        </MovieContainer>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
