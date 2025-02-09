import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import MainText from "../../../components/Join/MainText";
import Question from "../../../assets/gif/question.gif";
import Button from "../../../components/DesignStuff/Button/Button";
import Row from "../../../components/Common/Layouts/Row";
import { useUserInfo } from "../../../store/useUserInfo";

export default function QuesText() {
	const navigate = useNavigate();
	const { nickname } = useUserInfo();

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<HeaderMenu />
				</CS.Header>
				<MainText maintitle={`${nickname}님 반가워요!\n\n기숙사 생활을 위한\n몇 가지만 여쭤볼게요`} />
				<Row horizonAlign="center" verticalAlign="center">
					<QuestionIcon src={Question} />
				</Row>
				<Button text={"다음"} isNextPage onClick={() => navigate("/major")}></Button>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}

const QuestionIcon = styled.img`
	width: 300px;
	height: 300px;
	margin-top: 3.79vh;
`;
