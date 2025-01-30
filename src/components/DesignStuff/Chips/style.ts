import styled from "styled-components";

export const ChipsWrapper = styled.div<{ isSelected?: boolean }>`
	width: max-content;
	height: 40px;
	padding: 8px 16px 8px 16px;
	border-radius: 20px;
	border: 1px solid ${({ isSelected }) => (isSelected ? "#1A1A1A" : "#E2E2E2")};
	white-space: nowrap;
`;
