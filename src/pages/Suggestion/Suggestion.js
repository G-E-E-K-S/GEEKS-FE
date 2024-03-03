import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import NavigationBar from "../../components/Main/NavigationBar";
import SuggestionPost from "../../components/Suggestion/SuggestionPost";
import Loading from "../Loading";
import GeeksLogo from "../../assets/img/Common/geeksLogo.svg";
import Search from "../../assets/img/Home/search.svg";
import MyPageIcon from "../../assets/img/Community/myPage.svg";
import WritePost from "../../assets/img/Community/edit.svg";

const TotalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
`;
const Icon = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;
const SuggestionTxt = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #333;
  white-space: pre-wrap;
  margin-top: 27px;
  margin-bottom: 32px;
`;
const ProcessBox = styled.div`
  width: 72px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => (props.isSelect ? "#fff" : "#707070")};
  background-color: ${(props) => (props.isSelect ? "#333" : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;
const WritePostBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.04);
  position: fixed;
  bottom: 14.69vh;
  right: 16px;
  padding: 14px 20px;
`;
const WritePostIcon = styled.img`
  height: 24px;
  width: 24px;
`;
const WriteTxt = styled.div`
  color: #333;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  margin-left: 8px;
`;
const Suggestion = () => {
  const [loading, setLoading] = useState(false);
  const [filterState, setFilterState] = useState("");
  const navigate = useNavigate();

  const handleFilter = (state) => {
    filterState === state ? setFilterState(false) : setFilterState(state);
  };
  return loading ? (
    <Loading />
  ) : (
    <c.Totalframe>
      <c.ScreenComponent navigation={true}>
        <TotalHeader>
          <img src={GeeksLogo} />
          <Icon>
            <img src={Search} onClick={() => navigate("/search")} />
            <img src={MyPageIcon} />
          </Icon>
        </TotalHeader>
        <SuggestionTxt>{`기숙사에게 원하는 것을\n건의해 보세요`}</SuggestionTxt>
        <c.Flex>
          <ProcessBox
            isSelect={filterState === "ing"}
            onClick={() => handleFilter("ing")}
          >{`처리 중`}</ProcessBox>
          <ProcessBox
            isSelect={filterState === "done"}
            onClick={() => handleFilter("done")}
          >{`처리 완료`}</ProcessBox>
          <ProcessBox
            isSelect={filterState === "no"}
            onClick={() => handleFilter("no")}
          >{`처리 보류`}</ProcessBox>
        </c.Flex>
        <SuggestionPost
          title={`gkdl`}
          content={`gkdls`}
          time={`dd`}
          cnt={`3`}
        />
        <SuggestionPost title={`gkdl`} content={`gkdls`} time={`dd`} />
      </c.ScreenComponent>
      <WritePostBox onClick={() => navigate("/writepost")}>
        <WritePostIcon src={WritePost} />
        <WriteTxt>{`건의하기`}</WriteTxt>
      </WritePostBox>
      <NavigationBar type={`suggestion`} />
    </c.Totalframe>
  );
};
export default Suggestion;
