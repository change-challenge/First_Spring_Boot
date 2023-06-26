import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import * as S from './style'
import { Text } from '../index'
import Theme from '../../styles/theme'

function Header() {
  const basicNavMenu = [
    {
      linkTo: '/signup',
      text: '회원가입',
    },
    {
      linkTo: '/login',
      text: '로그인',
    },
  ]

  const navigate = useNavigate()

  const logoClick = () => {
    navigate('/')
  }

  const loginClick = () => {
    navigate('/login')
  }
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
        <S.LogoWrapper onClick={logoClick}>
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
        </S.LogoWrapper>
        <S.NavWrapper>
          <S.LinkButtonWrapper>
            {basicNavMenu.map(menu => {
              return (
                <li key={menu.linkTo}>
                  <Link
                    style={{
                      marginRight: '2rem',
                      padding: '0 10px',
                      lineHeight: '1em',
                      height: '1em',
                    }}
                    to={menu.linkTo}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                      }}
                    >
                      <Text
                        text={menu.text}
                        color={Theme.colors.grey9}
                        fontSize={'17px'}
                        fontFamily={'Roboto'}
                        cursor={'pointer'}
                      />
                    </span>
                  </Link>
                </li>
              )
            })}
          </S.LinkButtonWrapper>
        </S.NavWrapper>
      </S.Layout>
    </S.HeaderContainer>
  )
}

export default Header
