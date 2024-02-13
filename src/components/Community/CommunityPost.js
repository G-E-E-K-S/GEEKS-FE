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
  color: ${(props)=>props.isComment ? '#949494' : '#333'};
  font-size: ${(props)=>props.isComment ? '1rem': '1.125rem'};
  font-weight: ${(props)=>props.isComment ? '500' : '600'};
  margin-right: 3.07vw;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  max-width: 256px;
`;
const CommentNumIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: ${(props)=>props.isComment ? '#333' : '#525252'};
  font-size: ${(props)=>props.isComment ? '1.125rem' : '1rem'};
  font-style: normal;
  font-weight: ${(props)=>props.isComment ? '600' : '500'};
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
            <PostName isComment={props.isComment}>{props.postName}</PostName>
            {props.commentNum!==0 &&
            <c.FlexCenter>
              <CommentNumIcon src={CommentNumImg} />
              <CommentNum>{props.commentNum}</CommentNum>
            </c.FlexCenter>
            }
            {props.likeNum!==0 &&
              <c.FlexCenter>
                <LikeNumIcon src={LikeIcon}/>
                <LikeNum>{props.likeNum}</LikeNum>
              </c.FlexCenter>
            }
          </c.Flex>
          <PostContent isComment={props.isComment}>{props.postContent}</PostContent>
          <c.Flex>
            <UserInfo>
              {props.writeTime} {props.dot === false ? '' : '·'} {props.userName}
            </UserInfo>
          </c.Flex>
        </div>
        {props.postImg == null ? null : <PostImg src={process.env.REACT_APP_BUCKET_BASEURL+ props.postImg} />}
      </c.SpaceBetween>
      <Line />
    </ShowTotalPost>
  );
};
export default CommunityPost;
