import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { Color } from "../../../types/color";

export const ButtonBoxWrapper = styled.div<{ backgroundColor: Color; height?: number }>`
	width: 100%;
	height: ${({ height }) => `${height}px`};
	padding: 20px 5.12vw;
	border-radius: 20px;
	background: ${({ backgroundColor }) => theme[backgroundColor]};
`;
