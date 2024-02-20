import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Back from "../../assets/img/MyPage/Review/whiteBack.svg";
import GiftBoxTop from "../../assets/img/MyPage/Review/giftBoxTop.svg";
import GiftBoxBottom from "../../assets/img/MyPage/Review/giftBoxBottom.svg";
import ReviewExample from "../../assets/img/MyPage/Review/reviewExample.svg";
import GiftBox from "../../assets/img/MyPage/Review/giftBox.svg";
import Sticker from "../../assets/img/MyPage/Review/sticker.svg";
import Tissue from "../../assets/img/MyPage/Review/tissue.svg";
import Pen from "../../assets/img/MyPage/Review/pen.svg";
import Cup from "../../assets/img/MyPage/Review/cup.svg";
import RulePaper from "../../assets/img/MyPage/Review/rulePaper.svg";
import DormitoryPosition from "../../assets/img/MyPage/Review/dormitoryPosition.svg";

const WFull = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Totalframe = styled.div`
  background: #111111;
  min-height: 100vh;
`;
const ScreenComponent = styled.div`
  padding: 0px 5.12vw;
  overflow-y: auto;
  user-select: none;
  touch-action: pan-y;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BackIcon = styled.img`
  margin-top: 8px;
`;
const GiftImg = styled.img`
  width: 100%;
`;
const IfWrtieReview = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  color: #b7b7b7;
  margin-bottom: 8px;
  margin-top: 18px;
`;
const GiveKitRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Givekit = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
`;
const GiveWelcomeKit = styled(Givekit)`
  color: #ffc700;
  text-align: center;
`;
const AboutGeeks = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #efefef;
  white-space: pre-wrap;
  margin-top: 56px;
  margin-bottom: 115.61px;
`;
const PreWelcomekit = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  color: #ffc700;
  margin-bottom: 36px;
`;
const GiftBoxImg = styled.img`
  width: 160px;
  height: 160px;
`;
const Includes = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 69.56px;
`;
const IncludesTotal = styled.div`
  width: ${(props) => (props.isLast ? "50%" : "100%")};
  height: ${(props) => (props.isLast ? "50%" : "100%")};
  margin-right: 8px;
`;
const IncludeImg = styled.img`
  margin-bottom: 28.87px;
`;
const ImgWhole = styled.div`
  width: 171px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IncludeTxt = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #efefef;
  margin-bottom: 31.04px;
`;
const IncldueDescript = styled.div`
  padding: 16px 15.5px;
  margin-bottom: 43.91px;
  height: 126.47px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #efefef;
  white-space: pre-wrap;
  position: relative;
  background: #333;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 180px;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom-color: #333;
    border-top: 0;
    margin-left: -15px;
    margin-top: -15px;
  }
`;
const PlanTxt = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #efefef;
  margin-bottom: 20px;
  margin-top: 96.28px;
  white-space: pre-wrap;
`;
const DetailTxt = styled.div`
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  color: #949494;
  margin-bottom: 12px;
`;
const ParticipateTxt = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #ffc700;
  margin-top: 76px;
  margin-bottom: 16px;
`;
const ParticipateDetail = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #efefef;
  margin-bottom: ${(props)=>props.isLast ? '159.97px' : '16px'};
`;
const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: #707070;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: #e2e2e2;
  margin-right: 6px;
  margin-bottom: ${(props)=>props.isLast ? '159.97px' : '16px'};
`;
const KnowEvent = styled.div`
  background: #333333;
  padding: 17.58px 5.12vw; 61.42px 5.12vw;
  height: 187px;
  margin-bottom: 130px;
`;
const KnowEventTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  color: #949494;
  white-space: pre-wrap;
`;
const KnowEventTxt = styled(KnowEventTitle)`
  font-size: 0.625rem;
  margin-top: 10px;
