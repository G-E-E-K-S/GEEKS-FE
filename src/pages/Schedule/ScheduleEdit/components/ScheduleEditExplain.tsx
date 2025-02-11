import React from 'react';
import Typography from "../../../../components/Common/Layouts/Typography";
import TextFields from "../../../../components/DesignStuff/TextFields/TextFields";
import Column from "../../../../components/Common/Layouts/Column";

interface ScheduleEditExplainProps {
    explain: string;
    setExplain: (value: string) => void;
}

export default function ScheduleEditExplain({explain, setExplain}: ScheduleEditExplainProps) {
    return (
        <Column gap={8} width="w-full">
            <Typography typoSize="B2_medium" color="Gray500">설명 (선택)</Typography>
            <TextFields text={explain} onChange={(val) => setExplain(val)} inputType="text" placeholder="일정 설명"/>
        </Column>
    );
}