import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import GoBack from "../../components/Join/GoBack";
import SubTitle from "../../components/Main/SubTitle";
import LiveRuleCategory from "../../components/Main/LiveRuleCategory";
import Window from "../../assets/img/Home/window.svg";
import Food from "../../assets/img/Home/food.svg";
import Clean from "../../assets/img/Home/clean.svg";
import Time from "../../assets/img/Home/time.svg";
import Diffuser from "../../assets/img/Home/diffuser.svg";
import Sleep from "../../assets/img/Home/sleep.svg";
import Call from "../../assets/img/Home/call.svg";
import Phone from "../../assets/img/Home/phone.svg";

const SubTitles = styled.div`
    margin-top: 2.36vh;
    margin-bottom: 4.38vh;
`;
const LiveRule = () => {
  return (
    <c.Totalframe main={true}>
      <c.ScreenComponent>
        <GoBack />
        <SubTitles>
            <SubTitle subtitle={`긱스가 추천하는\n기숙사 생활 규칙이에요`}/>
        </SubTitles>
        <LiveRuleCategory ruleImg={Window} ruleText={`환기는`} Condition1={`하루에 한번씩 무조건`} Condition2={`필요할 때만`}/>
        <LiveRuleCategory ruleImg={Food} ruleText={`밥은`} Condition1={`밖에서 먹고 와줘`} Condition2={`안에서 먹어도 괜찮아`}/>
        <LiveRuleCategory ruleImg={Clean} ruleText={`청소는`} Condition1={`주기적으로`} Condition2={`필요할 때만`}/>
        <LiveRuleCategory ruleImg={Time} ruleText={`기숙사 들어올 때는`} Condition1={`연락해줘`} Condition2={`연락은 필요없어`}/>
        <LiveRuleCategory ruleImg={Diffuser} ruleText={`디퓨저 사용은`} Condition1={`아무거나 괜찮아`} Condition2={`동의를 얻고 사용해줘`}/>
        <LiveRuleCategory ruleImg={Sleep} ruleText={`잘때`} Condition1={`불 켜도 괜찮아`} Condition2={`스탠드 조명 켜줘`}/>
        <LiveRuleCategory ruleImg={Call} ruleText={`전화 통화는`} Condition1={`밖에서 해줘`} Condition2={`안해서 해도 괜찮아`}/>
        <LiveRuleCategory ruleImg={Phone} ruleText={`휴대폰 사용은`} Condition1={`이어폰 껴 줘`} Condition2={`이어폰 안 껴도 괜찮아`}/>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};
export default LiveRule;
