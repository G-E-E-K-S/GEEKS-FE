import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import moment from "moment";
import 'moment/locale/ko';
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
import FillLike from "../../assets/img/Community/fillLike.svg";
import Star from "../../assets/img/Community/star.svg";
import FillStar from "../../assets/img/Community/fillStar.svg";
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
  const [isLike, setIsLike] = useState(false);
  const [isStar, setIsStar] = useState(false);
  const commentRef = useRef();
  let { postId } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await axios.get("http://localhost:8080/post/show?postId=" + postId);
        setPostInfo(res.data);
        // setIsLike(res.data.heartState);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, []);

  const UploadComment = () => {    
    async function fetchPost() {
      try {
        axios.defaults.withCredentials = true;
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
  const caclTime = (uploadTime) => {
    moment.locale("ko"); // 언어를 한국어로 설정
    return moment(uploadTime).fromNow(`A`)+'전'; // 지금으로부터 계산
  }
  const handleLike = () =>{
    if(isLike === false){
      async function fetchLikeState() {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get("http://localhost:8080/post/heart/insert?postId=" + postId);
          setIsLike(true);
        } catch (error) {
          console.error(error);
        }
      }
      fetchLikeState();
    }if(isLike === true){
      async function fetchDeleteLikeState() {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get("http://localhost:8080/post/heart/delete?postId=" + postId);
          setIsLike(false);
        } catch (error) {
          console.error(error);
        }
      }
      fetchDeleteLikeState();
    }
  };

  const handleScrap = () => {
    if(isStar === false){
      async function fetchScrapState() {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get("http://localhost:8080/post/scrap/insert?postId=" + postId);
          setIsStar(true);
        } catch (error) {
          console.error(error);
        }
      }
      fetchScrapState();
    }if(isStar === true){
      async function fetchDeleteScrapState() {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get("http://localhost:8080/post/scrap/delete?postId=" + postId);
          setIsStar(false);
        } catch (error) {
          console.error(error);
        }
      }
      fetchDeleteScrapState();
    }
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
            <LikeAndStarBtn icon={isLike? FillLike : Like} text={isLike && 1} isLike={isLike} onClick={()=>handleLike()}/>
            <LikeAndStarBtn icon={isStar? FillStar : Star} text={'스크랩'} marginLeft={`2.05vw`} isStar={isStar} onClick={()=>handleScrap()}/>
          </c.Flex>
          <Br/>

          {/* 댓글 부분 */}
          <CommentCnt number={postInfo.commentCount}/>
          {postInfo.comments?.map((comment)=>(
            <div>
              <Comment
                postInfo={{ username: comment.writer, uploadtime: caclTime(comment.createdDate)}}
                comment={comment.content}/>
                {comment.children?.map((child)=>(
                  <Comment
                  paddingLeft={`8.17vw`}
                  recomment={true}
                  postInfo={{ username: child.writer, uploadtime: caclTime(comment.createdDate) }}
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
