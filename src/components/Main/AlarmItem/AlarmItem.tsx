import Column from "../../Common/Layouts/Column";
import Row from "../../Common/Layouts/Row";
import Typography from "../../Common/Layouts/Typography";
import Roommate from "../../../assets/img/Home/Alarm/roommate.svg";
import Chat from "../../../assets/img/Home/Alarm/chat.svg";
import Service from "../../../assets/img/Home/Alarm/service.svg";
import Calendar from "../../../assets/img/Home/Alarm/calendar.svg";
import * as S from "./style";

// TODO BE에서 정해준 타입으로 변경해야함
interface AlarmType {
	alarmType: "roommate" | "chat" | "service" | "calendar";
}

export default function AlarmItem({ alarmType }: AlarmType) {
	const alarmIcons: Record<AlarmType["alarmType"], string> = {
		roommate: Roommate,
		chat: Chat,
		service: Service,
		calendar: Calendar
	};

	return (
		<S.AlarmWrapper gap={12}>
			<img src={alarmIcons[alarmType]} />
			<Column gap={4} width="w-full">
				<Row horizonAlign="distribute" width="w-full">
					<Typography typoSize="T3_semibold" color="Gray800">
						{"룸메이트 신청 수락"}
					</Typography>
					<Typography typoSize="B3_medium" color="Gray400">
						{"2분전"}
					</Typography>
				</Row>
				<Typography typoSize="B2_medium" color="Gray600">
					{"‘토윤’ 님이 룸메이트 신청을 수락했어요."}
				</Typography>
			</Column>
		</S.AlarmWrapper>
	);
}
