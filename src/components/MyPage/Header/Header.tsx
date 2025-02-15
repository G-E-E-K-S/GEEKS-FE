import * as S from "./style";
import GoBack from "../../Common/GoBack";
import Typography from "../../Common/Layouts/Typography";

export default function Header({
	title,
	hasDone,
	isChange,
	buttonName,
	onClick
}: {
	title: string;
	hasDone?: boolean;
	isChange?: boolean;
	buttonName?: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}) {
	return (
		<S.TotalHeader gap={8} verticalAlign="center" horizonAlign="distribute">
			<GoBack />
			<Typography typoSize="H3" color="Gray800">
				{title}
			</Typography>
			{hasDone && (
				<S.EditBtn horizonAlign="center" verticalAlign="center" onClick={onClick} isChange={isChange}>
					{buttonName}
				</S.EditBtn>
			)}
		</S.TotalHeader>
	);
}
