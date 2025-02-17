import { useState } from "react";

import Typography from "../../Common/Layouts/Typography";
import * as S from "./style";

interface textFieldsType {
	placeholder?: string;
	text?: string;
	fixedText?: string;
	inputLen?: number;
	totalNum?: number;
	isError?: boolean;
	icon?: string;
	inputType?: "password" | "text" | "number";
	maxLength?: number;
	pageType?: "myPage";
	onChange: (value: string) => void;
	onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default function TextFields({
	placeholder,
	text,
	fixedText,
	inputLen,
	totalNum,
	isError,
	icon,
	inputType,
	maxLength,
	pageType,
	onChange,
	onClick
}: textFieldsType) {
	const [isSelect, setIsSelect] = useState(false);
	return (
		<>
			<S.InputInfos isSelected={isSelect} isError={isError}>
				<S.Input
					placeholder={placeholder}
					onFocus={() => setIsSelect(true)}
					onBlur={() => setIsSelect(false)}
					value={text}
					type={inputType}
					maxLength={maxLength}
					onChange={(e) => onChange(e.target.value)}
					pageType={pageType}
				/>
				<Typography typoSize="T1" color="Gray400">
					{fixedText}
				</Typography>
				<img src={icon} onClick={onClick} />
			</S.InputInfos>
			{totalNum && (
				<Typography typoSize="B2_medium" color="Gray400" style={{ marginTop: "8px" }}>
					{inputLen}/{totalNum}
				</Typography>
			)}
		</>
	);
}

{
	/* <InputInfos
// isSelected={
// 	isEmailSelected === "error" ? "#CB3D0B" : isEmailSelected === "false" ? "#EFEFEF" : "#ECAA00"
// }
> */
}
