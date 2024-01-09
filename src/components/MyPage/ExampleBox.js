import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import profileImg from "../../assets/img/MyPage/basicProfile.svg";
import save from "../../assets/img/MyPage/save.svg";
const ExampleBoxTotal = styled.div`
position: relative;
  width: 100%;
  height: 264px;
  border-radius: 12px;
  background: #f7f7f7;
  padding: 20px;
  margin-top: 25px;
  &::before {
    content: '';
	position: absolute;
	top: 0;
	left: 25.5px;
	border: 23px solid transparent;
	border-bottom-color: #F7F7F7;
	border-top: 0;
	margin-top: -10px;
  }
`;
const ExampleText = styled.div`
  color: #707070;
  font-size: ${(props) => (props.isFirst ? "14px" : "12px")};
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  white-space: pre-wrap;
`;
const ShowExampleBox = styled.div`
  width: 100%;
  height: 134px;
  border-radius: 12px;
  background: #fff;
  margin: 2.36vh 0px;
  padding: 20px 16px;
`;
const ExampleProfile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;
const ExampleNickName = styled.div`
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;
const ExampleInfo = styled.div`
  color: #949494;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-top: 4px;
`;
const ExampleIntroduce = styled.div`
  border-radius: 8px;
  border: 1px solid #ecaa00;
  background: #f7f7f7;
  display: flex;
  width: 238px;
  padding: 10px 16px;
  margin-top: 16px;
  align-items: center;
  margin-right: 8px;
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
const ExampleSave = styled.img`
  margin-top: 21px;
  width: 28px;
  height: 28px;
`;
const ExampleBox = () => {
  <ExampleBoxTotal>
    <ExampleText isFirst={true}>
      ‘룸메이트 찾기’ 프로필에 적힐 문장을 적어주세요.
    </ExampleText>
    <ShowExampleBox>
      <c.Flex>
        <ExampleProfile src={profileImg} />
        <div>
          <ExampleNickName>긱스관리자</ExampleNickName>
          <ExampleInfo>커뮤니케이션디자인전공 · 20학번</ExampleInfo>
        </div>
      </c.Flex>
      <c.Flex>
        <ExampleIntroduce>늦게 일어나는 편이에요~</ExampleIntroduce>
        <ExampleSave src={save} />
      </c.Flex>
    </ShowExampleBox>
    <ExampleText isFirst={false}>
      {`내가 누군지, 어떤 습관을 지녔는지 등 나에 대한 설명을 적으면\n더 빠르게 룸메이트를 찾을 수 있어요!`}
    </ExampleText>
  </ExampleBoxTotal>
};

export default ExampleBox;
