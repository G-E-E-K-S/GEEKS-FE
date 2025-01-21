import API from "../../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import BedIcon from "../../../assets/gif/bed.gif";
import Button from "../../../components/DesignStuff/Button/Button";
import Typography from "../../../components/Common/Layouts/Typography";
import Row from "../../../components/Common/Layouts/Row";

export default function FinalPage() {
	const navigate = useNavigate();
	const sendEveryInfo = () => {
		async function fetchUserRegist() {
			try {
				const res = await API.get("/member/register");
				if (res.status == 200) navigate("/home");
			} catch (error) {
				console.error(error);
			}
		}
		fetchUserRegist();
	};
	return (
		<CS.Totalframe
			background={`linear-gradient(180deg, rgba(255, 199, 0, 0.10) 0%, rgba(250, 250, 250, 0.10) 100%)`}
		>
			<CS.ScreenComponent>
				<Typography typoSize="H1" color="Gray800" style={{ marginTop: "14.21vh", textAlign: "center" }}>
					{"환영합니다!"}
				</Typography>
				<Typography typoSize="T3_medium" color="Gray600" style={{ marginTop: "2.84vh", textAlign: "center" }}>
					{"이제부터 긱스와 함께\n행복한 기숙사 생활 해봐요"}
				</Typography>
				<Row horizonAlign="center" verticalAlign="center">
					<MainImg src={BedIcon} />
				</Row>
				<Button text={"룸메이트 찾으러 가기"} onClick={() => sendEveryInfo()} isNextPage={true} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}

const MainImg = styled.img`
	width: 354px;
	height: 354px;
`;
