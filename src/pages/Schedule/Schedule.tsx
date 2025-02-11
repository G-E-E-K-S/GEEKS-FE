import React from "react";
import * as c from "../../components/Common/CommonStyle";
import ScheduleHeader from "./ui/ScheduleHeader";
import { useLocation } from "react-router-dom";
import { ScheduleMark, ScheduleType } from "../Calendar/utils/styles/ScheduleMark.styled";
import Typography from "../../components/Common/Layouts/Typography";
import Column from "../../components/Common/Layouts/Column";
import Row from "../../components/Common/Layouts/Row";

const dummyScheduleData = {
	// 스케줄 날짜 데이터?
	scheduleId: 15,
	title: "동아리 회식",
	type: "기타",
	content: "동아리 회식",
	time: "18:00 - 20:00",
	alarm: "10분 전 알림"
};

export default function Schedule () {
	// api 요청
	const location = useLocation();

	return (
		<c.Totalframe>
			<c.ScreenComponent navigation={false}>
				<c.SubScreen>
					<ScheduleHeader pathName={location.pathname} />
					<Column>
						<ScheduleType $type={dummyScheduleData.type}>
							<ScheduleMark $type={dummyScheduleData.type} />
							<Typography typoSize="B2_medium">{dummyScheduleData.type}</Typography>
						</ScheduleType>
						<Column gap={16} style={{ margin: "24px 0 48px 0" }}>
							<Row gap={8}>
								<Typography typoSize="T4_medium">2.3 월</Typography>
								<Typography typoSize="T4_medium" color="Gray500">{dummyScheduleData.time}</Typography>
							</Row>
							<Column gap={6}>
								<Typography typoSize="T2_semibold" color="Gray800">{dummyScheduleData.title}</Typography>
								<Typography typoSize="B1_medium" color="Gray600">{dummyScheduleData?.content}</Typography>
							</Column>
						</Column>
						<Row gap={12}>
							<Typography typoSize="B1_medium" color="Gray400">알림</Typography>
							<Typography typoSize="B1_medium" color="Gray800">{dummyScheduleData.alarm}</Typography>
						</Row>
					</Column>
				</c.SubScreen>
			</c.ScreenComponent>
		</c.Totalframe>
	);
}