import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";

const FindPostBox = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #EFEFEF;  
`;
const PostTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const PostDate = styled.div`
  font-size:  0.75rem
  font-weight: 500;
  line-height: 16px;
  text-align: right;
  color: #b7b7b7;
`;
const PostContent = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #707070;
  text-overflow: ellipsis;
`;
const FindPost = (props) => {
  let navigate = useNavigate();

  return (
    <FindPostBox onClick={()=>navigate(`/post/${props.postId}`)}>
      <c.SpaceBetween>
        <PostTitle>{props.title}</PostTitle>
        <PostDate>{props.date}</PostDate>
      </c.SpaceBetween>
      <PostContent>{props.content}</PostContent>
    </FindPostBox>
  );
};
export default FindPost;
