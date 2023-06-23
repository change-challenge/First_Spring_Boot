import styled from 'styled-components'

const StyledText = styled.p`
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
`

export { StyledText }
