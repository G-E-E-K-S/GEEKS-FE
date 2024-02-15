import React, { useState } from "react";
import API from "../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import DormitoryBox from "../../components/Join/DormitoryBox";
import Loading from "../Loading";

const DormitoryTotal = styled.div`
  margin-top: 6.16vh;
  & > :last-child {
    margin-bottom: 0px;
  }
`;

const DormitoryBoxChoice = styled.div`
  height: 9vh;
  border-radius: 12px;
  background: #efefef;
  color: #707070;
  padding-left: 20px;
  margin-bottom: 1.89vh;
`;

const Dormitory = () => {
  const [dormiVal, setDormiVal] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const SelectDormitory = (dormitory) => {
    setDormiVal(dormitory);
  };

  const sendDormitory = () => {
    let type = dormiVal === '신관' ? 'NEW' : dormiVal === '구관' ? 'OLD' : 'HAPPY';
    async function fetchDormitory() {
      setLoading(true);
      try{
        const res = await API.get("/member/type?type=" + type);
        res.data === 'success' && navigate('/finalpage')
      }catch(e) {
        console.log(e);
      }
    }
    fetchDormitory();
  }

  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu />
        <MainText maintitle={`어떤 기숙사에서 생활하시나요?`} />
        <DormitoryTotal>
          <DormitoryBox
            disable={false}
            dormitory={"신관"}
            onClick={() => SelectDormitory("신관")}
            isSelected={dormiVal == "신관"}
          />
          <DormitoryBox
            disable={localStorage.getItem("mode") == 1}
            dormitory={"구관"}
            onClick={() => SelectDormitory("구관")}
            isSelected={dormiVal == "구관"}/>
          <DormitoryBox
            disable={false}
            dormitory={"천안 행복기숙사"}
            onClick={() => SelectDormitory("천안 행복기숙사")}
            isSelected={dormiVal == "천안 행복기숙사"}/>
        </DormitoryTotal>
        <JoinButton btnName={"다음"} handleClick={()=>sendDormitory()} isNextPage={dormiVal}/>
      </c.ScreenComponent>
    </c.Totalframe>

    )
  );
};

export default Dormitory;
