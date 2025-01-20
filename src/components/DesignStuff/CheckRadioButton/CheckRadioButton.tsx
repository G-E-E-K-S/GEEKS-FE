import Check from "../../../assets/img/Join/agreeCheck.svg";
import FillCheck from "../../../assets/img/Join/agreeFillCheck.svg";

interface checkRadioButtonProps {
	isChecked: boolean;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function CheckRadioButton({ isChecked, onClick }: checkRadioButtonProps) {
	return <img src={isChecked ? FillCheck : Check} onClick={onClick} />;
}
