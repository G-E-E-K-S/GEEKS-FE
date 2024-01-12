import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Common/GoBack";
import SubTitle from "../../components/Main/SubTitle";
import OtherProfileApply from "../../components/MyPage/OtherProfileApply";
import Popup from "../../components/Common/Popup";
import BottomSheet from "../../components/Common/BottomSheet";
import Dots from "../../assets/img/Home/edit.svg";
import Colse from "../../assets/img/MyPage/close.svg";
import Chick from "../../assets/img/Join/chick.svg";

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
  border: ${(props) => (props.isAccept ? "" : "1px solid #e2e2e2")};
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
  margin-right: 2.17vw;
  margin: 0 auto;
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
`;
const RoommateApply = () => {
  const [isChoose, setIsChoose] = useState("send");
  const [isBtsShow, setIsBtsShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCancle = () => {
    setIsBtsShow(false);
    setShowPopup(true);
  };
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <ApplyTop>
          <c.Flex>
            <GoBack />
            <SubTitle subtitle={`신청 목록`} />
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
        {isChoose === "send" && (
          <div>
            <Semester>{`3학년 2학기`}</Semester>
            <ApplyTotalInfo>
              <ApplyDate>{`10.01`}</ApplyDate>
              <c.SpaceBetween>
                <OtherProfileApply
                  nickName={`닉네임여덟글자만`}
                  major={`커뮤니케이션디자인`}
                  id={`20학번`}
                />
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
                nickName={`닉네임여덟글자만`}
                major={`커뮤니케이션디자인`}
                id={`20학번`}
              />
              <c.Flex>
                <ReceiveBtn isAccept={false}>{`거절하기`}</ReceiveBtn>
                <ReceiveBtn isAccept={true}>{`수락하기`}</ReceiveBtn>
              </c.Flex>
            </ApplyTotalInfo>
          </div>
        )}
        {isBtsShow && (
          <div>
            <BottomSheet height={`331px`}>
              <c.Flex>
                <DeleteContent>
                  <DeletMainIcon src={Chick} />
                  <DeleteMsg>{`닉네임여덟글자만 님께\n전송한 룸메이트 신청을 취소할까요?`}</DeleteMsg>
                </DeleteContent>
                <CloseIcon src={Colse} onClick={() => setIsBtsShow(false)}/>
              </c.Flex>
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
