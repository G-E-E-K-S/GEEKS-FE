import Typography from "../../Common/Layouts/Typography";
import * as S from "./style";

interface ChipsPropsType {
	type: "primary" | "outlined" | "mono";
	text: string;
}
export default function Chips({ type, text }: ChipsPropsType) {
	return (
		<S.ChipsWrapper type={type}>
			<Typography typoSize="T4_semibold" color="Gray700">{text}</Typography>
		</S.ChipsWrapper>
	);
}
