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
	handleScheduleDayClick: (day: string | number) => string;
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
			const clickedDate = currentDate.date(Number(day)).format("YYYY.M.D");
			setSelectedDate(clickedDate);
		}
	};

	const handleTodayClick = () => {
		const today = dayjs();
		setSelectedDate(today.format("YYYY.M.D"));
	};

	const handleScheduleDayClick = (day: string | number) => {
		if (day !== "") {
			const clickedDate = currentDate.date(Number(day)).format("YYYY.M.D");
			return clickedDate;
		}
		return currentDate.format("YYYY.M.D");
	};

	return {
		currentDate,
		selectedDate,
		handlePrevMonth,
		handleNextMonth,
		handleDayClick,
		handleTodayClick,
		setCurrentDate,
		handleScheduleDayClick
	};
};
