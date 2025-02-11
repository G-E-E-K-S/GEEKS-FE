import React, { ReactNode, useEffect, useState } from "react";
import * as c from "../../../components/Common/CommonStyle";
import ScheduleHeader from "../ui/ScheduleHeader";
import { useLocation } from "react-router-dom";
import Typography from "../../../components/Common/Layouts/Typography";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import Column from "../../../components/Common/Layouts/Column";
import DownArrowIcon from "../../../assets/img/Calendar/DownArrowIcon.svg";
import { ScheduleMark } from "../../Calendar/utils/styles/ScheduleMark.styled";
import styled from "styled-components";
import { ALARMS, TIMES, TYPES } from "../util/const";
import ScrollPickerBottomSheet from "../util/ScrollPickerBottomSheet";
import Row from "../../../components/Common/Layouts/Row";
import BottomSheet from "../../../components/DesignStuff/BottomSheet/BottomSheet";
import { ReactComponent as CloseModal } from "../../../assets/img/Join/closeModal.svg";
import { useCalendar } from "../../Calendar/hooks/useCalendar";
import { floorToNearest30 } from "../../Calendar/utils";
import CalendarGrid from "../../Calendar/components/CalendarGrid";
import CalendarHeader from "../../Calendar/ui/CalendarHeader";

