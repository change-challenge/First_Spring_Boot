import styled from 'styled-components'

const HeaderContainer = styled.header`
  box-sizing: content-box;
  margin: 0 32px;
  padding: 10px 0;
  display: flex;
  background-color: white;
`

const Layout = styled.div`
  min-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    &:active {
      text-decoration: none;
    }
  }
`
const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 200px;
`

const LinkButtonWrapper = styled.ul`
  display: flex;
  justify-content: right;
  margin: 1rem 0 0 0;
`

export { HeaderContainer, LogoWrapper, Layout, LinkButtonWrapper, NavWrapper }
