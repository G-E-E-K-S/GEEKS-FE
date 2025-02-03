import styled from "styled-components";

import Row from "../../../components/Common/Layouts/Row";

export const BottomMenu = styled(Row)`
	width: 100%;
	/* height: 10.625rem; */
	padding: 20.17px 5.12vw 20.5px 5.12vw;
	border-top: 1px solid #efefef;
	position: fixed;
	bottom: 0;
	background-color: #fff;
`;

export const Reset = styled(Row)`
	border-radius: 12px;
	padding: 16px 5.512vw;
	height: max-content;
	margin-right: 12px;
	background: #efefef;
	height: 56px;
	white-space: nowrap;
	cursor: pointer;
`;
export const ResetImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 4px;
`;
export const ApplyBtn = styled(Row)<{ isApply: boolean }>`
	border-radius: 12px;
	background-color: ${({ theme, isApply }) => (isApply ? theme.Yellow500 : theme.Gray50)};
	width: 100%;
	padding: 16px 0;
	height: 56px;
	height: max-content;
	pointer-events: ${({ isApply }) => (isApply ? "default" : "none")};
`;
