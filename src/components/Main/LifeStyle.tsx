import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as c from "../Common/CommonStyle";
import Typography from "../Common/Layouts/Typography";
import Row from "../Common/Layouts/Row";
import Chips from "../DesignStuff/Chips/Chips";

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;
const InputRadio = styled.input`
	display: none;
`;
const SubLifeStyle = styled(Row)<{ checked: boolean }>`
	white-space: nowrap;
	padding: 8px 16px;
	border-radius: 20px;
	border: 1px solid ${({ checked }) => (checked ? "#1A1A1A" : "#E2E2E2")};
	cursor: pointer;
`;
const Line = styled.div`
	width: 100%;
	height: 1px;
	background: #efefef;
	margin: 24px 0px;
`;
const OnlyMargin = styled.div`
	margin: 24px 0px;
`;

type LifeStyleOption = {
	[key: string]: boolean;
};

export default function LifeStyle({
	lifeStyleText,
	lifeStyle
}: {
	lifeStyleText: string;
	lifeStyle: LifeStyleOption[];
}) {
	const handleOptionChange = (key, value) => {
		// setSelectedOption(key);
		// lifeStyleSection(value);
	};

	lifeStyle.map((val) => {
		console.log(";;;", val);
	});

	return (
		<>
			<Typography typoSize="B2_medium" color="Gray500" style={{ marginBottom: "8px" }}>
				{lifeStyleText}
			</Typography>
			<Row gap={8} wrap="wrap">
				{lifeStyle.map((value) => (
					// <label>
					// 	<InputRadio
					// 		onClick={() => handleOptionChange(Object.keys(value)[0], Object.values(value)[0])}
					// 	/>
					// 	<SubLifeStyle
					// 		horizonAlign="center"
					// 		verticalAlign="center"
					// 		checked={Object.values(value)[0] === isState}
					// 	>
					// 		{Object.keys(value)}
					// 	</SubLifeStyle>
					// </label>
					<Chips type="mono" text={Object.keys(value)[0]}></Chips>
				))}
			</Row>
			{/* {noShowLine ? <OnlyMargin /> : <Line />} */}
		</>
	);
}
