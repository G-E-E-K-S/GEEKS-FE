import { useState } from "react";

import Typography from "../../Common/Layouts/Typography";
import * as S from "./style";

interface textFieldsType {
	placeholder?: string;
	text?: string;
	fixedText?: string;
	totalNum?: number;
	isError?: boolean;
	icon?: string;
	inputType?: "password" | "text" | "number";
	maxLength?: number;
	onChange: (value: string) => void;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function TextFields({
	placeholder,
	text,
	fixedText,
	totalNum,
	isError,
	icon,
	inputType,
	maxLength,
	onChange,
	onClick
}: textFieldsType) {
	const [isSelect, setIsSelect] = useState(false);
	return (
		<S.InputInfos isSelected={isSelect} isError={isError}>
			<S.Input
				placeholder={placeholder}
				onFocus={() => setIsSelect(true)}
				onBlur={() => setIsSelect(false)}
				value={text}
				type={inputType}
				maxLength={maxLength}
				onChange={(e) => onChange(e.target.value)}
			/>
			<Typography typoSize="T1" color="Gray400">
				{fixedText}
			</Typography>
			<img src={icon} onClick={onClick} />
		</S.InputInfos>
	);
}

{
	/* <InputInfos
// isSelected={
// 	isEmailSelected === "error" ? "#CB3D0B" : isEmailSelected === "false" ? "#EFEFEF" : "#ECAA00"
// }
> */
}
