import { useNavigate } from "react-router-dom";
import * as S from "./style";
import * as CS from "../../../components/Common/CommonStyle";
import Header from "../../../components/MyPage/Header";
import NoticeData from "../../../JSON/notice.json";
import Column from "../../../components/Common/Layouts/Column";
import Typography from "../../../components/Common/Layouts/Typography";

export default function Notice() {
	const navigate = useNavigate();
	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<Header subtitle={`공지사항`} />
				</CS.Header>
				{NoticeData.notice.map((item) => (
					<>
						<div style={{ padding: "20px 0px" }} onClick={() => navigate("/notice/details/event")}>
							<Column gap={4}>
								<Typography typoSize="T3_semibold" color="Gray800">
									{item.noticeName}
								</Typography>
								<Typography typoSize="B2_medium" color="Gray400">
									{item.noticeDate}
								</Typography>
							</Column>
						</div>
						<S.Br />
					</>
				))}
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
