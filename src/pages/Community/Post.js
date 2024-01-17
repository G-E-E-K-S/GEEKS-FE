import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import PostInfo from "../../components/Community/PostInfo";
import PostContent from "../../components/Community/PostContent";
import LikeAndStarBtn from "../../components/Community/LikeAndStarBtn";
import CommentCnt from "../../components/Community/CommentCnt";
import Comment from "../../components/Community/Comment";
import Dot from "../../assets/img/Community/dots.svg";
import Like from "../../assets/img/Community/like.svg";
import Star from "../../assets/img/Community/star.svg";
import Send from "../../assets/img/Chat/send.svg";

const InputCommentBox = styled.div`
  height: 144px;
  padding: 14px 2.36vw;
  border-top: 1px solid #efefef;
  background: #fff;
`;
const TotalInput = styled.div`
  border-radius: 24px;
  background: #f7f7f7;
  padding: 10px 3.07vw 10px 4.1vw;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const InputComment = styled.input`
  outline: none;
  border: none;
  background-color: #f7f7f7;
  width: 100%;
  &::placeholder {
    color: #b7b7b7;
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
  }
`;
const PostImg = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 245px;
  overflow: hidden;
  object-fit: cover;
  margin-top: 20px;
`;
const Post = () => {
  const [postInfo, setPostInfo] = useState("");
  const commentRef = useRef();
  let { postId } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await axios.get("http://localhost:8080/post/show?postId=" + postId);
        setPostInfo(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, []);

  const UploadComment = () => {    
    async function fetchPost() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await axios.post("http://localhost:8080/post/comment",{
          postId: postId,
          parentId: null,
          content: commentRef.current.value
        });
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <HeaderMenu>
            <img src={Dot} />
          </HeaderMenu>
          <PostInfo username={`test`} uploadtime={`10분전`}></PostInfo>
          <PostContent
            title={postInfo.title}
            content={postInfo.content}></PostContent>
            {postInfo.photoNames?.map((photo)=>(
            <PostImg src={'https://seumu-s3-bucket.s3.ap-northeast-2.amazonaws.com/'+ photo} />
          ))}
          <c.Flex>
            <LikeAndStarBtn icon={Like}></LikeAndStarBtn>
            <LikeAndStarBtn icon={Star} text={`스크랩`} marginLeft={`2.05vw`}></LikeAndStarBtn>
          </c.Flex>
          {/* 구분선 */}
          <Br/>

          {/* 댓글 부분 */}
          <CommentCnt number={`3`}/>
          {postInfo.comments?.map((comment)=>(
            <div>
              <Comment
                postInfo={{ username: comment.writer, uploadtime: comment.createdDate }}
                comment={comment.content}/>
                {comment.children?.map((child)=>(
                  <Comment
                  paddingLeft={`8.17vw`}
                  recomment={true}
                  postInfo={{ username: child.writer, uploadtime: child.createdDate }}
                  comment={child.content}/>
                ))}
            </div>
          ))}
        </c.SubScreen>
      </c.ScreenComponent>
      <InputCommentBox>
        <TotalInput>
          <InputComment placeholder="댓글을 입력하세요" ref={commentRef}/>
          <img src={Send} onClick={()=>UploadComment()}/>
        </TotalInput>
      </InputCommentBox>
    </c.Totalframe>
  );
};

export default Post;
