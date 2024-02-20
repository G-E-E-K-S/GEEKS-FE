import React, { useState } from "react";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import ColHeaderMenu from "../../components/Common/ColHeaderMenu";
import GroupPost from "../../assets/img/Community/groupPost.svg";
import Round from "../../assets/gif/round.gif";
import List from "../../assets/gif/list.gif";
import MeetingHost from "../../assets/gif/meeting-host.gif";
import DeliveryHost from "../../assets/gif/delivery-host.gif";
import MeetingParticipant from "../../assets/gif/meeting-participant.gif";
import DeliveryParticipant from "../../assets/gif/delivery-host.gif";
import Delivery from "../../assets/img/Community/delivery.svg";
import FillDelivery from "../../assets/img/Community/fillDelivery.svg";
import Group from "../../assets/img/Community/group.svg";
import FillGroup from "../../assets/img/Community/fillGroup.svg";


const OpenTxt = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  margin-top: 20px;
  white-space: pre-wrap;
`;
const FullScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gif = styled.img`
  width: 280px;
  height: 280px;
`;
const TitleTxt = styled(OpenTxt)`
  margin-top: 32px;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 24px;
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 61px;
`;
const GroupSection = styled.div`
  background: linear-gradient(
    180deg,
    rgba(239, 250, 231, 0.8) 0%,
    rgba(250, 250, 250, 0.1) 100%
  );
  overflow-y: auto;
  margin-top: env(safe-area-inset-top);
  margin-bottom: env(safe-area-inset-bottom);
  padding: 0px 5.12vw;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MakeGroupSection = styled(GroupSection)`
  background: #fff;
`;
const GroupDescriptionSection = styled(GroupSection)`
  background: #f7f7f7;
  padding-top: 47px;
`;
const SubTxt = styled.div`
  font-family: Pretendard;
  font-size: 0.98rem;
  font-weight: 500;
  line-height: 20px;
  color: #707070;
  margin-bottom: 24px;
`;
const Host = styled.div`
  width: 61px;
  height: 30px;
  border-radius: 8px;
  background: #C5EAEA;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  color: #096666;
`;
const Participants = styled(Host)`
  background: #FFECAC;
  margin-bottom: 20px;
  margin-top: 120px;
  color: #865800;
`;
const Icons = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  margin-bottom: ${(props)=>props.participate && `95px`};
`;
const TendinousBox = styled.div`
  background: #fff;
  margin-top: 36px;
  margin-bottom: 50px;
  padding: 0px 5.12vw;
`;
const WriteTendinousBox = styled.div`
  width: 100%;
  height: 66px;
  border-radius: 12px;
  background: #F7F7F7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 20px;
`;
const TendinousTxt = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  color: #707070;
`;
const Tendinous = styled.div`
  margin-left: 15px;
  width: max-content;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #E2E2E2;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  background: #fff;
  color: #333;
`;
const OpenGroup = () => {
  const navigate = useNavigate();
  const [isHostDelivery, setIsHostDelivery] = useState(false);
  const [isParticipate, setIsParticipate] = useState(false);
  return (
    <>
      <GroupSection>
        <ColHeaderMenu>
          <OpenTxt>{`긱스에서 모임 기능이\n곧 오픈돼요`}</OpenTxt>
        </ColHeaderMenu>
        <FullScreen>
          <Gif src={Round} />
        </FullScreen>
      </GroupSection>
      <MakeGroupSection>
        <TitleTxt>{`내가 원하는 모임을 만들어\n기숙사생들과 함께 할 수 있어요`}</TitleTxt>
        <Img src={List} />
      </MakeGroupSection>
      <GroupDescriptionSection>
        <TitleTxt>{`모임이 필요할 때마다\n같은 기숙사에서 빠르게 구해보세요`}</TitleTxt>
        <SubTxt>{`이제 더이상 혼자 하지 않아도 돼요`}</SubTxt>
        <Img src={GroupPost}></Img>
        <TitleTxt>{`최소 정보만 적어주세요\n저희가 알아서 정리할게요`}</TitleTxt>
        <SubTxt>{`모임 주최자와 참여자 모두 편리하게 참여할 수 있어요`}</SubTxt>
        <FullScreen>
          <Host>{`주최자`}</Host>
        </FullScreen>
        {isHostDelivery ? <Img src={MeetingHost}/> : <Img src={DeliveryHost}/> }
        <FullScreen>
          <Icons src={isHostDelivery ? Delivery : FillDelivery} onClick={()=>setIsHostDelivery(!isHostDelivery)}/>
          <Icons src={isHostDelivery ? FillGroup : Group} onClick={()=>setIsHostDelivery(!isHostDelivery)}/>
        </FullScreen>
        <FullScreen>
          <Participants>{`참여자`}</Participants>
        </FullScreen>
        {isParticipate ? <Img src={MeetingParticipant}/> : <Img src={DeliveryParticipant}/> }
        <FullScreen>
          <Icons participate={true} src={isParticipate ? Delivery : FillDelivery} onClick={()=>setIsParticipate(!isParticipate)}/>
          <Icons participate={true} src={isParticipate ? FillGroup : Group} onClick={()=>setIsParticipate(!isParticipate)}/>
        </FullScreen>
      </GroupDescriptionSection>
      <TendinousBox>
        <WriteTendinousBox>
          <TendinousTxt>{`이 기능에 대해 의견을 남겨주세요!`}</TendinousTxt>
          <a href="https://forms.gle/jhknCXQijwwFbM1a9" target="_blank">
            <Tendinous>{`문의하기`}</Tendinous>
          </a>
        </WriteTendinousBox>
      </TendinousBox>
    </>
  );
};
export default OpenGroup;
