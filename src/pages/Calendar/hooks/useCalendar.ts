import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface UseCalendarProps {
	type: "calendar" | "modal";
}

interface UseCalendarReturn {
	currentDate: Dayjs;
	selectedDate: string | null;
	handlePrevMonth: () => void;
	handleNextMonth: () => void;
	handleDayClick: (day: string | number) => void;
	handleTodayClick: () => void;
	setCurrentDate: (date: Dayjs) => void;
}

export const useCalendar = ({ type }: UseCalendarProps): UseCalendarReturn => {
	const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
	const [selectedDate, setSelectedDate] = useState<string | null>(null);

	const handlePrevMonth = (): void => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	const handleNextMonth = (): void => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	const handleDayClick = (day: string | number) => {
		if (day !== "") {
			const clickedDate = currentDate.date(Number(day));
			setSelectedDate(clickedDate.format("YYYY-MM-DD"));

			if (type === "calendar") {
				// calendar 타입일 때의 추가 로직
			} else if (type === "modal") {
				// modal 타입일 때의 추가 로직
			}
		}
	};

	const handleTodayClick = () => {
		const today = dayjs();
		setSelectedDate(today.format("YYYY-MM-DD"));
	};

	return {
		currentDate,
		selectedDate,
		handlePrevMonth,
		handleNextMonth,
		handleDayClick,
		handleTodayClick,
		setCurrentDate,
	};
};
