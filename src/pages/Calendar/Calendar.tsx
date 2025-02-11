import * as c from "../../components/Common/CommonStyle";
import CalendarGrid from "./components/CalendarGrid";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { useCalendar } from "./hooks/useCalendar";
import TodaySchedules from "./components/TodaySchedules";
import CalendarHeader from "./ui/CalendarHeader";
import BottomSheet from "../../components/DesignStuff/BottomSheet/BottomSheet";
import Typography from "../../components/Common/Layouts/Typography";
import { ReactComponent as CloseModal } from "../../assets/img/Join/closeModal.svg";
import { ReactComponent as AddIcon } from ".././../assets/img/Calendar/AddIcon.svg";
import Row from "../../components/Common/Layouts/Row";
import React, { useState } from "react";
import ScrollPicker from "../../components/DesignStuff/ScrollPicker/ScrollPicker";
import { MONTHS } from "./utils/const";
import { useNavigate } from "react-router-dom";

const scheduleData = {
	"2025.1.3": [
		{ scheduleId: 1, title: "친구와 외출", type: "외출", content: "친구랑 놀러감", time: "13:00 - 17:00" }
	],
	"2025.1.15": [
		{ scheduleId: 2, title: "영화 관람", type: "외출", content: "영화 보러감", time: "14:00 - 18:00" },
		{ scheduleId: 3, title: "친구집에서 숙박", type: "외박", content: "친구집", time: "18:00 - 다음날 09:00" }
	],
	"2025.1.20": [
		{ scheduleId: 4, title: "카페 방문", type: "외출", content: "카페가기", time: "13:00 - 15:00" },
		{ scheduleId: 5, title: "가족 모임", type: "외박", content: "가족모임", time: "15:00 - 다음날 10:00" },
		{ scheduleId: 6, title: "동아리 정기 모임", type: "공동 일정", content: "동아리 모임", time: "19:00 - 21:00" },
		{ scheduleId: 7, title: "스터디 모임", type: "기타", content: "스터디", time: "10:00 - 12:00" },
		{ scheduleId: 8, title: "운동 시간", type: "기타", content: "운동", time: "16:00 - 17:00" }
	],
	"2025.1.25": [
		{ scheduleId: 9, title: "친구와 만남", type: "외출", content: "친구 만남", time: "12:00 - 16:00" },
		{ scheduleId: 10, title: "여행 일정", type: "외박", content: "여행", time: "16:00 - 다음날 18:00" },
		{ scheduleId: 11, title: "병원 방문", type: "기타", content: "병원가기", time: "10:00 - 11:00" }
	],
	"2025.1.30": [
		{ scheduleId: 12, title: "친구와 만남", type: "외출", content: "친구 만남", time: "12:00 - 16:00" },
		{ scheduleId: 13, title: "여행 일정", type: "외박", content: "여행", time: "16:00 - 다음날 18:00" },
		{ scheduleId: 14, title: "병원 방문", type: "기타", content: "병원가기", time: "10:00 - 11:00" }
	],
	"2025.2.3": [
		{ scheduleId: 15, title: "동아리 회식", type: "기타", content: "동아리 회식", time: "18:00 - 20:00" },
		{ scheduleId: 16, title: "분가하는 날", type: "기타", content: "분가 가는 날", time: "18:00 - 20:00" }
	],
	"2025.2.11": [
		{ scheduleId: 17, title: "동아리 회식", type: "기타", content: "동아리 회식", time: "18:00 - 20:00" },
		{ scheduleId: 18, title: "분가하는 날", type: "기타", content: "분가 가는 날", time: "18:00 - 20:00" }
	]
};

export default function Calendar () {
	let navigate = useNavigate();

	const {
		currentDate,
		selectedDate,
		handleDayClick,
		handleTodayClick,
		setCurrentDate
	} = useCalendar();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleIsOpen = () => {
		setIsOpen(prevState => !prevState);
	};

	const handleMonthSelect = (month: number) => {
		const newDate = currentDate.month(month - 1);
		setCurrentDate(newDate);
		setIsOpen(false);
	};

	const todayScheduleDatas = selectedDate
		? scheduleData[selectedDate]
		: scheduleData[currentDate.format("YYYY-MM-DD")];

	return (
		<c.Totalframe>
			<c.ScreenComponent navigation={true}>
				<c.SubScreen>
					<CalendarHeader
						type="calendar"
						currentDate={currentDate}
						handleTodayClick={handleTodayClick}
						toggleIsOpen={toggleIsOpen}
					/>
					<CalendarGrid
						type="calendar"
						scheduleData={scheduleData}
						currentDate={currentDate}
						selectedDate={selectedDate}
						handleDayClick={handleDayClick}
					/>
					<Line />
					<TodaySchedules
						selectedDate={selectedDate}
						handleDayClick={handleDayClick}
						todayScheduleDatas={todayScheduleDatas}
					/>
					<BottomSheet isOpen={isOpen} height={45.73}>
						<Row horizonAlign="distribute" style={{ marginBottom: "1.25rem" }}>
							<Typography color="Gray800" typoSize="T2_bold">
								{"월 선택"}
							</Typography>
							<Button onClick={toggleIsOpen}>
								<CloseModal />
							</Button>
						</Row>
						<ScrollPicker<number, string>
							options={MONTHS}
							onOptionSelect={handleMonthSelect}
							height={220}
						/>
					</BottomSheet>
					<ScheduleAddButton onClick={() => navigate("/schedule/add")}>
						<AddIcon style={{ width: "20px", height: "20px" }} />
						<Typography typoSize="T4_semibold" color="Gray700">
							일정 추가
						</Typography>
					</ScheduleAddButton>
				</c.SubScreen>
			</c.ScreenComponent>
		</c.Totalframe>
	);
}

const Line = styled.div`
    height: 1px;
    background-color: ${theme.Gray100};
    margin-bottom: 16px;
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

const ScheduleAddButton = styled(Button)`
    position: fixed;
    right: 20px;
    bottom: calc(11.84vh + 20px);
    border: 1px solid ${theme.Gray300};
    box-shadow: 2px 2px 8px 0 #00000014;
    border-radius: 12px;
    padding: 14px 20px;
    gap: 8px;
`;


