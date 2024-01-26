import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import InputSearch from "../../components/Common/InputSearch";

const SearchTotalTxt = styled.div`
    margin-top: 12.32vh;
    text-align: center;
`;
const SearchInfoTxt = styled.div`
  color: #333;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
`;
const SearchSUbTxt = styled(SearchInfoTxt)`
  color: #b7b7b7;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 8px;
`;
const Search = () => {
  return (
    <c.Totalframe background={`#fff`}>
      <c.ScreenComponent>
        <InputSearch />
        <SearchTotalTxt>
          <SearchInfoTxt>{`모든 키워드를 검색할 수 있어요`}</SearchInfoTxt>
          <SearchSUbTxt>{`예) 닉네임, 커뮤니티 글 제목, 내용 등`}</SearchSUbTxt>
        </SearchTotalTxt>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default Search;
