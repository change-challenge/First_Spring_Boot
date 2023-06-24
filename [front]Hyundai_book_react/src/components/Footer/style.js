import styled from 'styled-components'
import theme from '../../styles/theme'

const FooterWrapper = styled.footer`
  box-sizing: content-box;
  margin: 0 32px;
  padding: 10px 0;
  display: flex;
  background-color: white;
`

const InnerWrapper = styled.div`
  min-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    &:active {
      text-decoration: none;
    }
  }
`

const NameContents = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: ${theme.colors.black};
`

const ContactCopyright = styled.div`
  padding-left: 2.4rem;
`
export { FooterWrapper, InnerWrapper, NameContents, ContactCopyright }
