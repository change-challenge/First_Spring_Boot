import styled from 'styled-components'
import theme from '../../styles/theme'
import SearchBarComponent from '../../components/Common/SearchBar'

const BannerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 12rem 0 12rem;
  min-height: 100vh;
  min-width: 50.8rem;
  /*background-color: black;*/
`

const BannerWrapper = styled.div`
  padding: 10rem 0 15rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const BannerLine = styled.div`
  width: 3rem;
  height: 0.3rem;
  background-color: ${theme.colors.grey3};
  margin-bottom: 4rem;
  padding: 0;
  border: 0;
`

const BannerGreet = styled.div`
  font-size: ${theme.fontSize.sz40};
  font-weight: bold;
  color: ${theme.colors.main};
`

const BannerGuide = styled.span`
  margin-top: 1.6rem;
  margin-bottom: 6rem;
  color: ${theme.colors.grey4};
`

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  z-index: 3;
  margin-bottom: 45px;
  padding-bottom: 15px;
`

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  max-height: 100%;
  background-color: #f2f1fa;
  border-radius: 25px;
  overflow-y: auto;
  margin: auto;
`

const MainBanner = () => {
  return (
    <BannerSection>
      <div>
        <BannerWrapper>
          <BannerLine />
          <BannerGreet>
            어서오세요, 현대오토에버 도서관리시스템입니다.
          </BannerGreet>
          <BannerGuide>
            원하는 책이 있다면, 검색창에 도서를 입력해주세요.
          </BannerGuide>
          {/*검색창*/}
          <SearchContainer>
            <SearchBox>
              <SearchBarComponent />
            </SearchBox>
          </SearchContainer>
          {/*검색창 끝*/}
        </BannerWrapper>
      </div>
    </BannerSection>
  )
}

export default MainBanner
