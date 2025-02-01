import Column from "../../Common/Layouts/Column";
import Typography from "../../Common/Layouts/Typography";
import * as S from "./style";

interface ConfirmProps {
	confirmName: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function Confirm({ confirmName, onClick }: ConfirmProps) {
	return (
		<>
			<S.ConfirmBackground />
			<S.Confirm>
				<Typography typoSize="T2_bold" color="Gray800" textAlign="center">
					{confirmName}
				</Typography>
				<Column gap={12}>
					<S.Button color="Yellow500" horizonAlign="center" verticalAlign="center" onClick={onClick}>
						<Typography typoSize="T3_semibold" color="Black">
							{"저장하기"}
						</Typography>
					</S.Button>
					<S.Button color="Gray200" horizonAlign="center" verticalAlign="center">
						<Typography typoSize="T3_semibold" color="Black">
							{"뒤로 돌아가기"}
						</Typography>
					</S.Button>
				</Column>
			</S.Confirm>
		</>
	);
}
