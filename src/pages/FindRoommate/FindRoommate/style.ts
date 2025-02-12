import styled from "styled-components";

export const ConditionScroll = styled.div`
	display: flex;
	overflow-x: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export const BlurIcon = styled.img`
	width: 100vw;
	margin-left: calc(-50vw + 50%);
	position: relative;
	opacity: 0.7;
`;
export const EnrollLifeStyle = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;
export const EnroolLifeStyleBtn = styled.div`
	width: max-content;
	padding: 16px 14.23vw;
	border-radius: 12px;
	background: #ffc700;
	color: #333;
	text-align: center;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 24px;
	margin: 0 auto;
	margin-top: 16px;
`;
