import styled from "styled-components";
import { theme } from "../../../styles/theme";
import Typography from "../../../components/Common/Layouts/Typography";
import { getDaysInMonth, isToday } from "../utils";
import CalendarHeader from "../ui/CalendarHeader";
import { ReactComponent as AddIcon } from "../.././../assets/img/Calendar/AddIcon.svg";
import Row from "../../../components/Common/Layouts/Row";
import { Dayjs } from "dayjs";
import { ScheduleMark } from "../utils/styles/ScheduleMark.styled";

interface DayProps {
	$isEmpty: boolean;
	$isWeekend: boolean;
	$isSunday: boolean;
	$isToday: boolean;
	$isSelected: boolean;
	$type: "calendar" | "modal";
}

interface CalendarGridProps {
	type: "calendar" | "modal";
	currentDate: Dayjs;
	selectedDate: string | null;
	handleDayClick: (day: string | number) => void;
	scheduleData?: { [key: string]: { title: string, type: string; content: string; time: string }[] };
	handlePrevMonth?: () => void;
	handleNextMonth?: () => void;
	handleTodayClick?: () => void;
}

const scheduleTypes = ["외출", "외박", "공동 일정", "기타"];

export default function CalendarGrid ({
	type,
	scheduleData,
	currentDate,
	selectedDate,
	handlePrevMonth,
	handleNextMonth,
	handleDayClick,
	handleTodayClick
}: CalendarGridProps) {
	const getScheduleForDay = (day: string | number) => {
		if (day === "") return [];
		const dateString = currentDate.date(Number(day)).format("YYYY-MM-DD");
		return scheduleData?.[dateString] || [];
	};

	const renderScheduleMarks = (schedules: { type: string; content: string; time: string }[]) => {
		if (schedules.length >= 4) {
			return (
				<ScheduleMarkWrapper style={{ flexDirection: "column", alignItems: "center" }}>
					<Row gap={2}>
						{schedules.slice(0, 2).map((scheduleType, index) => (
							<ScheduleMark key={index} $type={scheduleType.type} />
						))}
					</Row>
					<Row gap={2}>
						<ScheduleMark $type={schedules[2].type} />
						<AddIcon />
					</Row>
				</ScheduleMarkWrapper>
			);
		}

		return (
			<ScheduleMarkWrapper>
				{schedules.map((scheduleType, index) => (
					<ScheduleMark key={index} $type={scheduleType.type} />
				))}
			</ScheduleMarkWrapper>
		);
	};

	return (
		<CalendarContainer>
			<CalendarHeader
				type={type}
				currentDate={currentDate}
				handlePrevMonth={handlePrevMonth}
				handleNextMonth={handleNextMonth}
				handleTodayClick={handleTodayClick}
			/>
			{type === "calendar" && (
				<ScheduleHeader>
					{scheduleTypes.map((scheduleType: string) => (
						<ScheduleType key={scheduleType} $type={scheduleType}>
							<ScheduleMark $type={scheduleType} />
							<Typography typoSize="B2_medium">{scheduleType}</Typography>
						</ScheduleType>
					))}
				</ScheduleHeader>
			)}
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
								$isSelected={selectedDate === currentDate.date(Number(day)).format("YYYY-MM-DD")}
								$type={type}
								onClick={() => handleDayClick(day)}
							>
								<Typography typoSize="B1_medium">{day}</Typography>
								{type === "calendar" && scheduleData && renderScheduleMarks(getScheduleForDay(day))}
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
        if (props.$type === "calendar" && props.$isSelected) {
            return theme.White;
        } else if (props.$type === "calendar" && props.$isToday) {
            return theme.Yellow700;
        } else if (props.$isWeekend) {
            return props.$isSunday ? theme.Red500 : theme.Gray500;
        }
        return theme.Gray800;
    }};

    ${(props) =>
            !props.$isEmpty &&
            props.$isSelected &&
            props.$type === "calendar" &&
            `
        &::after {
            content: "";
            position: absolute;
            top: -1px;
            left: 50%;
            transform: translateX(-50%);
            width: 26px;
            height: 26px;
            background-color: ${theme.Gray800};
            border-radius: 6px;
            z-index: -1;
        }
    `}

    ${(props) =>
            !props.$isEmpty &&
            props.$type === "modal" &&
            `
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

const ScheduleHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`;

const ScheduleType = styled.div<{ $type: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: ${({ $type }) => {
        switch ($type) {
            case "외출":
                return theme.Blue50;
            case "외박":
                return theme.Red50;
            case "공동 일정":
                return theme.Teal50;
            case "기타":
                return theme.YellowGray50;
            default:
                return "transparent";
        }
    }};
`;

const ScheduleMarkWrapper = styled.div`
    display: flex;
    gap: 2px;
    justify-content: center;
    margin-top: 6px;
`;
