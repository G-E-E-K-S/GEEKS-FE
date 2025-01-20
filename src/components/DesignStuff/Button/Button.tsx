import * as S from "./style";

interface ButtonProps {
	isNextPage?: boolean;
	text: string;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function Button({ text, isNextPage, onClick }: ButtonProps) {
	return (
		<S.Button isNextPage={isNextPage} onClick={onClick}>
			{text}
		</S.Button>
	);
}
