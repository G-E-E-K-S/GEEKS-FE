import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface UseCalendarProps {
	type: "calendar" | "modal";
}

interface UseCalendarReturn {
	currentDate: Dayjs;
	selectedDate: Dayjs | null;
	handlePrevMonth: () => void;
	handleNextMonth: () => void;
	handleDayClick: (day: string | number) => void;
}

export const useCalendar = ({ type }: UseCalendarProps): UseCalendarReturn => {
	const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
	const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

	const handlePrevMonth = (): void => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	const handleNextMonth = (): void => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	const handleDayClick = (day: string | number) => {
		if (day !== "") {
			const clickedDate = currentDate.date(Number(day));
			setSelectedDate(clickedDate);
			
			if (type === "calendar") {
				// calendar 타입일 때의 추가 로직
			} else if (type === "modal") {
				// modal 타입일 때의 추가 로직
			}
		}
	};

	return {
		currentDate,
		selectedDate,
		handlePrevMonth,
		handleNextMonth,
		handleDayClick,
	};
};
