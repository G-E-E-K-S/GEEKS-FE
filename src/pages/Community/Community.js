import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import NavigationBar from "../../components/Main/NavigationBar";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import CommunityPost from "../../components/Community/CommunityPost";
import GroupIcon from "../../assets/gif/group.gif";
import RightArrow from "../../assets/img/Community/rightArrow.svg";
import MyPageIcon from "../../assets/img/Community/myPage.svg";
import moment from "moment";
import 'moment/locale/ko'
import FetchMore from "../../components/Community/FetchMore";

const GroupPromotionBox = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #effae7;
  padding: 11px 5.12vw;
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
  right: 10.3vw;
  bottom: 5px;
`;
const Community = () => {
  const [post, setPost] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  async function fetchAllPost() {
    try {
       // allow cookies
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

  return loading ? null : (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu>
          <img src={MyPageIcon} onClick={() => navigate("/myCommunity")} />
        </HeaderMenu>
        <GroupPromotionBox>
          <c.SpaceBetween>
            <div>
              <GroupAttendTxt>{`모임 참여하기`}</GroupAttendTxt>
              <GroupAttendDetail>{`곧 기숙사에서 쉽게 모임을 구할 수 있어요!`}</GroupAttendDetail>
            </div>
            <GroupImg src={GroupIcon} />
            <img src={RightArrow} />
          </c.SpaceBetween>
        </GroupPromotionBox>
        <Br />
        <c.SubScreen>
          {post.map((data) => (
            <CommunityPost
              postName={data.title}
              commentNum={data.commentCount}
              postContent={data.content}
              writeTime={moment(data.createdDate).format("M월 d일 A h:mm")}
              userName={data.anonymity ? "익명" : "닉네임"}
              postImg={data.photoName}
              onClick={() => navigate(`/post/${data.postId}`)}
            />
          ))}
          <FetchMore items={post} setCursor={setCursor}/>
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar type={`community`} />
    </c.Totalframe>
  );
};

export default Community;
