import React, { ReactNode } from "react";
import BottomSheet from "../../../components/DesignStuff/BottomSheet/BottomSheet";
import Row from "../../../components/Common/Layouts/Row";
import Typography from "../../../components/Common/Layouts/Typography";
import { ReactComponent as CloseModal } from "../../../assets/img/Join/closeModal.svg";
import ScrollPicker from "../../../components/DesignStuff/ScrollPicker/ScrollPicker";
import styled from "styled-components";

interface ScrollPickerBottomSheetProps<TId, TOption> {
	isOpen: boolean;
	title: string;
	options: { id: TId; option: TOption }[];
	onClose: () => void;
	onSelect: (value: TId) => void;
}

export default function ScrollPickerBottomSheet<TId extends string | number, TOption extends ReactNode>({
	isOpen,
	title,
	options,
	onClose,
	onSelect
}: ScrollPickerBottomSheetProps<TId, TOption>) {
	return (
		<BottomSheet isOpen={isOpen} height="45.73vh">
			<Row horizonAlign="distribute" style={{ marginBottom: "1.25rem" }}>
				<Typography color="Gray800" typoSize="T2_bold">
					{title}
				</Typography>
				<Button onClick={onClose}>
					<CloseModal />
				</Button>
			</Row>
			<ScrollPicker<TId, TOption>
				options={options}
				onOptionSelect={onSelect}
				height={220}
			/>
		</BottomSheet>
	);
}

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;