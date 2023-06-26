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
`

const NameContents = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: ${theme.colors.main};
  font-weight: bold;
  font-size: ${theme.fontSize.sz16};
`

const ContactCopyright = styled.div`
  padding-left: 2.4rem;
  color: ${theme.colors.grey9};
  font-size: ${theme.fontSize.sz12};
`
export { FooterWrapper, InnerWrapper, NameContents, ContactCopyright }
