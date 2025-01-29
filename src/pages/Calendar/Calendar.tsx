import * as c from "../../components/Common/CommonStyle";
import CalendarGrid from "./components/CalendarGrid";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { useCalendar } from "./hooks/useCalendar";
import TodaySchedules from "./components/TodaySchedules";

const scheduleData = {
	"2025-01-03": [
		{ title: "친구와 외출", type: "외출", content: "친구랑 놀러감", time: "13:00 - 17:00" }
	],
	"2025-01-15": [
		{ title: "영화 관람", type: "외출", content: "영화 보러감", time: "14:00 - 18:00" },
		{ title: "친구집에서 숙박", type: "외박", content: "친구집", time: "18:00 - 다음날 09:00" }
	],
	"2025-01-20": [
		{ title: "카페 방문", type: "외출", content: "카페가기", time: "13:00 - 15:00" },
		{ title: "가족 모임", type: "외박", content: "가족모임", time: "15:00 - 다음날 10:00" },
		{ title: "동아리 정기 모임", type: "공동 일정", content: "동아리 모임", time: "19:00 - 21:00" },
		{ title: "스터디 모임", type: "기타", content: "스터디", time: "10:00 - 12:00" },
		{ title: "운동 시간", type: "기타", content: "운동", time: "16:00 - 17:00" }
	],
	"2025-01-25": [
		{ title: "친구와 만남", type: "외출", content: "친구 만남", time: "12:00 - 16:00" },
		{ title: "여행 일정", type: "외박", content: "여행", time: "16:00 - 다음날 18:00" },
		{ title: "병원 방문", type: "기타", content: "병원가기", time: "10:00 - 11:00" }
	],
	"2025-01-30": [
		{ title: "친구와 만남", type: "외출", content: "친구 만남", time: "12:00 - 16:00" },
		{ title: "여행 일정", type: "외박", content: "여행", time: "16:00 - 다음날 18:00" },
		{ title: "병원 방문", type: "기타", content: "병원가기", time: "10:00 - 11:00" }
	],
	"2024-02-03": [
		{ title: "동아리 회식", type: "기타", content: "동아리 회식", time: "18:00 - 20:00" },
		{ title: "분가하는 날", type: "기타", content: "분가 가는 날", time: "어쩌구저쩌구 설명" }
	]
};

export default function Calendar () {
	const { currentDate, selectedDate, handlePrevMonth, handleNextMonth, handleDayClick, handleTodayClick } =
		useCalendar({ type: "calendar" });

	const todayScheduleDatas = selectedDate ? scheduleData[selectedDate] : [];

	return (
		<c.Totalframe>
			<c.ScreenComponent navigation={true}>
				<c.SubScreen>
					<CalendarGrid
						type="calendar"
						scheduleData={scheduleData}
						currentDate={currentDate}
						selectedDate={selectedDate}
						handleDayClick={handleDayClick}
						handleTodayClick={handleTodayClick}
					/>
					<Line />
					<TodaySchedules
						selectedDate={selectedDate}
						handleDayClick={handleDayClick}
						todayScheduleDatas={todayScheduleDatas}
					/>
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
