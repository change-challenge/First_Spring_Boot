import React, { memo } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  transform: ${props => props.transform};
  content: url(${props => props.src});
  margin: ${props => props.margin};
  flex-grow: ${props => props.flexGrow};
`

const Image = ({ ...props }) => {
  return <StyledImage {...props} />
}

export default memo(Image)
