import theme from '../../styles/theme'
import React, { memo } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  cursor: ${({ cursor }) => cursor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};

  &:hover {
    background-color: ${({ hoverActive, hoverBackgroundColor }) =>
      hoverActive ? hoverBackgroundColor : undefined};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    color: ${({ disabledColor }) => disabledColor};
    background-color: ${({ disabledBackgroundColor }) =>
      disabledBackgroundColor};
  }
`

const Button = ({
  text,
  children,
  onClick,
  disabled,
  hoverActive = false,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      hoverActive={hoverActive}
      {...props}
    >
      {text}
      {children}
    </StyledButton>
  )
}

export default memo(Button)
