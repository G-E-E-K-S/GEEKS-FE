import styled from "styled-components";
import Row from "../../Common/Layouts/Row";

export const ToggleBtn = styled(Row)<{ isToggle: boolean }>`
	width: 64px;
	height: 32px;
	border-radius: 24px;
	padding: 4px 5px;
	border: 1px solid ${({ isToggle }) => (isToggle ? "#FEE384" : "#EFEFEF")};
	cursor: pointer;
	background-color: ${({ isToggle }) => (isToggle ? "#FFF4CD" : "#EFEFEF")};
	position: relative;

	transition: all 0.3s ease-in-out;
`;
export const Circle = styled.div<{ isToggle: boolean }>`
	background-color: ${({ isToggle }) => (isToggle ? "#FFC700" : "#949494")};
	width: 24px;
	height: 24px;
	border-radius: 50%;
	position: absolute;
	right: 5px;
	transition: all 0.3s ease-in-out;
	${({ isToggle }) =>
		isToggle &&
		`
        transform: translate(-30px, 0);
        transition: all 0.5s ease-in-out;
    `}
`;
