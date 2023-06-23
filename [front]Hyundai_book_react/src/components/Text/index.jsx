import * as S from './style'
import { memo } from 'react'

const Text = ({ text, children, ...props }) => {
  return (
    <S.StyledText {...props}>
      {text}
      {children}
    </S.StyledText>
  )
}

export default memo(Text)
