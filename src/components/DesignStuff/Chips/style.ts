import styled from "styled-components";

export const ChipsWrapper = styled.div<{ type: "primary" | "outlined" | "mono" }>`
	width: max-content;
	height: 40px;
	padding: 8px 16px 8px 16px;
	border-radius: 20px;
	border: 1px solid ${({ type }) => (type === "mono" ? "#E2E2E2" : "#EFEFEF")};
	white-space: nowrap;
	opacity: 0px;
`;
