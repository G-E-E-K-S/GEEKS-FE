import React, {useState} from 'react';
import Typography from "../../../../components/Common/Layouts/Typography";
import {ALARMS} from "../../util/const";
import DownArrowIcon from "../../../../assets/img/Calendar/DownArrowIcon.svg";
import Column from "../../../../components/Common/Layouts/Column";
import {SelectInput} from "../../util/styles";
import ScrollPickerBottomSheet from "../../util/ScrollPickerBottomSheet";

interface ScheduleEditAlarmProps {
    alarm: number;
    setAlarm: (value: number) => void;
}

export default function ScheduleEditAlarm({alarm, setAlarm}: ScheduleEditAlarmProps) {
    const [isAlarmOpen, setIsAlarmOpen] = useState(false);

    const handleAlarmSelect = (alarm: number) => {
        setAlarm(alarm);
        setIsAlarmOpen(false);
    };

    return (
        <>
            <Column gap={8} width="w-full">
                <Typography typoSize="B2_medium" color="Gray500">
                    알림
                </Typography>
                <SelectInput onClick={() => setIsAlarmOpen(true)}>
                    <Typography
                        typoSize="T3_semibold"
                        color="Gray800"
                        style={{display: "flex", alignItems: "center", gap: "6px"}}
                    >
                        {ALARMS[alarm]?.option}
                    </Typography>
                    <img src={DownArrowIcon}/>
                </SelectInput>
            </Column>
            <ScrollPickerBottomSheet<number, string>
                isOpen={isAlarmOpen}
                title="알림"
                options={ALARMS}
                onClose={() => setIsAlarmOpen(false)}
                onSelect={handleAlarmSelect}
            />
        </>
    );
}