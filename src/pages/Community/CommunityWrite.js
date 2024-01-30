import React, { useState, useEffect } from "react";
import * as c from "../../components/Common/CommonStyle";
import API from "../../axios/BaseUrl";
import Header from "../../components/MyPage/Header";
import CommunityPost from "../../components/Community/CommunityPost";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

const Menu = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
`;
const SubMenu = styled.div`
  width: calc(100% / 2);
  padding: 14px 0;
  color: ${(props)=>props.isSelect ? '#333' : '#B7B7B7'};
  border-bottom: ${(props)=>props.isSelect ? '2px solid #333' : '1px solid #B7B7B7'};
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const CommunityWrite = () => {
  const [selectMenu, setSelectMenu] = useState("post");
  const [post,setPost] = useState([]);
  const [comment,setComment] = useState([]);

  useEffect(() => {
    async function fetchCommunityWrite() {
      try {
        const res = await API.get("/post/community/history");
        setPost(res.data.postHistories);
        setComment(res.data.commentHistories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCommunityWrite();
  }, []);

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`커뮤니티 작성 내역`} />
        <Menu>
          <SubMenu isSelect={selectMenu === 'post'} onClick={()=>setSelectMenu('post')}>{`글`}</SubMenu>
          <SubMenu isSelect={selectMenu === 'comment'} onClick={()=>setSelectMenu('comment')}>{`댓글`}</SubMenu>
        </Menu>
        {selectMenu === 'post' && (
          post.map((post)=>(
            <CommunityPost
            postName={post.title}
            commentNum={post.commentCount}
            postContent={post.content}
            writeTime={moment(post.createdDate).format('MM.DD')}/>
          ))
        )}
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default CommunityWrite;
