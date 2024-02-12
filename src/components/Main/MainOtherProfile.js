import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";

const TotalProfile = styled.div`
  width: 100%;
  border-radius: 12px;
  background: ${(props) => (props.activeCheck ? "#FFFBEE" : props.myProfile ? "#FAFAFA" :"#fff")};
  border: 1px solid ${(props) => (props.activeCheck ? "#ECAA00" : "none")};
  margin-bottom: ${(props)=> props.marginBottom};
  overflow-x: auto;
`;
const UserProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 14px;
`;
const NickName = styled.div`
  color: #333;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
`;
const Smoke = styled.div`
  border-radius: 6px;
  background: #EFEFEF;
  padding: 4px 8px;
  height: 24px;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;
const Major = styled.div`
  color: #707070;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  margin-top: 6px;
`;
const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.score >= "70" ? "#2B75CB" : props.score >= "40" && props.score <= "60" ? "#D68D00" : "#7B7161"};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const ScoreUnit = styled(Score)`
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 2px;
`;
const MainOtherProfile = (props) => {
  return (
    <TotalProfile activeCheck={props.activeCheck} myProfile={props.myProfile} onClick={props.onClick} marginBottom={props.marginBottom}>
      <c.SpaceBetween>
        <c.Flex>
          <UserProfile src={props.userprofile?.length === 0 ? BasicProfile : process.env.REACT_APP_BUCKET_BASEURL + props.userprofile} />
          <div>
            <c.Flex>
              <NickName>{props.nickName}</NickName>
              {props.smoke && <Smoke>{`흡연자`}</Smoke>}
            </c.Flex>
            <Major>
              {props.major} · {props.id}학번
            </Major>
          </div>
        </c.Flex>
        {props.score &&
        <c.Flex>
          <Score score={props.score}>{props.score}</Score>
          <ScoreUnit score={props.score}>점</ScoreUnit>
        </c.Flex>
          }
      </c.SpaceBetween>
    </TotalProfile>
  );
};

export default MainOtherProfile;
