import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./style";
import * as CS from "../../../components/Common/CommonStyle";
import Typography from "../../../components/Common/Layouts/Typography";
import Column from "../../../components/Common/Layouts/Column";
import Button from "../../../components/DesignStuff/Button/Button";
import Row from "../../../components/Common/Layouts/Row";

import sendRoommateApply from "../../../assets/img/Roommate/sendRoommateApply.svg";
import Check from "../../../assets/gif/check.gif";

export default function RoommateSendText() {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<Row horizonAlign="center" verticalAlign="center" width="w-full" style={{ marginBottom: "30.17px" }}>
					<S.CheckImg src={Check} />
				</Row>
				<Column gap={24} horizonAlign="center" verticalAlign="center">
					<Typography typoSize="H3" color="Gray800" textAlign="center">
						{`${location.state}님께\n룸메이트 신청을 보냈어요`}
					</Typography>
					<Typography
						typoSize="T4_medium"
						color="Gray600"
					>{`상대방이 수락하면 룸메이트가 맺어져요`}</Typography>
				</Column>
				<Row horizonAlign="center" verticalAlign="center" width="w-full" style={{ marginTop: "131px" }}>
					<img src={sendRoommateApply} style={{ width: "289px", height: "52px" }} />
				</Row>
				<Button isNextPage={true} text="확인" onClick={() => navigate(`/roommate`)} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
