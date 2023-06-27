import styled from 'styled-components'
import { Text } from '../index'
import theme from '../../styles/theme'
import chevronRight from '../../assets/chevronRight.svg'

const Wrapper = styled.aside`
  width: 256px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.black};
  z-index: 3;
`

const SideMenuBox = styled.div`
  width: 100%;
  flex: 1;
`

const MenuWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px;
  color: ${theme.colors.white};
  user-select: none;
  background-color: ${theme.colors.black};

  &:hover {
    font-weight: 600;
  }

  &:active {
    color: ${theme.colors.black};
    font-weight: 600;
  }
`

const Item = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  margin-bottom: 10px;
`

const Menu = ({ text }) => {
  return (
    <MenuWrapper>
      <Item>
        <Text>{text}</Text>
        <img
          src={chevronRight}
          alt="logo"
          width="120px"
          height="36px"
          draggable={false}
        />
      </Item>
    </MenuWrapper>
  )
}

export { Wrapper, SideMenuBox, Menu }
