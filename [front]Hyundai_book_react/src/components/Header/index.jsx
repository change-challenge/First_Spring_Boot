import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import * as S from './style'
import Text from '../Text/index'
import Theme from '../../styles/theme'

function Header() {
  //  const { auth, setAuth } = useContext(AuthContext)
  //  const navigate = useNavigate()

  //  const onClickLogin = () => {
  //    navigate('/login')
  //  }

  //  const onClickLogout = () => {
  //    if (!setAuth) return
  //    authApi.logout()
  //    setAuth({ userId: '', userName: '' })
  //    navigate('/')
  //  }

  return (
    <S.HeaderContainer>
      <S.Layout>
        <div>
          <img
            src={Logo}
            alt="logo"
            width="120px"
            height="36px"
            draggable={false}
          />
          <Text
            text="현대오토에버 도서관리시스템"
            color={Theme.colors.main}
            fontWeight={'bold'}
            fontSize={'10px'}
            text-align={'center'}
          />
        </div>
        <S.LinkButtonWrapper>
          <Text
            text="login"
            color={Theme.colors.grey9}
            fontSize={'17px'}
            fontFamily={'Roboto'}
          />
        </S.LinkButtonWrapper>
      </S.Layout>
    </S.HeaderContainer>
  )
}

export default Header
