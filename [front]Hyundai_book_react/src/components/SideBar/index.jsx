import * as S from './style'
import { Link } from 'react-router-dom'

const menuList = [
  { linkTo: '/admin', text: '홈' },
  { linkTo: '/admin/userlist', text: '회원 관리' },
  { linkTo: '/admin/rentlist', text: '대출 관리' },
  { linkTo: '/admin/booklist', text: '도서 관리' },
  { linkTo: '/admin/wishbooklist', text: '신청도서 관리' },
]

const SideBar = () => {
  return (
    <S.Wrapper>
      <S.SideMenuBox>
        {menuList.map(item => (
          <Link key={item.linkTo} to={item.linkTo}>
            <S.Menu text={item.text} />
          </Link>
        ))}
      </S.SideMenuBox>
    </S.Wrapper>
  )
}

export default SideBar
