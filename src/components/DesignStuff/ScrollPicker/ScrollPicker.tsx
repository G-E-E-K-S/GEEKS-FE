import Typography from "../../Common/Layouts/Typography";
import * as S from "./style";
import React, { ReactNode } from "react";

interface ScrollPickerProps<TId extends string | number, TOption extends ReactNode | string | number> {
	options: { id: TId; option: TOption }[];
	height: number;
	onOptionSelect: (optionId: TId) => void; // 옵션 선택시 동작할 함수
}

export default function ScrollPicker<TId extends string | number, TOption extends ReactNode | string | number> ({
	options,
	height,
	onOptionSelect
}: ScrollPickerProps<TId, TOption>) {
	const handleSelect = (optionId: TId) => {
		onOptionSelect(optionId);
	};

	return (
		<S.PickerWrapper $height={height}>
			{options.map((option) => (
				<S.PickerOption key={option.id} onClick={() => {handleSelect(option.id);}}>
					<Typography typoSize="T1" color="Gray700" textAlign="center">
						{option.option}
					</Typography>
				</S.PickerOption>
			))}
		</S.PickerWrapper>
	);
}