import styled from "styled-components";
import Column from "../../Common/Layouts/Column";

export const TotalProfile = styled.div<{ activeCheck?: boolean; isMe?: boolean }>`
	width: 100%;
	border-radius: ${({ isMe }) => !isMe && "12px"};
	background: ${({ activeCheck }) => (activeCheck ? "#FFF4CD" : "#fff")};
	border: 1px solid ${({ activeCheck }) => (activeCheck ? "#ECAA00" : "transparent")};
	padding: ${({ isMe }) => !isMe && "14px 5.12vw"};
	overflow-x: auto;
`;
export const Smoking = styled(Column)`
	width: 53px;
	height: 24px;
	border-radius: 6px;
	background: #efefef;
	padding: 4px, 8px, 4px, 8px;
	margin-left: 8px;
	margin-bottom: 2px;
`;
export const Intro = styled.div`
	color: #333;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px; /* 128.571% */
	border-radius: 8px;
	background: #f7f7f7;
	padding: 8px 3.07vw;
	width: 100%;
`;

export const Edit = styled.div`
	padding: 1.41vh 5.12vw;
	border-radius: 8px;
	border: 1px solid #e2e2e2;
	cursor: pointer;
`;
