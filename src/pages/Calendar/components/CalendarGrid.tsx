import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Typography from "../../../components/Common/Layouts/Typography";
import { ReactComponent as RightArrowIcon } from "../.././../assets/img/Calendar/RightArrowIcon.svg";
import { ReactComponent as LeftArrowIcon } from "../.././../assets/img/Calendar/LeftArrowIcon.svg";

interface DayProps {
	$isEmpty: boolean;
	$isWeekend: boolean;
	$isSunday: boolean;
}

export default function CalendarGrid () {
	const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

	const getDaysInMonth = (): (string | number)[][] => {
		const year: number = currentDate.year();
		const month: number = currentDate.month();
		const firstDay: Dayjs = dayjs(new Date(year, month, 1)); // 월의 첫 번째 날
		const firstDayOfWeek: number = firstDay.day(); // 첫 번째 날의 요일
		const daysInMonth: number = currentDate.daysInMonth(); // 월에 포함된 총 날짜 수

		const calendar: (string | number)[][] = [];
		let day: number = 1;

		for (let i = 0; i < 6; i++) {
			const week: (string | number)[] = [];
			for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDayOfWeek) {
					week.push("");
				} else if (day > daysInMonth) {
					week.push("");
				} else {
					week.push(day);
					day++;
				}
			}
			calendar.push(week);
		}
		return calendar;
	};

	const handlePrevMonth = (): void => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	const handleNextMonth = (): void => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	return (
		<CalendarContainer>
			<CalendarHeader>
				<Button onClick={handlePrevMonth}>
					<LeftArrowIcon />
				</Button>
				<Typography typoSize="T3_semibold" color="Gray800">{currentDate.format("YYYY.M")}</Typography>
				<Button onClick={handleNextMonth}>
					<RightArrowIcon />
				</Button>
			</CalendarHeader>
			<WeekdayHeader>
				{["일", "월", "화", "수", "목", "금", "토"].map((day: string) => (
					<WeekdayCell key={day} $day={day}>
						<Typography typoSize="B1_medium">{day}</Typography>
					</WeekdayCell>
				))}
			</WeekdayHeader>
			<CalendarBody>
				{getDaysInMonth().map((week: (string | number)[], weekIdx: number) => (
					<Week key={`week-${weekIdx}`}>
						{week.map((day: string | number, dayIdx: number) => (
							<Day key={`day-${weekIdx}-${dayIdx}`}
								 $isEmpty={day === ""}
								 $isWeekend={dayIdx === 0 || dayIdx === 6}
								 $isSunday={dayIdx === 0}
							>
								<Typography typoSize="B1_medium">{day}</Typography>
							</Day>
						))}
					</Week>
				))}
			</CalendarBody>
		</CalendarContainer>
	);
}

const CalendarContainer = styled.div`
`;

const CalendarHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
    gap: 12px;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    background-color: transparent;
`;

const WeekdayHeader = styled.div`
    display: flex;
    margin-bottom: 36px;
    justify-content: space-between;
`;

const WeekdayCell = styled.div<{ $day: string }>`
    min-width: 38px;
    text-align: center;
    color: ${({ $day }) => {
        switch ($day) {
            case "토" :
                return theme.Gray500;
            case "일" :
                return theme.Red300;
            default:
                return theme.Gray600;
        }
    }};
`;

const CalendarBody = styled.div`
`;

const Week = styled.div`
    display: flex;
    justify-content: space-between;
	margin-bottom: 12px;
`;

const Day = styled.div<DayProps>`
    min-width: 38px;
	min-height: 48px;
    text-align: center;
	padding: 0 5px 0;
    color: ${(props) => {
        if (props.$isWeekend) {
            return props.$isSunday ? theme.Red500 : theme.Gray500;
        }
        return theme.Gray800;
    }};
`;