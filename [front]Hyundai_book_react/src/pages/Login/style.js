import styled from 'styled-components'
import theme from '../../styles/theme'

const Container = styled.div`
  min-width: 1024px;
  min-height: 500px;
  flex-direction: column;
  align-items: center;
  padding: 100px 12rem;
`

const InnerContainer = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 400px;
  padding: 50px 50px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${theme.colors.white};
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${theme.colors.grey4};
  border-radius: 5px;
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: ${theme.fontSize.sz32};
  font-weight: 700;
  color: #262626;
`

const ContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
`

const InputWrap = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: white;
  border: 1px solid ${theme.colors.grey4};
  margin-top: 15px;

  &:focus-within {
    border: 1px solid ${theme.colors.main};
  }
`

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: ${theme.colors.grey2};
  }
`

const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`

const BottomButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: 700;
  background-color: ${theme.colors.main};
  border-radius: 8px;
  color: white;
  margin-bottom: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #dadada;
    color: white;
  }
`

export {
  Container,
  InnerContainer,
  TitleWrap,
  ContentWrap,
  InputWrap,
  Input,
  ErrorMessageWrap,
  BottomButton,
}
