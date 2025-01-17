import * as S from "./style";

interface ButtonProps {
	isNextPage?: boolean;
	text: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void; // 이벤트 타입 명시
}
export default function Button({ text, isNextPage, onClick }: ButtonProps) {
	return (
		<S.Button isNextPage={isNextPage} onClick={onClick}>
			{text}
		</S.Button>
	);
}
