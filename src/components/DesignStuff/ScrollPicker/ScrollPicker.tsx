import Typography from "../../Common/Layouts/Typography";
import * as S from "./style";
import React from "react";

interface ScrollPickerProps {
	options: any;
	height: number;
	onOptionSelect: (option) => void; // 옵션 선택시 동작할 함수
}

export default function ScrollPicker ({
	options,
	height,
	onOptionSelect
}: ScrollPickerProps) {
	const handleSelect = (option) => {
		onOptionSelect(option);
	};

	return (
		<S.PickerWrapper $height={height}>
			{options.map((option, index) => (
				<S.PickerOption key={index} onClick={() => {handleSelect(option);}}>
					<Typography typoSize="T1" color="Gray700" textAlign="center">
						{option}
					</Typography>
				</S.PickerOption>
			))}
		</S.PickerWrapper>
	);
}