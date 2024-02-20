import React, { useState, useEffect } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import OtherProfile from "../../components/Main/OtherProfile";
import JoinButton from "../../components/Join/JoinButton";
import Popup from "../../components/Common/Popup";
import Edit from "../../assets/img/MyPage/edit.svg";
import Profile from "../../assets/img/MyPage/basicProfile.svg";
import NoCheck from "../../assets/img/MyPage/noCheck.svg";
import Check from "../../assets/img/MyPage/check.svg";
import Loading from "../Loading";

const DoneBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.73vh;
  padding: 0.94vh 3.07vw;
  border-radius: 8px;
  background: ${(props) => (props.isDone ? "#FFC700" : "#efefef")};

  color: ${(props) => (props.isDone ? "#333" : "#949494")};
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
`;
const EditImg = styled.img`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-top: 8px;
`;
const TotalSaveNum = styled.div`
  margin-top: 3.31vh;
  margin-bottom: 0.94vh;
  color: #707070;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;
const CheckImg = styled.img`
  cursor: pointer;
  margin-right: 1.02vw;
`;
const LifeStyles = () => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [checkUserName, setCheckUserName] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [saveList, setSaveList] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleEdit = () => {
    setActiveEdit(true);
  };

  const handleBtn = () => {
    if (checkUserName.length > 0) {
      async function fetchDeleteSaveList() {
        try {
          setLoading(true);
          const res = await API.get(
            "/roommate/removesave?nickname=" + checkUserName
          );
          if (res.status == "200") {
            setLoading(false);
            setShowPopup(true);
            setSaveList(
              saveList.filter((data) => !checkUserName.includes(data.nickname))
            );
            setCheckUserName([]);
            setIsDone(!isDone);
          }
          console.log(res);
        } catch (e) {
          console.log(e);
        }
      }
      fetchDeleteSaveList();
    }
    setSaveList(saveList.filter((list) => list !== checkUserName));
  };
  useEffect(() => {
    async function fetchSaveList() {
      try {
        const res = await API.get("/roommate/savelist");
        setSaveList(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchSaveList();
  }, []);
  const handleCheckIndex = (userName) => {
    setCheckUserName((value) => [...value, userName]);
    if (checkUserName.includes(userName))
      setCheckUserName(checkUserName.filter((nowName) => nowName !== userName));
  };
  return loading ? (
    <Loading />
  ) : (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <c.SpaceBetween>
            {activeEdit ? (
              <>
                <Header
                  subtitle={`${checkUserName.length}명 선택됨`}
                  andleShow={activeEdit}
                  isCenter={true}
                />
                <DoneBtn isDone={isDone} onClick={() => setActiveEdit(false)}>
                  완료
                </DoneBtn>
              </>
            ) : (
              <>
                <Header subtitle={`저장 목록`} andleShow={activeEdit} />
                <EditImg src={Edit} onClick={() => handleEdit()} />
              </>
            )}
          </c.SpaceBetween>
          {/* total save list */}
          <TotalSaveNum>총 {saveList.length}명</TotalSaveNum>
          {saveList.map((userData) => (
            <c.Flex
              onClick={
                activeEdit ? () => handleCheckIndex(userData.nickname) : null
              }
            >
              {activeEdit && (
                <CheckImg
                  src={
                    checkUserName.includes(userData.nickname) ? Check : NoCheck
                  }
                />
              )}
              <OtherProfile
                activeCheck={checkUserName.includes(userData.nickname)}
                score={userData.point}
                userprofile={userData.photoName}
                nickName={userData.nickname}
                major={userData.major}
                id={userData.studentID}
                intro={userData.introduction}
                onClick={()=>navigate('/detail/details/'+userData.userId)}
              />
            </c.Flex>
          ))}
          {activeEdit && (
            <JoinButton
              btnName={`삭제하기`}
              handleClick={() => handleBtn()}
              isNextPage={checkUserName.length > 0}
            />
          )}
          <Popup
            bottom={`20.24`}
            isShowPopup={showPopup}
            setShowPopup={setShowPopup}
            message={"성공적으로 삭제되었습니다"}
          />
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default LifeStyles;
