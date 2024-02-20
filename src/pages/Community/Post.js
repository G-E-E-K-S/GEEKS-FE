import React, { useEffect, useState, useRef } from "react";
import API from "../../axios/BaseUrl";
import moment from "moment";
import "moment/locale/ko";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import PostInfo from "../../components/Community/PostInfo";
import PostContent from "../../components/Community/PostContent";
import LikeAndStarBtn from "../../components/Community/LikeAndStarBtn";
import CommentCnt from "../../components/Community/CommentCnt";
import Comment from "../../components/Community/Comment";
import Popup from "../../components/Common/Popup";
import Modal from "../../components/Common/Modal";
import BottomSheet from "../../components/Common/BottomSheet";
import Dot from "../../assets/img/Community/dots.svg";
import Like from "../../assets/img/Community/like.svg";
import FillLike from "../../assets/img/Community/fillLike.svg";
import Star from "../../assets/img/Community/star.svg";
import FillStar from "../../assets/img/Community/fillStar.svg";
import Send from "../../assets/img/Chat/send.svg";
import CheckBox from "../../assets/img/Community/checkBox.svg";
import FillCheckBox from "../../assets/img/Community/fillCheckPost.svg";
import Loading from "../Loading";

const InputCommentBox = styled.div`
  height: 13.26vh;
  padding: 14px 2.36vw;
  border-top: 1px solid #efefef;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 3;
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
const MenuBox = styled.div`
  padding: 20px 0;
  color: ${(props) => (props.Report ? "#CB3D0B" : "#525252")};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
const CloseBtn = styled.div`
  padding: 16px 0;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  background: #fff;
  text-align: center;
  color: #333;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 94px;
`;
const Anonymous = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AnonymousBox = styled.img`
  width: 18px;
  height: 18px;
`;
const AnonymousTxt = styled.div`
  color: #707070;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 3px;
  margin-right: 3.07vw;
  width: max-content;
`;
const InputComment = styled.input`
  outline: none;
  border: none;
  background-color: #f7f7f7;
  width: 100%;
  font-size: 1rem;
  font-weight: medium; 
  color: #333;
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
  overflow: hidden;
  object-fit: contain;
  margin-top: 10px;
`;
const ModalTxt = styled.div`
  color: #333;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
`;
const ModalBtn = styled.div`
  display: flex;
  margin-top: 20px;
`;
const NoBtn = styled.div`
  padding: 16px 0px;
  color: #707070;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  border-radius: 12px;
  background: #f7f7f7;
  width: 134px;
  margin-right: 11px;
`;
const YesBtn = styled(NoBtn)`
  border-radius: 12px;
  background: #ffc700;
  color: #333;
  margin-left: 0px;
`;

