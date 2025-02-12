import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import moment from "moment";
import "moment/locale/ko";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import OtherProfileApply from "../../components/MyPage/OtherProfileApply";
import Popup from "../../components/Common/Popup";
import BottomSheet from "../../components/Common/BottomSheet";
import Modal from "../../components/Common/Modal";
import Colse from "../../assets/img/MyPage/close.svg";
import CancelRoommate from "../../assets/img/MyPage/cancleRoommate.svg";
import Roommate from "../../assets/img/MyPage/roommate.svg";
import BasicrProfile from "../../assets/img/MyPage/basicProfile.svg";
import Success from "../../assets/gif/success.gif";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

const ApplyTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 52px;
  margin-top: 6.16vh;
  padding: 1.42vh 0;
`;
const ApplyList = styled.div`
  width: calc(100% / 2);
  height: 6.16vh;
  border-bottom: ${(props) =>
    props.choose ? "2px solid #333" : "1px solid #efefef"};
  color: ${(props) => (props.choose ? "#333" : "#b7b7b7")};
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Notice = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  color: #949494;
  background-color: #fafafa;
  padding: 14px 20px 14px 20px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;
const NoRoommate = styled.div`
  margin-top: 4.5vh;
`;
const NoRoommateTxt = styled.div`
  font-size: 1.125rem;
  line-height: 24px;
  align-items: center;
  font-weight: 500;
  color: #949494;
  text-align: center;
  font-style: medium;
`;
const FinRoommateBtn = styled.div`
  border: 1px solid #e2e2e2;
  padding: 14px 20px 14px 20px;
  border-radius: 12px;
  height: 52px;
  width: max-content;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
`;
const FindRoommateIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;
const FindRoommateTxt = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
`;
const Semester = styled.div`
  color: #949494;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  margin-top: 2.84vh;
`;
const ApplyTotalInfo = styled.div`
  height: 13.03vh;
  padding: 1.89vh 0;
  margin-bottom: 1.89vh;
`;
const ApplyDate = styled.div`
  color: #b7b7b7;
  font-size: 0.875;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 1.42vh;
`;
const CancleBtn = styled.div`
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background: #fff;
  height: 42px;
  width: 14.61vw;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 4.1vw;
  white-space: nowrap;
