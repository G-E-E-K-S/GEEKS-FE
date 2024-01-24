import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
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

const GroupPromotionBox = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #EFFAE7;
  padding: 11px 5.12vw;
  margin-top: 16px;
  margin-bottom: 24px;
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
  top: 87px;
  right: 15.3vw;
`;
const Community = () => {
  const [post, setPost] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchAllPost() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await axios.get("http://localhost:8080/post/showAll");
        setPost(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllPost();
  }, []);

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <HeaderMenu>
          <img src={MyPageIcon} onClick={()=>navigate('/myCommunity')}/>
        </HeaderMenu>
        <GroupPromotionBox>
          <c.SpaceBetween>
            <div>
              <GroupAttendTxt>{`모임 참여하기`}</GroupAttendTxt>
              <GroupAttendDetail>{`곧 기숙사에서 쉽게 모임을 구할 수 있어요!`}</GroupAttendDetail>
            </div>
            <GroupImg src={GroupIcon}/>
            <img src={RightArrow}/>
          </c.SpaceBetween>
        </GroupPromotionBox>
        <Br/>
        <c.SubScreen>
          {post.map((data) => (
            <CommunityPost
              postName={data.title}
              commentNum={data.commentCount}
              postContent={data.content}
              writeTime={data.createdDate}
              userName={`ㅅㄷㄴㅅ`}
              postImg={data.photoName}
              onClick={()=>navigate(`/post/${data.postId}`)}
            />
          ))}
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar type={`community`} />
    </c.Totalframe>
  );
};

export default Community;
