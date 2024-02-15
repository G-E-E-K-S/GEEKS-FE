import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import axios from "axios";
import moment from "moment";
import 'moment/locale/ko';
import FetchMore from "../../components/Community/FetchMore";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import NavigationBar from "../../components/Main/NavigationBar";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import CommunityPost from "../../components/Community/CommunityPost";
import GroupIcon from "../../assets/gif/group.gif";
import RightArrow from "../../assets/img/Community/rightArrow.svg";
import MyPageIcon from "../../assets/img/Community/myPage.svg";
import WritePost from "../../assets/img/Community/edit.svg";
import GeeksLogo from "../../assets/img/Common/geeksLogo.svg";
import Search from "../../assets/img/Home/search.svg";
import Loading from "../Loading";

const TotalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px 0;
`;
const Icon = styled.div`
    display: flex;
    gap: 16px;
    cursor: pointer;
`;
const GroupPromotionBox = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #effae7;
  padding: 15px 3.12vw 15px 5.12vw;
  margin-top: 16px;
  margin-bottom: 24px;
  position: relative;
`;
const GroupAttendTxt = styled.div`
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 2px;
`;
const GroupAttendDetail = styled.div`
  color: #707070;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
const GroupImg = styled.img`
  width: 102px;
  height: 102px;
  position: absolute;
  right: 7.13vw;
  bottom: 0px;
`;
const WritePostBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #E2E2E2;
  background: #FFF;
  box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.04);
  position: fixed;
  bottom: 14.69vh;
  right: 16px;
  padding: 14px 20px;
`;
const WritePostIcon = styled.img`
  height: 24px;
  width: 24px;
`;
const WriteTxt = styled.div`
  color: #333;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  margin-left: 8px;
`;
const Community = () => {
  const [post, setPost] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  async function fetchAllPost() {
    try {
      const res = await API.get("/post/main?cursor=" + cursor);
      console.log(res.data);
      setLoading(false);
      setHasNext(res.data.hasNextPage);
      setPost((prev) => [...prev, ...res.data.posts]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!hasNext) {
      return;
    }
    fetchAllPost();
  }, [cursor]);

  const caclTime = (uploadTime) => {
    moment.locale("ko"); // 언어를 한국어로 설정
    return moment(uploadTime).fromNow(`A`)+'전'; // 지금으로부터 계산
  }

  return loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent navigation={true}>
        <TotalHeader>
          <img src={GeeksLogo}/>
          <Icon>
            <img src={Search} onClick={()=>navigate('/search')}/>
            <img src={MyPageIcon} onClick={() => navigate("/myCommunity")}/>
          </Icon>
        </TotalHeader>
        <GroupPromotionBox onClick={() => navigate("/opengroup")}>
          <c.SpaceBetween>
            <div>
              <GroupAttendTxt>{`모임 참여하기`}</GroupAttendTxt>
              <GroupAttendDetail>{`곧 기숙사에서 쉽게 모임을 구할 수 있어요!`}</GroupAttendDetail>
            </div>
            <GroupImg src={GroupIcon} />
            <img src={RightArrow} />
          </c.SpaceBetween>
        </GroupPromotionBox>
        <Br marginBottom={`20px`}/>
        <c.SubScreen>
          {post.map((data) => (
            <CommunityPost
              postName={data.title}
              likeNum={data.likeCount}
              commentNum={data.commentCount}
              postContent={data.content}
              writeTime={caclTime(data.createdDate)}
              userName={data.anonymity ? "익명" : data.writer}
              postImg={data.photoName}
              onClick={() => navigate(`/post/${data.postId}`)}
            />
          ))}
          <FetchMore items={post} setCursor={setCursor}/>
          <WritePostBox onClick={()=>navigate('/writepost')}>
            <WritePostIcon src={WritePost}/>
            <WriteTxt>{`글쓰기`}</WriteTxt>
          </WritePostBox>
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar type={`community`} />
    </c.Totalframe>
  );
};

export default Community;
