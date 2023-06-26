import Theme from '../../styles/theme'
import { Text } from '../../components/index'
import * as S from './style'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')

  const [emailValid, setEmailValid] = useState(false)
  const [pwValid, setPwValid] = useState(false)
  const [notAllow, setNotAllow] = useState(true)

  const handleEmail = e => {
    setEmail(e.target.value)
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    if (regex.test(email)) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  const handlePassword = e => {
    const value = e.target.value
    setPw(value)
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/
    const isValid = value.length >= 8 && regex.test(value)
    setPwValid(isValid)
  }

  const onClickConfirmButton = () => {
    alert('로그인에 성공했습니다.')
  }

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false)
      return
    }
    setNotAllow(true)
  }, [emailValid, pwValid])

  return (
    <>
      <S.Container>
        <S.InnerContainer>
          <S.TitleWrap>
            <Text
              text="로그인"
              color={Theme.colors.black}
              fontWeight={'bold'}
              fontSize={Theme.fontSize.sz32}
              text-align={'center'}
            />
          </S.TitleWrap>

          <S.ContentWrap>
            <S.InputWrap>
              <S.Input
                type="text"
                placeholder="아이디"
                value={email}
                onChange={handleEmail}
              />
            </S.InputWrap>
            <S.ErrorMessageWrap>
              {!emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )}
            </S.ErrorMessageWrap>
            <S.InputWrap>
              <S.Input
                type="password"
                placeholder="비밀번호"
                value={pw}
                onChange={handlePassword}
              />
            </S.InputWrap>
            <S.ErrorMessageWrap>
              {!pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )}
            </S.ErrorMessageWrap>
          </S.ContentWrap>
          <div style={{ marginTop: '50px' }}>
            <S.BottomButton onClick={onClickConfirmButton} disabled={notAllow}>
              로그인
            </S.BottomButton>
          </div>
        </S.InnerContainer>
      </S.Container>
    </>
  )
}

export default Login
