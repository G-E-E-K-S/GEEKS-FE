import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import CommentNumImg from "../../assets/img/Community/commentNum.svg";
import LikeIcon from "../../assets/img/Home/mainLike.svg";
const ShowTotalPost = styled.div`
  width: 100%;
  padding-bottom: 20px;
  cursor: pointer;
  padding: ${(props)=>props.padding};
`;
const PostName = styled.div`
  color: #333;
  font-size: 1.125rem;
  font-weight: 600;
  margin-right: 3.07vw;
`;
const CommentNumIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 1px;
`;
const LikeNumIcon = styled(CommentNumIcon)`
  margin-left: 8px;
`;
const CommentNum = styled.div`
  color: #2b75cb;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 3px;
  margin-top: 1px;
`;
const LikeNum = styled(CommentNum)`
  color: #EC5062;
`;
const PostContent = styled.div`
  color: #525252;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-top: 1px;
`;
const UserInfo = styled.div`
  color: #b7b7b7;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  margin-top: 8px;
`;
const Line = styled.div`
  height: 1px;
  background-color: #efefef;
  margin-top: 2.36vh;
`;
const PostImg = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 12px;
`;
const CommunityPost = (props) => {
  return (
    <ShowTotalPost onClick={props.onClick} padding={props.padding}>
      <c.SpaceBetween>
        <div>
          <c.Flex>
            <PostName>{props.postName}</PostName>
            <CommentNumIcon src={CommentNumImg} />
            <CommentNum>{props.commentNum}</CommentNum>
            {props.isLike &&
              <>
                <LikeNumIcon src={LikeIcon}/>
                <LikeNum>{props.likeNum}</LikeNum>
              </>
            }
            
          </c.Flex>
          <PostContent>{props.postContent}</PostContent>
          <c.Flex>
            <UserInfo>
              {props.writeTime} · {props.userName}
            </UserInfo>
          </c.Flex>
        </div>
        {props.postImg == null ? null : <PostImg src={'https://seumu-s3-bucket.s3.ap-northeast-2.amazonaws.com/'+ props.postImg} />}
      </c.SpaceBetween>
      <Line />
    </ShowTotalPost>
  );
};
export default CommunityPost;
