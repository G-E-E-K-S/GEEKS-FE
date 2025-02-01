import * as S from "./style";
import GoBack from "../../Common/GoBack";
import Typography from "../../Common/Layouts/Typography";

export default function Header({ title }: { title: string }) {
	return (
		<S.TotalHeader gap={8} horizonAlign="center" verticalAlign="center">
			<GoBack />
			<Typography typoSize="H3" color="Gray800">
				{title}
			</Typography>
		</S.TotalHeader>
	);
}
