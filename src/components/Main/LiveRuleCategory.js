import React from "react";
import styled from "styled-components";

const TotalLiveRuleCategory = styled.div`
	margin-bottom: 4.97vh;
`;
const SubTitle = styled.div`
	display: flex;
	margin-bottom: 1.65vh;
`;
const RuleImg = styled.img`
	width: 28px;
	height: 28px;
	margin-right: 8px;
`;
const SubRuleText = styled.div`
	color: #333;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
`;
const Conditions = styled.div`
	display: flex;
	gap: 8px;
`;
const Condition = styled.div`
	width: calc(100% / 2);
	height: 60px;
	border-radius: 12px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #e2e2e2;

	color: #333;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px; /* 150% */
`;
const LiveRuleCategory = (props) => {
	return (
		<TotalLiveRuleCategory>
			<SubTitle>
				<RuleImg src={props.ruleImg} />
				<SubRuleText>{props.ruleText}</SubRuleText>
			</SubTitle>
			<Conditions>
				<Condition>{props.Condition1}</Condition>
				<Condition>{props.Condition2}</Condition>
			</Conditions>
		</TotalLiveRuleCategory>
	);
};
export default LiveRuleCategory;
