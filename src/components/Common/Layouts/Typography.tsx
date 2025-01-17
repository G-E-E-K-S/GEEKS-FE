import { ReactNode } from "react";
import { jsx } from "react/jsx-runtime";

import * as S from "./style";
import { theme } from "../../../styles/theme";
import { Color } from "../../../types/color";

type TypographTypoType =
	| "H1"
	| "H2"
	| "H3"
	| "T1"
	| "T2_bold"
	| "T2_semibold"
	| "T3_bold"
	| "T3_semibold"
	| "T3_medium"
	| "T4_medium"
	| "T4_semibold"
	| "B1_bold"
	| "B1_semibold"
	| "B1_medium"
	| "B2_semibold"
	| "B2_medium"
	| "B3_semibold"
	| "B3_medium";

const TypoMap = {
	H1: S.H1,
	H2: S.H2,
	H3: S.H3,
	T1: S.T1,
	T2_bold: S.T2_bold,
	T2_semibold: S.T2_semibold,
	T3_bold: S.T3_bold,
	T3_semibold: S.T3_semibold,
	T3_medium: S.T3_medium,
	T4_medium: S.T4_medium,
	T4_semibold: S.T4_semibold,
	B1_bold: S.B1_bold,
	B1_semibold: S.B1_semibold,
	B1_medium: S.B1_medium,
	B2_semibold: S.B2_semibold,
	B2_medium: S.B2_medium,
	B3_semibold: S.B3_semibold,
	B3_medium: S.B3_medium
};

const Typography = ({
	color,
	typoSize,
	children,
	style,
	textAlign
}: {
	color?: Color;
	style?: {};
	typoSize: TypographTypoType;
	children: ReactNode;
	textAlign?: "center" | "left" | "right";
}) => {
	const Typo = TypoMap[typoSize];

	const Color = theme[color as keyof typeof theme];

	return jsx(Typo, { style: { color: Color, textAlign: textAlign, whiteSpace: "pre-wrap", ...style }, children });
};
export default Typography;
