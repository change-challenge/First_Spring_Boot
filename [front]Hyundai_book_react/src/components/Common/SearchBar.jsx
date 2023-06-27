import styled from 'styled-components'
import SearchIcon from '../../assets/search-icon'
import theme from '../../styles/theme'

const SearchBar = styled.form`
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
  background-color: #f2f1fa;
  display: flex;
  align-items: center;
  width: 30px;
  height: 70%;
  cursor: pointer;
  border: none;
`

const IconButton = ({ icon, type = 'button', ...rest }) => {
  return (
    <Button type={type} {...rest}>
      {icon}
    </Button>
  )
}

export default function SearchBarComponent({ onSubmit, value, onChange }) {
  return (
    <SearchBar onSubmit={onSubmit}>
      <SearchInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="도셔명을 입력해주세요."
      />
      <IconButton icon={<SearchIcon />} type="submit" />
    </SearchBar>
  )
}
