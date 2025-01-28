import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Typography from "../../../components/Common/Layouts/Typography";
import { getDaysInMonth, isToday } from "../utils";
import { useCalendar } from "../hooks/useCalendar";
import CalendarHeader from "../ui/CalendarHeader";

interface DayProps {
	$isEmpty: boolean;
	$isWeekend: boolean;
	$isSunday: boolean;
	$isToday: boolean;
}

interface CalendarGridProps {
	type: "calendar" | "modal";
}

export default function CalendarGrid ({ type }: CalendarGridProps) {
	const { currentDate, handlePrevMonth, handleNextMonth, handleDayClick } = useCalendar({ type });

	return (
		<CalendarContainer>
			<CalendarHeader
				type={type}
				currentDate={currentDate}
				handlePrevMonth={handlePrevMonth}
				handleNextMonth={handleNextMonth}
			/>
			<WeekdayHeader>
				{["일", "월", "화", "수", "목", "금", "토"].map((day: string) => (
					<WeekdayCell key={day} $day={day}>
						<Typography typoSize="B1_medium">{day}</Typography>
					</WeekdayCell>
				))}
			</WeekdayHeader>
			<CalendarBody>
				{getDaysInMonth(currentDate).map((week: (string | number)[], weekIdx: number) => (
					<Week key={`week-${weekIdx}`}>
						{week.map((day: string | number, dayIdx: number) => (
							<Day
								key={`day-${weekIdx}-${dayIdx}`}
								$isEmpty={day === ""}
								$isWeekend={dayIdx === 0 || dayIdx === 6}
								$isSunday={dayIdx === 0}
								$isToday={isToday(currentDate, day)}
								onClick={() => handleDayClick(day)}
							>
								<Typography typoSize="B1_medium" color="Gray800">
									{day}
								</Typography>
								<div></div>
							</Day>
						))}
					</Week>
				))}
			</CalendarBody>
		</CalendarContainer>
	);
}

const CalendarContainer = styled.div``;

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
            case "토":
                return theme.Gray500;
            case "일":
                return theme.Red300;
            default:
                return theme.Gray600;
        }
    }};
`;

const CalendarBody = styled.div``;

const Week = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const Day = styled.div<DayProps>`
    position: relative;
    min-width: 38px;
    min-height: 48px;
    text-align: center;
    padding: 0 5px 0;
    color: ${(props) => {
        if (props.$isToday) {
            return theme.Yellow700;
        } else if (props.$isWeekend) {
            return props.$isSunday ? theme.Red500 : theme.Gray500;
        }
        return theme.Gray800;
    }};

    ${props => !props.$isEmpty && `
        &:active::after {
		content: "";
		position: absolute;
		top: -6px;
		left: 50%;
		transform: translateX(-50%);
		width: 36px;
		height: 36px;
		background-color: ${theme.Gray50};
        border-radius: 8px;
        z-index: -1;
    	}
	`}
`;
