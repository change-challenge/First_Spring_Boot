import styled from 'styled-components'
import SearchIcon from '../../assets/search-icon'
import theme from '../../styles/theme'
import { useState } from 'react'

const SearchForm = styled.form`
  width: 100%;
  height: 50px;
  min-height: 50px;
  padding: 0 16px;
  gap: 16px;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background-color: #f2f1fa;
  color: ${theme.colors.grey9};
  text-align: left;
  padding-left: 20px;
  font-size: medium;

  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 30px;
  height: 70%;
  cursor: pointer;
  border: none;
`

const ClearButton = styled.button`
  background-color: transparent;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s ease;
  font-weight: 500;
  font-size: 17px;
  color: ${theme.colors.black};

  &:focus {
    outline: none;
  }
`

const IconButton = ({ icon, type = 'button', ...rest }) => {
  return (
    <Button type={type} {...rest}>
      {icon}
    </Button>
  )
}

const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = e => {
    setSearchValue(e.target.value)
  }

  const handleClearClick = () => {
    setSearchValue('')
  }

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="도셔명을 입력해주세요."
      />
      <ClearButton visible={searchValue !== ''} onClick={handleClearClick}>
        X
      </ClearButton>
      <IconButton icon={<SearchIcon />} type="submit" />
    </SearchForm>
  )
}

export default SearchBar
