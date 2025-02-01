import * as S from "./style";

interface ToggleProps {
	isToggle: boolean;
	onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function Toggle({ isToggle, onClick }: ToggleProps) {
	return (
		<>
			<S.ToggleBtn horizonAlign="center" verticalAlign="center" isToggle={isToggle} onClick={onClick}>
				<S.Circle isToggle={isToggle} />
			</S.ToggleBtn>
		</>
	);
}
