import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 25px;
    font-family: 'Roboto';
`

const Header = () => {
    return (
        <Wrapper>
            <Link to={'/Web_Practice'}>
                <p>Movie Story</p>
            </Link>

            <p>
                <Link to={'/Web_Practice'}>
                    <span>Movie Story</span>
                </Link>
                <Link to={'/Web_Practice'}>
                    <span>Movie Story</span>
                </Link>
            </p>
        </Wrapper>
    )
}

export default Header
