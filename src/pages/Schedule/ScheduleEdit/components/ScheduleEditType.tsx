import React, {ReactNode, useState} from 'react';
import Typography from "../../../../components/Common/Layouts/Typography";
import {ScheduleMark} from "../../../Calendar/utils/styles/ScheduleMark.styled";
import DownArrowIcon from "../../../../assets/img/Calendar/DownArrowIcon.svg";
import Column from "../../../../components/Common/Layouts/Column";
import {SelectInput} from "../../util/styles";
import {TYPES} from "../../util/const";
import ScrollPickerBottomSheet from "../../util/ScrollPickerBottomSheet";

interface ScheduleEditTypeProps {
    type: string;
    setType: (value: string) => void;
}

function ScheduleEditType({type, setType}: ScheduleEditTypeProps) {
    const [isTypeOpen, setIsTypeOpen] = useState(false);

    const handleTypeSelect = (type: string) => {
        setType(type);
        setIsTypeOpen(false);
    };

    return (
        <>
            <Column gap={8} width="w-full">
                <Typography typoSize="B2_medium" color="Gray500">종류</Typography>
                <SelectInput onClick={() => setIsTypeOpen(true)}>
                    <Typography
                        typoSize="T3_semibold"
                        color="Gray800"
                        style={{display: "flex", alignItems: "center", gap: "6px"}}
                    >
                        <ScheduleMark $type={type}/> {type}
                    </Typography>
                    <img src={DownArrowIcon}/>
                </SelectInput>
            </Column>
            <ScrollPickerBottomSheet<string, ReactNode>
                isOpen={isTypeOpen}
                title="종류"
                options={TYPES}
                onClose={() => setIsTypeOpen(false)}
                onSelect={handleTypeSelect}
            />
        </>
    );
}

export default ScheduleEditType;