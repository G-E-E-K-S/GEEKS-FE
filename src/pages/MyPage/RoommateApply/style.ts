import styled from "styled-components";
import Row from "../../../components/Common/Layouts/Row";
import Column from "../../../components/Common/Layouts/Column";

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

export const FinRoommateBtn = styled.div`
	border: 1px solid #e2e2e2;
	padding: 14px 20px 14px 20px;
	border-radius: 12px;
	height: 52px;
	width: max-content;
	display: flex;
	margin: 0 auto;
	margin-top: 20px;
`;
export const FindRoommateIcon = styled.img`
	width: 24px;
	height: 24px;
	margin-right: 8px;
	display: flex;
	align-items: center;
`;

export const CancleBtn = styled(Row)`
	border-radius: 8px;
	border: 1px solid #e2e2e2;
	background: #fff;
	height: 52px;
	cursor: pointer;
	padding: 0 4.1vw;
	margin-top: 16px;
`;

export const DeletMainIcon = styled.img`
	width: 56px;
	height: 56px;
	margin-bottom: 20px;
`;

export const CloseIcon = styled.img`
	width: 28px;
	height: 28px;
	cursor: pointer;
	margin-left: 2.17vw;
`;
export const SuccessGif = styled.img`
	position: absolute;
	width: 157px;
	height: 157px;
	top: -133px;
`;

export const OpponentProfileBox = styled(Column)`
	width: 100%;
	border-radius: 12px;
	margin-top: 32px;
`;
export const ProfileImg = styled.img`
	width: 56px;
	height: 56px;
	border-radius: 50%;
`;

export const OkBtn = styled.div`
	width: 100%;
	height: 56px;
	border-radius: 12px;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffc700;
	color: #1a1a1a;
	margin-top: 32px;
`;

export const ReceiveBtn = styled(Row)<{ isAccept: boolean }>`
	width: calc((100% - 2.05vw) / 2);
	height: 56px;
	border-radius: 12px;
	border: ${({ isAccept }) => !isAccept && "1px solid #e2e2e2"};
	background: ${({ isAccept }) => (isAccept ? "#FFC700" : "#fff")};
	cursor: pointer;
	margin-right: ${({ isAccept }) => (isAccept ? null : "2.05vw")};
`;
