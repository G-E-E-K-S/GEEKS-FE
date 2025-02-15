import { useNavigate } from "react-router-dom";
import * as CS from "../../../components/Common/CommonStyle";
import * as S from "./style";
import Typography from "../../../components/Common/Layouts/Typography";
import MenuList from "../../../components/MyPage/MenuList/MenuList";
import GoBack from "../../../components/Common/GoBack";
import Row from "../../../components/Common/Layouts/Row";

export default function TermPolicy() {
	const navigate = useNavigate();
	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<Row gap={8} verticalAlign="center" style={{ marginBottom: "16px" }}>
						<GoBack />
						<Typography typoSize="H3" color="Gray800">
							{"약관 및 정책"}
						</Typography>
					</Row>
				</CS.Header>
				<MenuList menuName={`서비스 이용 약관`} onClick={() => navigate("/servicetxt")} />
				<MenuList menuName={`개인정보 수집 및 이용`} onClick={() => navigate("/personalinfotxt")} />
				<MenuList menuName={`위치정보 수집 및 이용`} onClick={() => navigate("/locationtxt")} />
				<MenuList menuName={`마케팅 정보 수신 동의`} onClick={() => navigate("/marketingtxt")} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
