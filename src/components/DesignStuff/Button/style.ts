import styled from "styled-components";

export const Button = styled.div<{ isNextPage?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 10.17vh;
	width: 89.74vw;
	height: 64px;
	z-index: 15;
	background-color: ${({ isNextPage }) => (isNextPage ? "#FFC700" : "#F7F7F7")};
	pointer-events: ${({ isNextPage }) => (isNextPage ? "auto" : "none")};
	border-radius: 12px;

	color: ${({ isNextPage }) => (isNextPage ? "#333" : "#B7B7B7")};
	text-align: center;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 24px;
	cursor: pointer;
	&:active {
		background-color: ${({ isNextPage }) => (isNextPage ? "#ecaa00" : "transparent")};
	}
`;
