import React from "react";
import styled from "styled-components";
import GoBack from "./GoBack";
import SearchIcon from "../../assets/img/Home/graySearch.svg";

const SearchForm = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 0px;
  justify-content: space-between;
  align-items: center;
`;
const InputBox = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #f7f7f7;
  padding: 10px 3.07vw;
  margin-left: 12px;
  display: flex;
  align-items: center;
`;
const Search = styled.img`
  width: 20px;
  height: 20px;
`;
const InpufForm = styled.input`
  border: none;
  outline: none;
  background: #f7f7f7;
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 8px;
  &:placeholder-shown {
    overflow: visible;
  }
`;
const InputSearch = (props) => {
  return (
    <SearchForm>
      <GoBack />
      <InputBox>
        <Search src={SearchIcon} />
        <InpufForm placeholder={`검색 키워드를 입력하세요`}/>
      </InputBox>
    </SearchForm>
  );
};
export default InputSearch;
