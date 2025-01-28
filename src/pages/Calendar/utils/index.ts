import dayjs, { Dayjs } from "dayjs";

export const getDaysInMonth = (currentDate: Dayjs): (string | number)[][] => {
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

export const isToday = (currentDate: Dayjs, day: string | number): boolean => {
	if (day === "") return false;
	const date = currentDate.date(Number(day));
	return dayjs().format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
};