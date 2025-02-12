import GoBack from "../../../components/Common/GoBack";
import Row from "../../../components/Common/Layouts/Row";
import Typography from "../../../components/Common/Layouts/Typography";
import AlarmItem from "../../../components/Main/AlarmItem/AlarmItem";
import * as CS from "../../../components/Common/CommonStyle";

export default function Alarm() {
	return (
		<>
			<CS.Header backgroundColor="White">
				<Row gap={8} verticalAlign="center" style={{ marginBottom: "16px" }}>
					<GoBack />
					<Typography typoSize="H3" color="Gray800">
						{"알림"}
					</Typography>
				</Row>
			</CS.Header>
			<AlarmItem alarmType="roommate" />
			<Typography typoSize="B2_medium" color="Gray400" textAlign="center" style={{ marginTop: "3.5rem" }}>
				{"모든 알림은 90일간 보관돼요"}
			</Typography>
		</>
	);
}
