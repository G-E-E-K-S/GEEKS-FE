import styled from "styled-components";
import Row from "../../../components/Common/Layouts/Row";

export const ApplyList = styled(Row)<{ isChoose: boolean }>`
	width: calc(100% / 2);
	height: 6.16vh;
	border-bottom: ${({ isChoose }) => (isChoose ? "2px solid #333" : "1px solid #efefef")};
	color: ${({ isChoose }) => (isChoose ? "#333" : "#b7b7b7")};
	cursor: pointer;
`;

export const Notice = styled.div`
	background-color: #fafafa;
	padding: 14px 20px 14px 20px;
	width: 100vw;
	margin-left: calc(-50vw + 50%);
`;
