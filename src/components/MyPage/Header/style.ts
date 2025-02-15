import styled from "styled-components";
import Row from "../../Common/Layouts/Row";

export const TotalHeader = styled(Row)`
	margin-bottom: 16px;
	margin-top: 8px;
`;

export const EditBtn = styled(Row)<{ isChange?: boolean }>`
	border-radius: 8px;
	height: 40px;
	width: 50px;
	background: ${({ isChange }) => (isChange ? "#FFC700" : "#efefef")};
	color: ${({ isChange }) => (isChange ? "#333" : "#949494")};
	font-size: 1rem;
	font-weight: 600;
	&:active {
		background: ${({ isChange }) => isChange && "#ECAA00"};
	}
`;