`;
const WriteReviewBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 190px;
  background: linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, #111111 25.24%);
  padding: 44px 20px;
`;
const ReviewBox = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  color: #333333;
  background: #ffc700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReviewEvent = () => {
  const navigate = useNavigate();
  return (
    <Totalframe>
      <ScreenComponent>
        <BackIcon src={Back} onClick={() => navigate(-1)} />
      </ScreenComponent>
      <GiftImg src={GiftBoxTop} />
      <IfWrtieReview>{`긱스 이용 후기를 남겨주시면`}</IfWrtieReview>
      <Givekit>{`추첨을 통해 15명에게`}</Givekit>
      <GiveKitRow>
        <GiveWelcomeKit>{`기숙사 웰컴 키트`}</GiveWelcomeKit>
        <Givekit>{`를 드려요!`}</Givekit>
      </GiveKitRow>
      <GiftImg src={GiftBoxBottom} />
      <ScreenComponent>
        <GiftImg src={ReviewExample} />
      </ScreenComponent>
      <AboutGeeks>
        {`긱스는 아직 베타 버전이에요\n여러분들에게 더 나은 서비스를 제공하기 위해\n매일매일 노력하고 있어요\n\n여러분들의 소중한 이용 후기가 모여\n더 나은 긱스가 될 수 있게 도와주세요!`}
      </AboutGeeks>
      <PreWelcomekit>{`웰컴 키트 미리보기`}</PreWelcomekit>
      <ScreenComponent>
        <c.Flex>
          <IncludesTotal>
            <ImgWhole>
              <IncludeImg src={Sticker} />
            </ImgWhole>
            <IncludeTxt>{`리무버블 스티커`}</IncludeTxt>
            <IncldueDescript>{`긱스의 감성을 잔뜩 담은 리무버블 스티커에요\n노트북이나 아이패드에 붙여보세요!`}</IncldueDescript>
          </IncludesTotal>
          <IncludesTotal>
            <ImgWhole>
              <IncludeImg src={Tissue} />
            </ImgWhole>
            <IncludeTxt>{`물티슈`}</IncludeTxt>
            <IncldueDescript>{`입주하자마자 내가 한 학기 동안 쓸 가구를  닦기 위해 필요해요!`}</IncldueDescript>
          </IncludesTotal>
        </c.Flex>
        <c.Flex>
          <IncludesTotal>
            <ImgWhole>
              <IncludeImg src={Pen} />
            </ImgWhole>
            <IncludeTxt>{`볼펜`}</IncludeTxt>
            <IncldueDescript>{`입주할 때 필요한 서류를 작성하기 위해 볼펜을 찾는 일은 여간 귀찮은 일이 아니에요`}</IncldueDescript>
          </IncludesTotal>
          <IncludesTotal>
            <ImgWhole>
              <IncludeImg src={Cup} />
            </ImgWhole>
            <IncludeTxt>{`리유저블 컵`}</IncludeTxt>
            <IncldueDescript>{`편하게 마실 수 있는 생수병도 좋지만 긱스 로고가 있는 귀여운 텀블러로 지구를 위해 노력해보는건 어떨까요?`}</IncldueDescript>
          </IncludesTotal>
        </c.Flex>
        <IncludesTotal isLast={true}>
          <ImgWhole>
            <IncludeImg src={RulePaper} />
          </ImgWhole>
          <IncludeTxt>{`생활규칙 시트`}</IncludeTxt>
          <IncldueDescript>{`긱스가 만든 생활규칙이 적힌 종이에요. 룸메이트와 함께 보며 체크해 보세요!`}</IncldueDescript>
        </IncludesTotal>
      </ScreenComponent>
      <PlanTxt>{`웰컴 키트는\n기숙사 입주 기간동안 신관 앞에서\n나눠드릴 예정이에요`}</PlanTxt>
      <ScreenComponent>
        <GiftImg src={DormitoryPosition} />
        <DetailTxt>{`※ 자세한 일정은 당첨자들에게 개별적으로 연락드려요`}</DetailTxt>
        <ParticipateTxt>{`참여 대상`}</ParticipateTxt>
        <ParticipateDetail>{`2024-1학기에 기숙사에서 생활하는 기숙사생들`}</ParticipateDetail>
        <ParticipateTxt>{`참여 기간`}</ParticipateTxt>
        <ParticipateDetail>{`02.21 수요일 - 02.28 금요일 23:59:59 까지`}</ParticipateDetail>
        <ParticipateTxt>{`참여 방법`}</ParticipateTxt>
        <c.FlexCenter>
          <Num>{`1`}</Num>
          <ParticipateDetail>{`긱스를 꼼꼼히 이용해본다`}</ParticipateDetail>
        </c.FlexCenter>
        <c.FlexCenter>
          <Num>{`2`}</Num>
          <ParticipateDetail>{`아래 후기 작성하기 버튼을 눌러 구글 폼으로 이동한다`}</ParticipateDetail>
        </c.FlexCenter>
        <c.FlexCenter>
          <Num>{`3`}</Num>
          <ParticipateDetail>{`정성스레 이용 후기를 적는다`}</ParticipateDetail>
        </c.FlexCenter>
        <c.FlexCenter>
          <Num isLast={true}>{`4`}</Num>
          <ParticipateDetail isLast={true}>{`추첨 결과를 기다린 후 신관 앞에서 키트를 받아간다`}</ParticipateDetail>
        </c.FlexCenter>
      </ScreenComponent>
      <KnowEvent>
        <KnowEventTitle>{`이벤트 유의사항`}</KnowEventTitle>
        <KnowEventTxt>{`- 해당 이벤트는 당사 사정에 따라 사전 고지없이 변경 혹은 중단될 수 있습니다.\n- 긱스는 해당 이벤트를 통해 이벤트 참여자들에게 금전적인 요구를 하지 않습니다.\n- 작성하기 버튼을 통해 구글 폼을 제출할 시 개인정보 수집에 동의한 것으로 간주합니다.\n- 수집된 개인정보는 이벤트 종료시 일괄 파기 될 예정입니다.\n- 기재된 내용을 읽지 않고 생기는 참여자들의 실수에 대해 당사는 책임을 지지 않습니다.`}</KnowEventTxt>
      </KnowEvent>
      <WriteReviewBox>
        <a href="https://forms.gle/uUVez3yWB2TPf1r6A" target="_blank">
          <ReviewBox>{`후기 작성하기`}</ReviewBox>
        </a>
      </WriteReviewBox>
    </Totalframe>
  );
};
export default ReviewEvent;
