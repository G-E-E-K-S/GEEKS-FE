import React, { useState } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import GenderBox from "../../components/Join/GenderBox";
import Girl from "../../assets/img/Join/girl.svg";
import SelectGirl from "../../assets/img/Join/selectGirl.svg";
import Boy from "../../assets/img/Join/man.svg";
import SelectBoy from "../../assets/img/Join/selectMan.svg";

const GenderTotal = styled.div`
  display: flex;
  & > :first-child {
    margin-right: 8px;
  }
`;
const Gender = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isgirl, setIsgirl] = useState(false);
  const [isboy, setIsboy] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const navigate = useNavigate();

  const ChangeColor = () => {
    setIsSelected(true);
  };

  const SelectGender = (gender) => {
    if (gender == "여자") {
      setIsgirl(true);
      setIsboy(false);
      localStorage.setItem("mode", 2);
    } else {
      setIsgirl(false);
      setIsboy(true);
      localStorage.setItem("mode", 1);
    }
    setIsNextPage(true);
  };

  const checkGender = () => {
    const CurGender = isgirl ? 'FEMALE' : 'MALE';
    async function fetchGenderPage() {
      try {
        const res = await API.get("/member/gender?gender=" + CurGender);
        if(res.data === 'success') navigate('/dormitory');
      } catch (error) {
        console.error(error);
      }
    }
    fetchGenderPage();
  };

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <MainText maintitle={`성별을 알려주세요`} />
        <GenderTotal>
          <GenderBox
            gender={"남자"}
            onClick={() => SelectGender("남자")}
            isSelected={isboy}
            GenderImg={Boy}
            SelectGender={SelectBoy}/>
          <GenderBox
            gender={"여자"}
            onClick={() => SelectGender("여자")}
            isSelected={isgirl}
            GenderImg={Girl}
            SelectGender={SelectGirl}/>         
        </GenderTotal>
        <JoinButton
          btnName={"다음"}
          handleClick={() => checkGender()}
          isNextPage={isNextPage}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Gender;
