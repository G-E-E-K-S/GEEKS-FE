import styled from "styled-components";
import { Color } from "../../types/color";

export const Totalframe = styled.div<{ background?: string }>`
	// width: 390px;
	width: 100vw;
	min-height: calc(var(--vh, 1vh) * 100);
	height: -webkit-fill-available;
	height: fill-available;
	margin: 0 auto;
	overflow-y: auto;
	margin-top: env(safe-area-inset-top);
	margin-bottom: env(safe-area-inset-bottom);
	&::-webkit-scrollbar {
		display: none;
	}
	background: ${(props) => props.background};
`;

export const ScreenComponent = styled.div<{ navigation?: boolean }>`
	padding: 0px 5.12vw 24px 5.12vw;
	overflow-y: auto;
	user-select: none;
	touch-action: pan-y;
	height: ${({ navigation }) => (navigation ? "calc(100vh - 11.84vh)" : "100vh")};
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SubScreen = styled.div`
	// height: calc(100vh - 11.84vh);
`;

export const ScreenJoin = styled.div<{ email?: boolean }>`
	padding-top: ${({ email }) => (email ? "90px" : "13.86vh")};
	display: flex;
	flex-direction: column;
`;

export const Flex = styled.div`
	display: flex;
`;

export const SpaceBetween = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const DirectionCol = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.div<{ backgroundColor: Color | string }>`
	margin-bottom: 16px;
	position: sticky;
	top: 0px;
	padding: 52px 20px 0 20px;
	width: calc(100% + 42px);
	z-index: 10;
	margin-left: calc(-50vw + 50%);
	background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};
`;
