import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import SuggestionIcon from "../../assets/img/Suggestion/suggestionMainIcon.svg";

const PostTotalTitle = styled.div`
  margin-bottom: 4px;
  margin-top: 20px;
  display: flex;
`;
const PostTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #333333;
`;
const PostContent = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #525252;
  margin-bottom: 8px;
`;
const PostTime = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 20px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #efefef;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  margin-left: 12px;
  margin-right: 3px;
`;
const IconNum = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  color: #ec5062;
`;
const SuggestionPost = (props) => {
  return (
    <>
      <PostTotalTitle>
        <PostTitle>{props.title}</PostTitle>
        {props.cnt && (
          <Icons>
            <Icon src={SuggestionIcon} />
            <IconNum>{props.cnt}</IconNum>
          </Icons>
        )}
      </PostTotalTitle>
      <PostContent>{props.content}</PostContent>
      <PostTime>{props.time}</PostTime>
      <Line />
    </>
  );
};
export default SuggestionPost;
