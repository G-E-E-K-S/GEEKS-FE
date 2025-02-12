import styled from "styled-components";
import Row from "../../../components/Common/Layouts/Row";

export const ApplyList = styled(Row)<{ isChoose: boolean; isLeft: boolean }>`
	position: relative;
	width: calc(100% / 2);
	height: 6.16vh;
	color: ${({ isChoose }) => (isChoose ? "#333" : "#b7b7b7")};
	cursor: pointer;
	transition: color 0.3s ease-in-out;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #333;

		transform: ${({ isChoose, isLeft }) =>
			isChoose ? "translateX(0)" : isLeft ? "translateX(-100%)" : "translateX(100%)"};
		opacity: ${({ isChoose }) => (isChoose ? "1" : "0")};
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
	}
`;

export const Notice = styled.div`
	background-color: #fafafa;
	padding: 14px 20px 14px 20px;
	width: 100vw;
	margin-left: calc(-50vw + 50%);
	margin-bottom: 24px;
`;
