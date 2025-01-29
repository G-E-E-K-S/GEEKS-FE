import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Typography from "../../../components/Common/Layouts/Typography";
import Column from "../../../components/Common/Layouts/Column";
import Row from "../../../components/Common/Layouts/Row";
import { ScheduleMark } from "../utils/styles/ScheduleMark.styled";

interface TodaySchedulesProps {
	selectedDate: string | null;
	handleDayClick: (day: string | number) => void;
	todayScheduleDatas: { title: string; type: string; content: string; time: string }[];
}

export default function TodaySchedules ({ selectedDate, todayScheduleDatas }: TodaySchedulesProps) {
	const date = selectedDate ? dayjs(selectedDate).locale("ko") : dayjs().locale("ko");
	const formattedDate = `${date.format("M.D")} ${date.format("ddd")}`;

	return (
		<TodaySchedulesContainer>
			<Typography typoSize="T3_semibold" color="Gray800">{formattedDate}</Typography>
			<ScheduleList>
				{todayScheduleDatas?.map((schedule, index) => (
					<Column gap={2} key={index}>
						<Row gap={8} verticalAlign="center">
							<ScheduleMark $type={schedule.type} />
							<Typography typoSize="T4_medium" color="Gray500">{schedule.time}</Typography>
						</Row>
						<Column gap={2} style={{ marginLeft: "16px" }}>
							<Typography typoSize="T4_semibold" color="Gray800">{schedule.title}</Typography>
							<Typography typoSize="B2_medium" color="Gray600">{schedule?.content}</Typography>
						</Column>
					</Column>
				))}
			</ScheduleList>
		</TodaySchedulesContainer>
	);
}

const TodaySchedulesContainer = styled.div`
`;

const ScheduleList = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;