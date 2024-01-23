import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Common/GoBack";
import SubTitle from "../../components/Main/SubTitle";
import OtherProfileApply from "../../components/MyPage/OtherProfileApply";
import { UserNickName } from "../../recoil/UserNickName";
import Popup from "../../components/Common/Popup";
import BottomSheet from "../../components/Common/BottomSheet";
import Dots from "../../assets/img/Home/edit.svg";
import Colse from "../../assets/img/MyPage/close.svg";
import CancelRoommate from "../../assets/img/MyPage/cancleRoommate.svg";
import { useRecoilValue } from 'recoil';

const ApplyTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  height: 52px;
  margin-top: 6.16vh;
  padding: 1.42vh 0;
`;
const DotsIcon = styled.img`
  height: 28px;
  width: 28px;
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
const Semester = styled.div`
  color: #949494;
  text-align: center;
  font-size: 12px;
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
  border: ${(props) => (!props.isAccept && "1px solid #e2e2e2")};
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
const ContainBottom =styled.div`
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
const RoommateApply = () => {
  const [isChoose, setIsChoose] = useState("send");
  const [isBtsShow, setIsBtsShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [sentApply, setSentApply] = useState('');
  const [receivedApply, setReceiveApply] = useState('');
  const content = useRecoilValue(UserNickName);

  useState(()=>{
    async function fetchApply() {
      try{
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8080/roommate/received");
        setSentApply(res.data);
      }catch(e) {
        console.log(e);
      }
    }
    async function fetchApply() {
      try{
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8080/roommate/sent");
        setReceiveApply(res.data);
      }catch(e) {
        console.log(e);
      } 
    }
    fetchApply();
  },[]);
  const handleCancle = () => {
    setIsBtsShow(false);
    setShowPopup(true);
    async function fetchDeleteAply() {
      try{
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8080/roommate/sent?yournickname=");
      }catch(e) {
        console.log(e);
      } 
    }
    fetchDeleteAply();
  };
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <ApplyTop>
          <c.Flex>
            <GoBack />
            <SubTitle subtitle={`신청 목록 `} />
          </c.Flex>
          <DotsIcon src={Dots} />
        </ApplyTop>
        <c.Flex>
          <ApplyList
            choose={isChoose === "send"}
            onClick={() => setIsChoose("send")}>
            보낸 신청
          </ApplyList>
          <ApplyList
            choose={isChoose === "receive"}
            onClick={() => setIsChoose("receive")}>
            받은 신청
          </ApplyList>
        </c.Flex>
        {/* axios add  */}
        {isChoose === "send" && (
          <div>
            <Semester>{`3학년 2학기`}</Semester>
            <ApplyTotalInfo>
              <ApplyDate>{`10.01`}</ApplyDate>
              <c.SpaceBetween>
                <OtherProfileApply
                  nickName={sentApply.nickname}
                  major={sentApply.major}
                  id={sentApply.studentID}
                  userprofile={sentApply.photoName}/>
                <CancleBtn onClick={() => setIsBtsShow(true)}>취소</CancleBtn>
              </c.SpaceBetween>
            </ApplyTotalInfo>
          </div>
        )}
        {isChoose === "receive" && (
          <div>
            <Semester>{`3학년 2학기`}</Semester>
            <ApplyTotalInfo>
              <ApplyDate>{`10.01`}</ApplyDate>
              <OtherProfileApply
                nickName={receivedApply.nickname}
                major={receivedApply.major}
                id={receivedApply.studentID}
                userprofile={receivedApply.photoName}/>
              <c.Flex>
                <ReceiveBtn isAccept={false}>{`거절하기`}</ReceiveBtn>
                <ReceiveBtn isAccept={true}>{`수락하기`}</ReceiveBtn>
              </c.Flex>
            </ApplyTotalInfo>
          </div>
        )}
        {isBtsShow && (
          <div>
            <BottomSheet height={`331px`} padding={`24px`}>
              <ContainBottom>
                <DeleteContent>
                  <DeletMainIcon src={CancelRoommate} />
                  <DeleteMsg>{`닉네임여덟글자만 님께\n전송한 룸메이트 신청을 취소할까요?`}</DeleteMsg>
                </DeleteContent>
                <CloseIcon src={Colse} onClick={() => setIsBtsShow(false)}/>
              </ContainBottom>
              <BtsCancelBtn onClick={()=>handleCancle()}>취소하기</BtsCancelBtn>
            </BottomSheet>
          </div>
        )}
        {showPopup && <Popup bottom={`9.95vh`} setShowPopup={setShowPopup} message={`룸메이트 신청을 취소하였습니다`}/>}
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default RoommateApply;
