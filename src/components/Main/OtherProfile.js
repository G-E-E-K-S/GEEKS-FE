import React from "react";
import styled from "styled-components";
import ApexChart from "react-apexcharts";
import * as c from "../../components/Common/CommonStyle";
import fillSave from '../../assets/img/MyPage/fillSave.svg';

const TotalProfile = styled.div`
  width: 100%;
  border-radius: 12px;
  background: ${(props)=>props.activeCheck ? '#FFFBEE' : '#fafafa'};
  border: 1px solid ${(props)=>props.activeCheck ? '#ECAA00' : '#FFFBEE'};
  padding: 14px 5.12vw;
  margin-bottom: 16px;
`;
const UserProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 14px;
`;
const NickName = styled.div`
  margin-bottom: 4px;
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;
const Major = styled.div`
  color: #707070;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;
const Contour = styled.div`
  height: 1px;
  width: 100%;
  background: #efefef;
  margin-top: 18px;
  margin-bottom: 17px;
`;
const Intro = styled.div`
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;
const OtherProfile = (props) => {
  const chartOptions = {
    chart: {
      
      type: "radialBar",
    },
    fill: {
      colors: "#6CABE5",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        dataLabels:{
          width: 100,
          showOn:"always",
          name:{
            show:true,
            fontSize: "1rem",
          },
          value:{
            show:false
          }
        }
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["90"],
  };
  return (
    <TotalProfile activeCheck={props.activeCheck}>
      <c.SpaceBetween>
        <c.Flex>
          <UserProfile src={props.userprofile} />
          <div>
            <NickName>{props.nickName}</NickName>
            <Major>
              {props.major} · {props.id}
            </Major>
          </div>
        </c.Flex>
        <ApexChart type="radialBar" series={[90]} options={chartOptions} height="50%" width="50%"/>
      </c.SpaceBetween>
      <Contour />
      <c.SpaceBetween>
        <Intro>외출이 잦아요! 기숙사는 가끔 들어와요</Intro>
        <img src={fillSave}/>
      </c.SpaceBetween>
    </TotalProfile>
  );
};

export default OtherProfile;
