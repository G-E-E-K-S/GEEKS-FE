import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Main/Header";
import NavigationBar from "../../components/Main/NavigationBar";
import Loading from "../Loading";
import GeeksLogo from "../../assets/img/Common/geeksLogo.svg";
import Search from "../../assets/img/Home/search.svg";
import MyPageIcon from "../../assets/img/Community/myPage.svg";
import SuggestionNotice from "../../assets/gif/suggestion.gif";

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
const ComingSoonTotal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ComingSoonImg = styled.img`
  margin-top: 96px;
  width: 172px;
  height: 172px;
`;
const ComingSoonTxt = styled.div`
  margin-top: 36px;
  margin-bottom: 5px;
  color: #b92335;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;
const ComingSoonKrTxt = styled(ComingSoonTxt)`
  font-size: 1.5rem;
  color: #333;
`;
const ComingSoon = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return loading ? (
    <Loading />
  ) : (
    <c.Totalframe>
      <c.ScreenComponent navigation={true}>
        <c.SubScreen>
          <TotalHeader>
            <img src={GeeksLogo} />
            <Icon>
              <img src={Search} onClick={() => navigate("/search")} />
              <img src={MyPageIcon} />
            </Icon>
          </TotalHeader>
          <ComingSoonTotal>
            <ComingSoonImg src={SuggestionNotice} />
            <ComingSoonTxt>{`Coming soon`}</ComingSoonTxt>
            <ComingSoonKrTxt>{`곧 만날 수 있어요!`}</ComingSoonKrTxt>
          </ComingSoonTotal>
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar type={`suggestion`} />
    </c.Totalframe>
  );
};
export default ComingSoon;
