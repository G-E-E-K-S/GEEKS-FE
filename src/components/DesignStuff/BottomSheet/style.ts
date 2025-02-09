import styled from "styled-components";

export const ModalBackground = styled.div<{ isOpen?: boolean }>`
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
	transition: transform 0.3s ease;
	visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

export const TotalBottomSheet = styled.div<{ height: string; isOpen?: boolean }>`
	z-index: 20;
	position: fixed;
	width: 100vw;
	left: 50%;
	bottom: 0;
	height: ${({ height }) => `${height}`};
	border-radius: 20px 20px 0px 0px;
	padding: 24px 20px 0 20px;
	background: #fff;
	overflow-y: auto;
	overflow-x: hidden;
	transform: translateX(-50%) translateY(${({ isOpen }) => (isOpen ? "0" : "100%")});
	transition: transform 0.3s ease;
	&::-webkit-scrollbar {
		display: none;
	}
`;