`;
const ReceiveBtn = styled.div`
  width: calc((100% - 2.05vw) / 2);
  height: 56px;
  border-radius: 12px;
  border: ${(props) => !props.isAccept && "1px solid #e2e2e2"};
  background: ${(props) => (props.isAccept ? "#FFC700" : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: ${(props) => (props.isAccept ? null : "2.05vw")};

  color: #333;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;
const BtsCancelBtn = styled.div`
  width: 100%;
  height: 62px;
  border-radius: 12px;
  background: #ffc700;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  cursor: pointer;
`;
const DeleteContent = styled.div`
  display: flex;
  width: 65.64vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ContainBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const DeletMainIcon = styled.img`
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`;
const DeleteMsg = styled.div`
  color: #333;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  white-space: pre-wrap;
`;
const CloseIcon = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-left: 2.17vw;
`;
const SuccessGif = styled.img`
  position: absolute;
  width: 157px;
  height: 157px;
  top: -133px;
`;
const MatchingTxt = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  margin-bottom: 28px;
`;
const OpponentProfileBox = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  background: #F7F7F7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;
const OpponentName = styled.div`
  margin-top: 8px;
  margin-bottom: 4px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #1A1A1A;
`;
const OpponentMajor = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #707070;
`;
const OkBtn = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFC700;
  color: #1A1A1A;
  margin-top: 32px;
`;
const RoommateApply = () => {
  const [isChoose, setIsChoose] = useState("send");
  const [isBtsShow, setIsBtsShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [sentApply, setSentApply] = useState([]);
  const [receivedApply, setReceivedApply] = useState([]);
  const [opponentNickName, setOpponentNickName] = useState("");
  const [matching, setMatching] = useState(false);
  const [openMatchingModal, setOpenMatchingModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useState(() => {
    async function fetchSentApply() {
      try {
        const res = await API.get("/roommate/sent");
        setSentApply(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    async function fetchReceivedApply() {
      try {
        const res = await API.get("/roommate/received");
        setReceivedApply(res.data);
        console.log(res.data)
      } catch (e) {
        console.log(e);
      }
    }
    fetchReceivedApply();
    fetchSentApply();
  }, []);

  const handleCancle = () => {
    setIsBtsShow(false);
    setShowPopup(true);
    async function fetchDeleteAply() {
      try {
        const res = await API.get(
          "/roommate/remove?yournickname=" + opponentNickName
        );
        setSentApply(
          sentApply.filter((data) => data.nickname !== opponentNickName)
        );
      } catch (e) {
        console.log(e);
      }
    }
    fetchDeleteAply();
  };

  const AcceptRoommate = (opponentId) => {
    async function fetchAccept() {
      try {
        const res = await API.post(`/roommate/accept/${opponentId}`);
        if(res.data === 'success') setOpenMatchingModal(true);
      } catch (e) {
        console.log(e);
      }
    }
    fetchAccept();
  }

  const RefuseRoommate = (opponentId) => {
    async function fetchRefuse() {
      try {
        const res = await API.post(`/roommate/refuse/${opponentId}`);
      } catch (e) {
        console.log(e);
      }
    }
    fetchRefuse();
  }

  const handleBtsShow = (opponent) => {
    setIsBtsShow(!isBtsShow);
    setOpponentNickName(opponent);
  };

  const handleModal = () => {
    setMatching(true);
    setOpenMatchingModal(false);
  }
  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`신청 목록`} />
        <c.Flex>
          <ApplyList
            choose={isChoose === "send"}
            onClick={() => setIsChoose("send")}
          >
            보낸 신청
          </ApplyList>
          <ApplyList
            choose={isChoose === "receive"}
            onClick={() => setIsChoose("receive")}
          >
            받은 신청
          </ApplyList>
        </c.Flex>
        <Notice>{`룸메이트가 맺어지면, 다른 사람에게 보낸 받은 신청과 보낸 신청은 모두 사라져요`}</Notice>
        {/* axios add  */}
        {isChoose === "send" &&
          (sentApply.length === 0 ? (
            <NoRoommate>
              <NoRoommateTxt>{`보낸 룸메이트 신청이 없어요`}</NoRoommateTxt>
              <FinRoommateBtn onClick={() => navigate("/roommate")}>
                <FindRoommateIcon src={Roommate} />
                <FindRoommateTxt>{`룸메이트 찾으러 가기`}</FindRoommateTxt>
              </FinRoommateBtn>
            </NoRoommate>
          ) : (
            <div>
              <Semester>{`2024년도 1학기`}</Semester>
              {sentApply.map((userData) => (
                <ApplyTotalInfo>
                  <ApplyDate>
                    {moment(userData.createdDate).format("M월 D일")}
                  </ApplyDate>
                  <c.SpaceBetween>
                    <OtherProfileApply
                      nickName={userData.nickname}
                      major={userData.major}
                      id={userData.studentID}
                      userprofile={
                        userData.photoName.length !== 0
                          ? userData.photoName
                          : null
                      }
                    />
                    <CancleBtn onClick={() => handleBtsShow(userData.nickname)}>
                      취소
                    </CancleBtn>
                  </c.SpaceBetween>
                </ApplyTotalInfo>
              ))}
            </div>
          ))}
        {isChoose === "receive" &&
          (receivedApply.length === 0 ? (
            <NoRoommate>
              <NoRoommateTxt>{`받은 룸메이트 신청이 없어요`}</NoRoommateTxt>
              <FinRoommateBtn onClick={() => navigate("/roommate")}>
                <FindRoommateIcon src={Roommate} />
                <FindRoommateTxt>{`룸메이트 찾으러 가기`}</FindRoommateTxt>
              </FinRoommateBtn>
            </NoRoommate>
          ) : (
            <div>
              <Semester>{`2024년도 1학기`}</Semester>
              {receivedApply.map((userData) => (
                <ApplyTotalInfo>
                  <ApplyDate>{moment(userData.createdDate).format('MM.DD')}</ApplyDate>
                  <OtherProfileApply
                    onClick={()=>navigate('/detail/details/'+userData.userId)}
                    nickName={userData.nickname}
                    major={userData.major}
                    id={userData.studentID}
                    userprofile={
                      userData.photoName.length !== 0
                        ? userData.photoName
                        : null
                    }
                  />
                  {!matching &&
                  <c.Flex>
                    <ReceiveBtn isAccept={false} onClick={() => RefuseRoommate(userData.userId)}>{`거절하기`}</ReceiveBtn>
                    <ReceiveBtn isAccept={true}  onClick={() => AcceptRoommate(userData.userId)}>{`수락하기`}</ReceiveBtn>
                  </c.Flex>
                  }
                  {openMatchingModal && 
                    <Modal padding={`28px 20px 22px 20px`}>
                      <SuccessGif src={Success}/>
                      <MatchingTxt>{`룸메이트가 맺어졌어요!`}</MatchingTxt>
                      <OpponentProfileBox>
                        <ProfileImg src={userData.photoName.length !== 0
                          ? process.env.REACT_APP_BUCKET_BASEURL+userData.photoName
                          : BasicrProfile}/>
                        <OpponentName>{userData.nickname}</OpponentName>
                        <OpponentMajor>{userData.major} · {userData.studentID + '학번'}</OpponentMajor>
                      </OpponentProfileBox>
                      <OkBtn onClick={()=>handleModal()}>{`확인`}</OkBtn>
                    </Modal>
                  }
                </ApplyTotalInfo>
              ))}
            </div>
          ))}
        <div>
          <BottomSheet
            height={`331px`}
            padding={`24px`}
            isOpen={isBtsShow}
            interaction={true}
          >
            <ContainBottom>
              <DeleteContent>
                <DeletMainIcon src={CancelRoommate} />
                <DeleteMsg>
                  {opponentNickName +
                    `님께\n전송한 룸메이트 신청을 취소할까요?`}
                </DeleteMsg>
              </DeleteContent>
              <CloseIcon src={Colse} onClick={() => setIsBtsShow(false)} />
            </ContainBottom>
            <BtsCancelBtn onClick={() => handleCancle()}>취소하기</BtsCancelBtn>
          </BottomSheet>
        </div>
        <Popup
            bottom={`9.95`}
            isShowPopup={showPopup}
            setShowPopup={setShowPopup}
            message={`룸메이트 신청을 취소하였습니다`}
          />
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};
export default RoommateApply;
