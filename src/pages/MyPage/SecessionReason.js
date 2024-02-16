import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import Header from "../../components/MyPage/Header";
import LeaveReason from "../../components/MyPage/LeaveReason";
import Modal from "../../components/Common/Modal";
import * as c from "../../components/Common/CommonStyle";
import SecessionIcon from "../../assets/img/MyPage/secessionModal.svg";
import Loading from "../Loading";

const MainText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
  margin-top: 48px;
`;
const SubText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
  color: #707070;
`;
const CuriousReason = styled.div`
  font-size: 1.12rem;
  font-weight: 600;
  line-height: 24px;
  margin-top: 50px;
`;
const Bottom = styled.div`
  position: fixed;
  bottom: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 25.24%
  );
  padding: 20px 20px 100px 20px;
  width: 100%;
`;
    
const ChoiceBtn = styled.div`
  border-radius: 12px;
  background: ${(props) => (props.useMore ? "#FFC700" : "#EFEFEF")};
  width: calc(100% / 2);
  margin-right: ${(props) => props.useMore && "8px"};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  color: ${(props) => props.useMore || "#707070"};
`;
const WFull = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SecessionImg = styled.img`
  width: 64px;
  height: 64px;
`;
const RealSeccsion = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;
const Description = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #707070;
  margin-bottom: 32px;
`;
const ModalChoiceBtn = styled(ChoiceBtn)`
    width: 135px;
`;
const SecessionReason = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const leaveReason = [
    "사용을 잘 안 하게 돼요",
    "더이상 기숙사에 살지 않아요",
    "개인 정보를 위해 삭제할 정보가 있어요",
    "마음에 드는 룸메이트가 없어요",
    "기타",
  ];
  const [detailReason, setDetailReason] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const Secession = () => {
    async function fetchReason() {
      setLoading(true);
      try {
        const res = await API.post("/member/reason", detailReason);
        if(res.data === 'success'){
          fetchSecession();
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchReason();

    async function fetchSecession() {
      setLoading(true);
      try {
        const res = await API.get("/member/withdrawal");
        if(res.data === 'success') {
          setLoading(false);
          localStorage.setItem('autologin',false);
          navigate('/welcome', {state: {prev: "withdrawal"}, replace: true});
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleReaseon = (reason) => {
    setDetailReason((prev)=>([...prev,reason]));
  }
  return (
    <c.Totalframe>
      <c.ScreenComponent style={{height: `calc(100vh - 200px)`}}>
        <Header subtitle={`서비스 탈퇴`} />
        <MainText>{location.state?.userName + `님, 떠나시다니 아쉬워요`}</MainText>
        <SubText>{`계정을 삭제하시면 가입 정보, 게시글 작성 내역 등 모든 활동 정보가 사라지며 재가입시 재학생 인증도 다시 해야 해요.`}</SubText>
        <CuriousReason>{`떠나시려는 이유가 궁금해요`}</CuriousReason>
        {leaveReason.map((val) => (
          <LeaveReason leaveReason={val} onSelect={(selectedReason) => handleReaseon(selectedReason)}/>
        ))}
      </c.ScreenComponent>
      <Bottom>
          <c.Flex>
            <ChoiceBtn useMore={true} onClick={()=>navigate('/mypage')}>{`더 쓸래요`}</ChoiceBtn>
            <ChoiceBtn
              onClick={() => setModalOpen(true)}
            >{`탈퇴할래요`}</ChoiceBtn>
          </c.Flex>
        </Bottom>
        {modalOpen && (
            <Modal padding={`22px 20px`}>
              <WFull>
                <SecessionImg src={SecessionIcon} />
              </WFull>
              <RealSeccsion>{`정말로 탈퇴하시겠어요?`}</RealSeccsion>
              <Description>{`탈퇴 시 모든 정보가 사라져요`}</Description>
              <c.Flex>
                <ModalChoiceBtn
                  useMore={true}
                  onClick={() => setModalOpen(false)}>
                    {`더 쓸래요`}
                </ModalChoiceBtn>
                <ModalChoiceBtn onClick={()=>Secession()}>{`탈퇴할래요`}</ModalChoiceBtn>
              </c.Flex>
            </Modal>
          )}
    </c.Totalframe>
  );
};
export default SecessionReason;
