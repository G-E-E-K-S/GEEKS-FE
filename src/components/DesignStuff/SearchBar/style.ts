import styled from "styled-components";

export const InputBox = styled.div<{ isFocus: boolean }>`
	width: 90%;
	border-radius: 8px;
	background: #f7f7f7;
	padding: 10px 3.07vw;
	display: flex;
	align-items: center;

	border: ${({ isFocus }) => (isFocus ? "1px solid #ecaa00" : "1px solid #F7F7F7")};
`;

export const InputForm = styled.input`
	border: none;
	outline: none;
	background: #f7f7f7;
	color: #333;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	margin-left: 8px;
`;
