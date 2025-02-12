import React, {useEffect, useState} from "react";
import * as c from "../../../components/Common/CommonStyle";
import ScheduleHeader from "../ui/ScheduleHeader";
import {useLocation} from "react-router-dom";
import Column from "../../../components/Common/Layouts/Column";
import {floorToNearest30} from "../../Calendar/utils";
import ScheduleEditTitle from "./components/ScheduleEditTitle";
import ScheduleEditType from "./components/ScheduleEditType";
import ScheduleEditAlarm from "./components/ScheduleEditAlarm";
import ScheduleEditExplain from "./components/ScheduleEditExplain";
import ScheduleEditDate from "./components/ScheduleEditDate";
import dayjs from "dayjs";

export default function ScheduleEdit() {
    // 수정이면 api 받아서 state에 넣기
    const location = useLocation();
    const [title, setTitle] = useState("");
    const [type, setType] = useState("외출");
    const [alarm, setAlarm] = useState(1);
    const [explain, setExplain] = useState("");

    // 날짜 합쳐서 상태고 관리하는게 나을지도
    const [startDate, setStartDate] = useState(dayjs().format("YYYY.M.D"));
    const [startTime, setStartTime] = useState(floorToNearest30(dayjs()).format("HH:mm"));
    const [endDate, setEndDate] = useState(dayjs().format("YYYY.M.D"));
    const [endTime, setEndTime] = useState(floorToNearest30(dayjs()).format("HH:mm"));

    const [isActive, setIsActive] = useState(false);
    const [prevValues, _] = useState({title, type, alarm, explain});
    const isAdd = location.pathname.includes("add");

    useEffect(() => {
        if (isAdd) {
            if (title && type && alarm) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        } else if ((title && title !== prevValues.title) ||
            (type && type !== prevValues.type) ||
            (alarm && alarm !== prevValues.alarm) ||
            (explain !== prevValues.explain)
        ) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [title, type, alarm, explain]);

    return (
        <c.Totalframe>
            <c.ScreenComponent navigation={false}>
                <ScheduleHeader pathName={location.pathname} isActive={isActive}/>
                <Column gap={40} width="w-full">
                    <ScheduleEditTitle title={title} setTitle={setTitle}/>
                    <ScheduleEditType type={type} setType={setType}/>
                    <ScheduleEditDate
                        startDate={startDate}
                        endDate={endDate}
                        startTime={startTime}
                        endTime={endTime}
                        type={type}
                        setStartDate={setStartDate}
                        setStartTime={setStartTime}
                        setEndDate={setEndDate}
                        setEndTime={setEndTime}
                    />
                    <ScheduleEditAlarm alarm={alarm} setAlarm={setAlarm}/>
                    <ScheduleEditExplain explain={explain} setExplain={setExplain}/>
                </Column>
            </c.ScreenComponent>
        </c.Totalframe>
    );
}