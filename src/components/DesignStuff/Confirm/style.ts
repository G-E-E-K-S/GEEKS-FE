import styled from "styled-components";
import { Color } from "../../../types/color";
import Row from "../../Common/Layouts/Row";

export const ConfirmBackground = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0.5;
	z-index: 20;
`;

export const Confirm = styled.div`
	width: 82%;
	max-width: 400px;
	padding: 20px;
	background-color: #fff;
	z-index: 21;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

//TODO : 버튼 공통 컴포넌트로 빼기
export const Button = styled(Row)<{ color: Color }>`
	background-color: ${({ color, theme }) => theme[color]};
	width: 100%;
	height: 64px;
	border-radius: 12px;
`;
