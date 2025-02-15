import React from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import ColHeaderMenu from "../../components/Common/ColHeaderMenu";
import GoBack from "../../components/Common/GoBack";
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

const RecommendLifeStyle = styled.div`
	color: #333;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
	white-space: pre-wrap;
	margin-top: 20px;
	margin-bottom: 34px;
`;
const LiveRule = () => {
	return (
		<c.Totalframe main={true} background={"#FAFAFA"}>
			<c.ScreenComponent>
				<c.Header backgroundColor="Background">
					<ColHeaderMenu>
						<RecommendLifeStyle>{`긱스가 추천하는\n기숙사 생활 규칙이에요`}</RecommendLifeStyle>
					</ColHeaderMenu>
				</c.Header>
				<LiveRuleCategory
					ruleImg={Window}
					ruleText={`환기는`}
					Condition1={`필요할 때만`}
					Condition2={`하루에 한 번씩`}
				/>
				<LiveRuleCategory
					ruleImg={Food}
					ruleText={`밥은`}
					Condition1={`밖에서 먹고 와 줘`}
					Condition2={`안에서 먹어도 돼`}
				/>
				<LiveRuleCategory
					ruleImg={Time}
					ruleText={`기숙사 들어올 때는`}
					Condition1={`연락해줘`}
					Condition2={`연락은 필요없어`}
				/>
				<LiveRuleCategory
					ruleImg={Diffuser}
					ruleText={`디퓨저 사용은`}
					Condition1={`미리 말해 줘`}
					Condition2={`아무거나 괜찮아`}
				/>
				<LiveRuleCategory
					ruleImg={Sleep}
					ruleText={`잘때`}
					Condition1={`불 켜도 괜찮아`}
					Condition2={`스탠드 조명 켜줘`}
				/>
				<LiveRuleCategory
					ruleImg={Call}
					ruleText={`전화 통화는`}
					Condition1={`밖에서 해 줘`}
					Condition2={`안에서 해도 돼`}
				/>
				<LiveRuleCategory
					ruleImg={Phone}
					ruleText={`휴대폰 사용은`}
					Condition1={`이어폰 껴 줘`}
					Condition2={`이어폰 안 껴도 돼`}
				/>
			</c.ScreenComponent>
		</c.Totalframe>
	);
};
export default LiveRule;
