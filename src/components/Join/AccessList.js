import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";

const AccessListTotal = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.isLast ? "35.76px" : "30px")};
`;
const Img = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: #d9d9d9;
`;
const AccessName = styled.div`
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
`;
const AccessDetail = styled.div`
  color: #707070;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 4px;
`;
const AccessList = (props) => {
  return (
    <AccessListTotal isLast={props.isLast}>
      <Img />
      <div>
        <AccessName>{props.accessName}</AccessName>
        <AccessDetail>{props.accessDetail}</AccessDetail>
      </div>
    </AccessListTotal>
  );
};
export default AccessList;
