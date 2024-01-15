import React from "react";
import styled from "styled-components";

const TotalPostContent = styled.div`
  margin-top: 21px;
`;
const ContentTitle = styled.div`
  color: #333;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const Content = styled.div`
  color: #525252;
  font-size: 1rem;
  line-height: 24px; /* 150% */
  white-space: pre-wrap;
  margin-top: 12px;
`;
const PostContent = (props) => {
  return (
    <TotalPostContent>
      <ContentTitle>{props.title}</ContentTitle>
      <Content>{props.content}</Content>
    </TotalPostContent>
  );
};
export default PostContent;
