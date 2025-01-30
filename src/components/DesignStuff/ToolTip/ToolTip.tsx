import { ReactNode } from "react";
import * as S from "./style";

export default function Tooltip({
	message,
	children,
	isVisible
}: {
	message: string;
	children: ReactNode;
	isVisible: boolean;
}) {
	return (
		<S.TooltipWrapper>
			<S.TooltipText isVisible={isVisible}>{message}</S.TooltipText>
			{children}
		</S.TooltipWrapper>
	);
}