export default function ScheduleEdit () {
	const location = useLocation();
	const { currentDate, selectedDate, handleDayClick, handlePrevMonth, handleNextMonth, handleScheduleDayClick } =
		useCalendar({ type: "modal" });
	const [title, setTitle] = useState("");
	const [type, setType] = useState("외출");
	const [alarm, setAlarm] = useState(1);
	const [explain, setExplain] = useState("");

	const [isTypeOpen, setIsTypeOpen] = useState(false);
	const [isAlarmOpen, setIsAlarmOpen] = useState(false);

	const [startDate, setStartDate] = useState(currentDate.format("YYYY.M.D"));
	const [startTime, setStartTime] = useState(floorToNearest30(currentDate).format("HH:mm"));
	const [endDate, setEndDate] = useState(currentDate.format("YYYY.M.D"));
	const [endTime, setEndTime] = useState(floorToNearest30(currentDate).format("HH:mm"));
	const [isStartTimeOpen, setIsStartTimeOpen] = useState(false);
	const [isEndTimeOpen, setIsEndTimeOpen] = useState(false);
	const [isStartDateOpen, setIsStartDateOpen] = useState(false);
	const [isEndDateOpen, setIsEndDateOpen] = useState(false);

	const [isActive, setIsActive] = useState(false);
	const [prevValues, setPrevValues] = useState({ title, type, alarm, explain });

	useEffect(() => {
		const isAdd = location.pathname.includes("add");
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

		setPrevValues({ title, type, alarm, explain });
	}, [title, type, alarm, explain]);

	const handleTypeSelect = (type) => {
		setType(type);
		setIsTypeOpen(false);
	};

	const handleAlarmSelect = (alarm) => {
		setAlarm(alarm);
		setIsAlarmOpen(false);
	};

	const handleTimeSelect = (time) => {
		if (isStartTimeOpen) {
			setStartTime(time);
			setIsStartTimeOpen(false);
		} else if (isEndTimeOpen) {
			setEndTime(time);
			setIsEndTimeOpen(false);
		}
	};

	return (
		<c.Totalframe>
			<c.ScreenComponent navigation={false}>
				<ScheduleHeader pathName={location.pathname} isActive={isActive} />
				<Column gap={40} width="w-full">
					<Column gap={8} width="w-full">
						<Typography typoSize="B2_medium" color="Gray500">
							제목
						</Typography>
						<TextFields text={title} onChange={(val) => setTitle(val)} inputType="text"
									placeholder="일정 제목" />
					</Column>
					<Column gap={8} width="w-full">
						<Typography typoSize="B2_medium" color="Gray500">
							종류
						</Typography>
						<SelectInput onClick={() => setIsTypeOpen(true)}>
							<Typography
								typoSize="T3_semibold"
								color="Gray800"
								style={{ display: "flex", alignItems: "center", gap: "6px" }}
							>
								<ScheduleMark $type={type} /> {type}
							</Typography>
							<img src={DownArrowIcon} />
						</SelectInput>
					</Column>
					<Column gap={8} width="w-full">
						<Typography typoSize="B2_medium" color="Gray500">
							날짜
						</Typography>
						<Row gap={9.5} horizonAlign="center" verticalAlign="center" width="w-full">
							<SelectInput onClick={() => setIsStartDateOpen(true)} style={{ width: "33.215%" }}>
								<Typography
									typoSize="T3_semibold"
									style={{ display: "flex", alignItems: "center", gap: "6px" }}
								>
									{startDate}
								</Typography>
							</SelectInput>
							<SelectInput
								onClick={() => type !== "외박" && setIsStartTimeOpen(true)}
								style={{ width: "19.37%" }}
							>
								<Typography
									typoSize="T3_semibold"
									color={type === "외박" ? "Gray200" : "Gray800"}
									style={{ display: "flex", alignItems: "center", gap: "6px" }}
								>
									{TIMES[startTime]?.option ?? startTime}
								</Typography>
							</SelectInput>
							<Typography typoSize="B1_semibold" color="Gray800">
								-
							</Typography>
							<SelectInput onClick={() => setIsEndDateOpen(true)} style={{ width: "33.215%" }}>
								<Typography
									typoSize="T3_semibold"
									style={{ display: "flex", alignItems: "center", gap: "6px" }}
								>
									{endDate}
								</Typography>
							</SelectInput>
							<SelectInput
								onClick={() => type !== "외박" && setIsEndTimeOpen(true)}
								style={{ width: "19.37%" }}
							>
								<Typography
									typoSize="T3_semibold"
									color={type === "외박" ? "Gray200" : "Gray800"}
									style={{ display: "flex", alignItems: "center", gap: "6px" }}
								>
									{TIMES[endTime]?.option ?? endTime}
								</Typography>
							</SelectInput>
						</Row>
					</Column>
					<Column gap={8} width="w-full">
						<Typography typoSize="B2_medium" color="Gray500">
							알림
						</Typography>
						<SelectInput onClick={() => setIsAlarmOpen(true)}>
							<Typography
								typoSize="T3_semibold"
								color="Gray800"
								style={{ display: "flex", alignItems: "center", gap: "6px" }}
							>
								{ALARMS[alarm]?.option}
							</Typography>
							<img src={DownArrowIcon} />
						</SelectInput>
					</Column>
					<Column gap={8} width="w-full">
						<Typography typoSize="B2_medium" color="Gray500">
							설명 (선택)
						</Typography>
						<TextFields text={explain} onChange={(val) => setExplain(val)} inputType="text"
									placeholder="일정 설명" />
					</Column>
				</Column>

				<ScrollPickerBottomSheet<string, ReactNode>
					isOpen={isTypeOpen}
					title="종류"
					options={TYPES}
					onClose={() => setIsTypeOpen(false)}
					onSelect={handleTypeSelect}
				/>
				<BottomSheet isOpen={isStartDateOpen || isEndDateOpen} height={65.16}>
					<Row horizonAlign="distribute" style={{ marginBottom: "1.25rem" }}>
						<Typography color="Gray800" typoSize="T2_bold">
							날짜
						</Typography>
						<Button
							onClick={() => {
								setIsStartDateOpen(false);
								setIsEndDateOpen(false);
							}}
						>
							<CloseModal />
						</Button>
					</Row>
					<CalendarHeader
						type="modal"
						currentDate={currentDate}
						handlePrevMonth={handlePrevMonth}
						handleNextMonth={handleNextMonth}
					/>
					<CalendarGrid
						type="modal"
						currentDate={currentDate}
						selectedDate={selectedDate}
						handleDayClick={(day) => {
							if (isStartDateOpen) {
								setStartDate(handleScheduleDayClick(day));
								setIsStartDateOpen(false);
							} else {
								setEndDate(handleScheduleDayClick(day));
								setIsEndDateOpen(false);
							}

						}}
					/>
				</BottomSheet>
				<ScrollPickerBottomSheet<number, string>
					isOpen={isStartTimeOpen || isEndTimeOpen}
					title="시간"
					options={TIMES}
					onClose={() => {
						setIsStartTimeOpen(false);
						setIsEndTimeOpen(false);
					}}
					onSelect={handleTimeSelect}
				/>
				<ScrollPickerBottomSheet<number, string>
					isOpen={isAlarmOpen}
					title="알림"
					options={ALARMS}
					onClose={() => setIsAlarmOpen(false)}
					onSelect={handleAlarmSelect}
				/>
			</c.ScreenComponent>
		</c.Totalframe>
	);
}

const SelectInput = styled.div`
    padding: 7px 0px 8px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #efefef;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;
