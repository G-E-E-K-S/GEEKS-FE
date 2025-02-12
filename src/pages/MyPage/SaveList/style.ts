import styled from "styled-components";

export const Button = styled.div<{ isDone: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 4.73vh;
	padding: 0.94vh 3.07vw;
	border-radius: 8px;
	background: ${({ isDone }) => (isDone ? "#FFC700" : "#efefef")};
`;

export const EditImg = styled.img`
	cursor: pointer;
	width: 28px;
	height: 28px;
	margin-top: 8px;
`;
