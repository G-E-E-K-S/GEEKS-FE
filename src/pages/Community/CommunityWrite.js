import React, { useState } from "react";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/MyPage/Header";
import styled from "styled-components";
import "moment/locale/ko";

const Menu = styled.div`
  width: 100%;
  display: flex;
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
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`커뮤니티 작성 내역`} />
        <Menu>
          <SubMenu isSelect={selectMenu === 'post'} onClick={()=>setSelectMenu('post')}>{`글`}</SubMenu>
          <SubMenu isSelect={selectMenu === 'comment'} onClick={()=>setSelectMenu('comment')}>{`댓글`}</SubMenu>
        </Menu>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default CommunityWrite;
