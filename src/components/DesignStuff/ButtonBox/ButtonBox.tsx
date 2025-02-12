import { ReactNode } from "react";

import { Color } from "../../../types/color";
import * as S from "./style";

interface ButtonBoxProps {
	backgroundColor: Color;
	children: ReactNode;
	height?: number;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function ButtonBox({ backgroundColor, children, height, onClick }: ButtonBoxProps) {
	return (
		<S.ButtonBoxWrapper backgroundColor={backgroundColor} height={height} onClick={onClick}>
			{children}
		</S.ButtonBoxWrapper>
	);
}