const Post = () => {
  const [postInfo, setPostInfo] = useState("");
  const [isLike, setIsLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  const [isStar, setIsStar] = useState(false);
  const [parentId, setParentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [recommentUserName, setRecommentUserName] = useState(''); 
  const [commentId, setCommentId] = useState('');
  const [isAnonymity, setIsAnonymity] = useState(true);
  const [isCommentBts, setIsCommentBts] = useState(false);
  const [isBtsOpen, setIsBtsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [commentContent,setCommentContent] = useState('');
  const [handleCommentContent, setHandleCommentContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [commentWriterState, setCommentWriterState] = useState(false);
  const [nowFocus, setNowFocus] = useState(-1);
  const [showPopup, setShowPopup] = useState(false);
  const [commentInfo, setCommentInfo] = useState([]);

  const commentRef = useRef();
  let { postId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await API.get("/post/show?postId=" + postId);
        console.log(res.data);
        setLikeCnt(res.data.likeCount);
        setLoading(false);
        setIsActive(true);
        setPostInfo(res.data);
        setIsLike(res.data.heartState);
        setIsStar(res.data.scrapState);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, []);

  const UploadComment = () => {
    async function fetchPost() {
      try {
        if(commentRef.current.value.length !== 0 ){
          const res = await API.post("/post/comment", {
            postId: postId,
            parentId: parentId,
            content: commentRef.current.value,
            anonymity : isAnonymity
          });
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  };
  const caclTime = (uploadTime) => {
    moment.locale("ko"); // 언어를 한국어로 설정
    return moment(uploadTime).fromNow(`A`) + "전"; // 지금으로부터 계산
  };
  const handleLike = () => {
    if (isLike === false) {
      setLikeCnt(likeCnt+1);
      async function fetchLikeState() {
        try {
          const res = await API.get("/post/heart/insert?postId=" + postId);
          setIsLike(true);
        } catch (error) {
          console.error(error);
        }
      }
      fetchLikeState();
    }
    if (isLike === true) {
      setLikeCnt(likeCnt-1);
      async function fetchDeleteLikeState() {
        try {
          const res = await API.get("/post/heart/delete?postId=" + postId);
          setIsLike(false);
        } catch (error) {
          console.error(error);
        }
      }
      fetchDeleteLikeState();
    }
  };

  const handleScrap = () => {
    if (isStar === false) {
      async function fetchScrapState() {
        try {
          const res = await API.get("/post/scrap/insert?postId=" + postId);
          setIsStar(true);
        } catch (error) {
          console.error(error);
        }
      }
      fetchScrapState();
    }
    if (isStar === true) {
      async function fetchDeleteScrapState() {
        try {
          const res = await API.get("/post/scrap/delete?postId=" + postId);
          setIsStar(false);
        } catch (error) {
          console.error(error);
        }
      }
      fetchDeleteScrapState();
    }
  };
  
  const AddReComment = () => {
    setIsModalOpen(false);
    setNowFocus(commentInfo.nowFocus);
    setParentId(commentInfo.parentId);
    commentRef.current.focus();
  };

  const DeletePost = () => {
    async function fetchDeletePost() {
      try {
        const res = await API.post("/post/delete/" + postId);
        console.log(res)
        if(res.data == 'success') navigate('/community');
      } catch (error) {
        console.error(error);
      }
    }
    fetchDeletePost();
  }
  const DeleteComment = () => {
    async function fetchDeleteComment() {
      try {
        const res = await API.post("/post/delete/comment/" + commentId);
        console.log(res);
        if(res.data === 'success') window.location.reload();
        setIsCommentBts(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDeleteComment();
  }
  const EditComment = () => {
    if(commentRef.current.value.length === 0 ) return;
    async function fetchEditComment() {
      try {
        const res = await API.post("/post/modify/comment", {
          commentId: commentId,
          content: commentRef.current.value,
        });
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
    fetchEditComment();
  }
  const EditTempComment = () => {
    setIsEdit(true);
    setIsCommentBts(false);
    setHandleCommentContent(commentContent);
  }
  const handleCommentModal = (parentId, commentUserName, nowFocus) => {
    setIsModalOpen(true);
    setRecommentUserName(commentUserName);
    setCommentInfo({
      parentId: parentId,
      nowFocus: nowFocus
    })
  }
  const DeleteCommentBts = (commentId, commentWriterState, commentContent) => {
    setCommentWriterState(commentWriterState);
    setIsCommentBts(true);
    setCommentId(commentId);
    setCommentContent(commentContent);
  }
  const handleDeclaration = () => {
    setShowPopup(true);
    setIsBtsOpen(false)
  }
  const handleDeclarationComment = () => {
    setShowPopup(true);
    setIsCommentBts(false);
  }
  return (
    loading ? <Loading/> : (
      <c.Totalframe>
        <c.ScreenComponent navigation={true}>
          <c.SubScreen>
            <HeaderMenu>
              <img src={Dot} onClick={() => setIsBtsOpen(true)} />
            </HeaderMenu>
            <BottomSheet height={`max-content`} padding={`12px 20px 0 20px`} isOpen={isBtsOpen} interaction={true}>
                {postInfo?.writerState ? (
                  <>
                    <MenuBox onClick={()=>DeletePost()}>{`글 삭제하기`}</MenuBox>
                    {/* <MenuBox>{`글 수정하기`}</MenuBox> */}
                  </>
                ) : (
                  <MenuBox Report={true} onClick={()=>handleDeclaration()}>{`신고하기`}</MenuBox>
                )}
                <CloseBtn onClick={() => setIsBtsOpen(false)}>{`닫기`}</CloseBtn>
            </BottomSheet>
            <Popup
                message={`신고가 정상적으로 접수되었어요`}
                setShowPopup={setShowPopup}
                isShowPopup={showPopup}
                bottom={`8.5`}/>
            <PostInfo
              username={postInfo.writer === null ? "익명" : postInfo.writer}
              uploadtime={caclTime(postInfo.createdDate)}></PostInfo>
            <PostContent
              title={postInfo.title}
              content={postInfo.content}></PostContent>
            {postInfo.photoNames?.map((photo) => (
              <PostImg
                src={
                  process.env.REACT_APP_BUCKET_BASEURL + photo}/>
            ))}
            <c.Flex>
              <LikeAndStarBtn
                icon={isLike ? FillLike : Like}
                text={likeCnt !== 0 && likeCnt}
                isLike={isLike}
                onClick={() => handleLike()}/>
              <LikeAndStarBtn
                icon={isStar ? FillStar : Star}
                text={"스크랩"}
                marginLeft={`2.05vw`}
                isStar={isStar}
                onClick={() => handleScrap()}/>
            </c.Flex>
            <Br />

            {/* 댓글 부분 */}
            <CommentCnt number={postInfo.commentCount} />
            {postInfo.comments?.map((comment, index) => (
              <div>
                <Comment
                  recommentFocus={index === nowFocus}
                  isComment={true}
                  postInfo={{
                    username: comment.writer === null ? '익명' : comment.writer,
                    uploadtime: caclTime(comment.createdDate),
                  }}
                  comment={comment.deleted ? '삭제된 댓글입니다' : comment.content}
                  deleted={comment.deleted}
                  wirteChild={()=>handleCommentModal(comment.commentId, comment.writer, index)} 
                  deleteComment={()=> DeleteCommentBts(comment.commentId, comment.commentWriterState, comment.content)}/>
                {comment.children?.map((child) => (
                  <Comment
                    recomment={true}
                    deleted={child.deleted}
                    comment={child.deleted ? '삭제된 댓글입니다' : child.content}
                    postInfo={{
                      username: child.writer  === null ? '익명' : child.writer,
                      uploadtime: caclTime(child.createdDate),
                    }}
                    deleteComment={()=> DeleteCommentBts(child.commentId, child.commentWriterState, child.content)}/>
                ))}
              </div>
            ))}
            <BottomSheet height={`max-content`} padding={`12px 20px 0 20px`} isOpen={isCommentBts} interaction={true}>
                {commentWriterState ? (
                  <>
                    <MenuBox onClick={()=>DeleteComment()}>{`댓글 삭제하기`}</MenuBox>
                    <MenuBox onClick={()=>EditTempComment()}>{`댓글 수정하기`}</MenuBox>
                  </>
                ) : (
                  <MenuBox Report={true} onClick={()=>handleDeclarationComment()}>{`신고하기`}</MenuBox>
                )}
                <CloseBtn onClick={() => setIsCommentBts(false)}>{`닫기`}</CloseBtn>
            </BottomSheet>
          </c.SubScreen>
        </c.ScreenComponent>
        <InputCommentBox>
          <TotalInput>
            <Anonymous onClick={()=>setIsAnonymity(!isAnonymity)}>
              <AnonymousBox src={ isAnonymity ? FillCheckBox : CheckBox} />
              <AnonymousTxt>{`익명`}</AnonymousTxt>
            </Anonymous>
            <InputComment placeholder="댓글을 입력하세요" ref={commentRef} defaultValue={handleCommentContent} />
            <img src={Send} onClick={() => isEdit ? EditComment() : UploadComment()} />
            {/* 댓글 모달 */}
            {isModalOpen && (
              <Modal padding={`22px 20px`}>
                <ModalTxt>{recommentUserName === null ? '익명' : recommentUserName}{`님께 답글을 달까요?`}</ModalTxt>
                <ModalBtn>
                  <NoBtn onClick={() => setIsModalOpen(false)}>{`아니요`}</NoBtn>
                  <YesBtn onClick={() => AddReComment()}>{`네`}</YesBtn>
                </ModalBtn>
              </Modal>
            )}
            {isDeleteModalOpen && (
              <Modal padding={`22px 20px`}>
                <ModalTxt>{`댓글을 삭제할까요?`}</ModalTxt>
                <ModalBtn>
                  <NoBtn onClick={() => setIsDeleteModalOpen(false)}>{`아니요`}</NoBtn>
                  <YesBtn onClick={() => DeleteComment(false)}>{`네`}</YesBtn>
                </ModalBtn>
              </Modal>
            )}
          </TotalInput>
        </InputCommentBox>
      </c.Totalframe>
    )
  );
};

export default Post;
