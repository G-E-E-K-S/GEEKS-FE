import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 8px;
`;

export const EditBtn = styled.div<{ isChange: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
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
