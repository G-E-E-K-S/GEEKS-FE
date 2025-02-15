import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import MainText from "../../components/Join/MainText";
import Row from "../../components/Common/Layouts/Row";
import Typography from "../../components/Common/Layouts/Typography";

const Choice = styled.div`
	font-size: 24px;
	font-weight: 700;
	line-height: 32px;
	text-align: left;
	color: #b7b7b7;
	margin-right: 8px;
	margin-top: 3.79vh;
`;
const Title = styled.div`
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 18px;
	text-align: left;
	color: #707070;
	margin-bottom: 8px;
	margin-top: 28px;
`;
const Content = styled.div`
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 16px;
	color: #707070;
	text-align: left;
	white-space: pre-wrap;
`;
const TopContent = styled(Content)`
	margin-top: 40px;
`;
const LastContent = styled(Content)`
	margin-top: 28px;
`;

const Agree = () => {
	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<c.Header backgroundColor="White">
					<HeaderMenu />
				</c.Header>
				<Row verticalAlign="center" gap={8}>
					<Typography typoSize="H3" color="Gray400">{`선택`}</Typography>
					<Typography typoSize="H3" color="Gray800">{`마케팅 정보 수신 동의`}</Typography>
				</Row>
				<TopContent>{`긱스는 마케팅 정보 수신과 관련하여 아래와 같이 이용자의 개인정보를 수집, 이용합니다.`}</TopContent>
				<Title>{`수집 및 이용 항목`}</Title>
				<Content>{`앱 내 알림`}</Content>
				<Title>{`수집 및 이용 목적`}</Title>
				<Content>{`서비스 내에서 제공하는 편의 기능, 이벤트, 신규 서비스 안내`}</Content>
				<Title>{`보유 및 이용 기간`}</Title>
				<Content>{`회원 탈퇴 시 혹은 동의 철회 시까지`}</Content>
				<LastContent>{`이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 다만 동의 거부 시 서비스에서 제공하는 혜택, 이벤트, 상품정보 등의 안내를 받으실 수 없습니다.`}</LastContent>
			</c.ScreenComponent>
		</c.Totalframe>
	);
};

export default Agree;
