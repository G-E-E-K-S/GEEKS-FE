import React from 'react';
import Typography from "../../../../components/Common/Layouts/Typography";
import TextFields from "../../../../components/DesignStuff/TextFields/TextFields";
import Column from "../../../../components/Common/Layouts/Column";

interface ScheduleEditTitleProps {
    title: string;
    setTitle: (value: string) => void;
}

function ScheduleEditTitle({title, setTitle}: ScheduleEditTitleProps) {
    return (
        <Column gap={8} width="w-full">
            <Typography typoSize="B2_medium" color="Gray500">제목</Typography>
            <TextFields text={title} onChange={(val) => setTitle(val)} inputType="text" placeholder="일정 제목"/>
        </Column>
    );
}

export default ScheduleEditTitle;