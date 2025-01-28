import { ReactNode } from "react";
import styled from "styled-components";

const TotalBottomSheet = styled.div<{ height: number; isOpen: boolean }>`
	z-index: 20;
	position: fixed;
	width: 100vw;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	height: ${({ height }) => `${height}vh`};
	border-radius: 20px 20px 0px 0px;
	padding: 24px 20px 0 20px;
	background: #fff;
	overflow-y: auto;
	overflow-x: hidden;
	${({ isOpen }) => (isOpen ? "transition: bottom 0.5s ease" : "transition: bottom 1.2s ease")}
	&::-webkit-scrollbar {
		display: none;
	}
`;

export default function BottomSheet({
	height,
	children,
	isOpen
}: {
	height: number;
	children: ReactNode;
	isOpen?: boolean;
}) {
	return (
		isOpen && (
			<>
				<ModalBackground />
				<TotalBottomSheet height={height} isOpen={isOpen}>
					{children}
				</TotalBottomSheet>
			</>
		)
	);
}

const ModalBackground = styled.div`
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
	transition: 0.3s ease;
`;
