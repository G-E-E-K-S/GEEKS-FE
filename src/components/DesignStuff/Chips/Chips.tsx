import Typography from "../../Common/Layouts/Typography";
import * as S from "./style";

interface ChipsPropsType {
	type?: "primary" | "outlined" | "mono";
	text: string;
	isSelected?: boolean;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function Chips({ type, text, isSelected, onClick }: ChipsPropsType) {
	return (
		<S.ChipsWrapper isSelected={isSelected} onClick={onClick}>
			<Typography typoSize="T4_semibold" color="Gray700">
				{text}
			</Typography>
		</S.ChipsWrapper>
	);
}
