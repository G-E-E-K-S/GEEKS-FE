import { useState } from "react";
import styled from "styled-components";

export const TooltipWrapper = styled.div`
	position: relative;
`;

export const TooltipText = styled.div<{ isVisible: boolean }>`
	position: absolute;
	bottom: 100%;
	left: -30px;
	transform: translateX(-50%);
	background-color: #4a4a4a;
	color: white;
	padding: 8px 12px;
	border-radius: 8px;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
	font-size: 14px;
	white-space: nowrap;

	&::after {
		content: "";
		position: absolute;
		top: 100%;
		right: 12px;
		transform: translateX(-50%);
		border-width: 6px;
		border-style: solid;
		border-color: #4a4a4a transparent transparent transparent;
	}
`;
