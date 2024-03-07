import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import API from "../../axios/BaseUrl";
import moment from "moment";
import "moment/locale/ko";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Common/HeaderMenu";
import ProcessBtn from "../../components/Suggestion/ProcessBtn";
import ProcessBar from "../../components/Suggestion/ProcessBar";
import Loading from "../Loading";
import Agree from "../../assets/img/Suggestion/agree.svg";
import FillAgree from "../../assets/img/Suggestion/fillAgree.svg";

const TimeDormitory = styled.div`
  font-size: 0.875rem;
  margin-top: 1rem;
  font-weight: 500;
  line-height: 18px;
  color: #707070;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #333;
  margin-top: 20px;
`;
const Content = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #525252;
  margin-top: 12px;
  margin-bottom: 20px;
`;
const AgreeBtn = styled.div`
  display: flex;
  width: max-content;
  height: 34px;
  padding: 8px 12px 8px 12px;
  border-radius: 8px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 52px;
`;
const AgreeIcon = styled.img`
  width: 16px;
  height: 16px;
`;
const AgreeTxt = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 4px;
  color: ${(props) => (props.isAgree ? "#118E8E" : "#707070")};
`;
const DetailSuggestion = () => {
  const [loading, setLoading] = useState(false);
  const [detailData, setDetailData] = useState([]);
  const [isAgree, setIsAgree] = useState(false);
  const [agreeCnt, setAgreeCnt] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { pagenum } = useParams();

  useEffect(() => {
    async function fetchDetailSuggestion() {
      try {
        const res = await API.get("/suggestion/show/" + pagenum);
        setDetailData(res.data);
        setAgreeCnt(res.data.agreeCount)
        setIsAgree(res.data.agreeState);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDetailSuggestion();
  }, []);
  const caclTime = (uploadTime) => {
    moment.locale("ko"); // 언어를 한국어로 설정
    return moment(uploadTime).fromNow(`A`) + "전"; // 지금으로부터 계산
  };
  const handleAgreeState = (e) => {
    if(location.state?.isAdmin){
      e.preventDefault();
    }else{
      if (!isAgree) {
        const fetchAddAgree = async () => {
          try {
            const res = await API.post("/suggestion/increase/agree/" + pagenum);
            if (res.data === 'success') {
              setAgreeCnt(agreeCnt + 1);
              setIsAgree(!isAgree);
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchAddAgree();
      } else {
        const fetchDeleteAgree = async () => {
          try {
            const res = await API.post("/suggestion/decrease/agree/" + pagenum);
            if (res.data === 'success') {
              setIsAgree(!isAgree);
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchDeleteAgree();
      }
    }
  };

  const handleProcess = async(processState) => {
    try {
      const res = await API.patch("/suggestion/state/update",{
        suggestionId: pagenum,
        suggestionState: processState
      });
      if(res.data === 'success') window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  
  return loading ? (
    <Loading />
  ) : (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <TimeDormitory>
          {caclTime(detailData.createdDate)} · {`신관`}
        </TimeDormitory>
        <Title>{detailData.title}</Title>
        <Content>{detailData.content}</Content>
        <AgreeBtn onClick={(e) => handleAgreeState(e)}>
          <AgreeIcon src={isAgree ? FillAgree : Agree} />
          <AgreeTxt isAgree={isAgree}>
            {isAgree ? agreeCnt + `명이 동의해요` : `동의하기`}
          </AgreeTxt>
        </AgreeBtn>
        {detailData.suggestionState === 'ONGOING' && <ProcessBar btnName={`처리 중`}></ProcessBar>}
        {detailData.suggestionState === 'COMPLETE' && <ProcessBar btnName={`처리 완료`}></ProcessBar>}
        {detailData.suggestionState === 'DEFER' && <ProcessBar btnName={`처리 보류`}></ProcessBar>}
        {location.state?.isAdmin && (
          <>
            {detailData.suggestionState !== 'ONGOING' && (
              <ProcessBtn btnName={`처리 중`} onClick={() => handleProcess('ONGOING')} />
            )}
            {detailData.suggestionState !== 'COMPLETE' && (
              <ProcessBtn btnName={`처리 완료`} onClick={() => handleProcess('COMPLETE')} />
            )}
            {detailData.suggestionState !== 'DEFER' && (
              <ProcessBtn btnName={`처리 보류`} onClick={() => handleProcess('DEFER')} />
            )}
          </>
        )}
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default DetailSuggestion;
