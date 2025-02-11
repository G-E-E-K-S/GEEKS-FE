import { ScheduleMark } from "../../../Calendar/utils/styles/ScheduleMark.styled";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const TYPES = [
	{ id: "외출", option: <StyledDiv><ScheduleMark $type="외출" />외출</StyledDiv> },
	{ id: "외박", option: <StyledDiv><ScheduleMark $type="외박" />외박</StyledDiv> },
	{ id: "공동 일정", option: <StyledDiv><ScheduleMark $type="공동 일정" />공동 일정</StyledDiv> },
	{ id: "기타", option: <StyledDiv><ScheduleMark $type="기타" />기타</StyledDiv> }
];

export const ALARMS = [
	{ id: 0, option: "없음" },
	{ id: 1, option: "10분 전 알림" },
	{ id: 2, option: "20분 전 알림" },
	{ id: 3, option: "30분 전 알림" },
	{ id: 4, option: "40분 전 알림" },
	{ id: 5, option: "50분 전 알림" },
	{ id: 6, option: "1시간 전 알림" }
];

export const TIMES = Array.from({ length: 48 }, (_, i) => {
	const hours = String(Math.floor(i / 2)).padStart(2, "0");
	const minutes = i % 2 === 0 ? "00" : "30";
	return { id: i, option: `${hours}:${minutes}` };
});