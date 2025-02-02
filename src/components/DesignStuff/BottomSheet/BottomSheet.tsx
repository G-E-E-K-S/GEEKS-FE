import { ReactNode } from "react";

import * as S from "./style";

export default function BottomSheet({
	height,
	children,
	isOpen
}: {
	height: string;
	children: ReactNode;
	isOpen?: boolean;
}) {
	return (
		<>
			<S.ModalBackground isOpen={isOpen} />
			<S.TotalBottomSheet height={height} isOpen={isOpen}>
				{children}
			</S.TotalBottomSheet>
		</>
	);
}
