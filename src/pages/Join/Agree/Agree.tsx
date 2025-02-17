import React, { useState } from "react";
import axios from "axios";
import * as c from "../../../components/Common/CommonStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import MainText from "../../components/Join/MainText";
import Check from "../../../assets/img/Join/agreeCheck.svg";
import FillCheck from "../../../assets/img/Join/agreeFillCheck.svg";
import MainText from "../../../components/Join/MainText";
import Row from "../../../components/Common/Layouts/Row";
import Button from "../../../components/DesignStuff/Button/Button";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import CheckRadioButton from "../../../components/DesignStuff/CheckRadioButton/CheckRadioButton";
import Typography from "../../../components/Common/Layouts/Typography";

const AgreeTotal = styled(Row)<{ isTotalCheck: boolean }>`
	width: 100%;
	height: 60px;
	border-radius: 12px;
	padding: 19px 20px;

	margin-top: 47px;
	margin-bottom: 32px;
	background-color: ${({ theme, isTotalCheck }) => (isTotalCheck ? theme.Yellow50 : theme.Gray50)};
	border: 1px solid ${({ theme, isTotalCheck }) => (isTotalCheck ? theme.Yellow600 : "transparent")};
`;

const AgreeSection = styled.div`
	display: flex;
	margin-bottom: 24px;
`;
const Essential = styled.div`
	font-size: 1rem;
	font-weight: 500;
	line-height: 24px;
	text-align: left;
	color: #cb3d0b;
	margin: 0px 8px;
`;
const AgreeText = styled.div`
	font-size: 1rem;
	font-weight: 500;
	line-height: 24px;
	text-align: left;
	color: #525252;
	border-bottom: 1px solid #525252;
`;
const Choice = styled(Essential)`
	color: #949494;
`;
export default function Agree() {
	const navigate = useNavigate();
	const [checkedItems, setCheckedItems] = useState({
		total: false,
		service: false,
		personal: false,
		location: false,
		marketing: false
	});

	const handleCheckAll = () => {
		const newState = {
			total: true,
			service: true,
			personal: true,
			location: true,
			marketing: true
		};
		setCheckedItems(newState);
	};

	const handleCheckItem = (key) => {
		const newState = { ...checkedItems, [key]: !checkedItems[key] };

		newState.total = newState.service && newState.personal && newState.location && newState.marketing;

		setCheckedItems(newState);
	};

	const handleNextPage = () => {
		navigate("/inputemail");
	};
	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<c.Header backgroundColor="White">
					<HeaderMenu />
				</c.Header>
				<MainText maintitle={`편리한 이용을 위해\n아래 약관에 동의해 주세요`} />
				<AgreeTotal
					gap={8}
					verticalAlign="center"
					isTotalCheck={checkedItems.total}
					onClick={() => handleCheckAll()}
				>
					<img src={checkedItems.total ? FillCheck : Check} />
					<Typography typoSize="B1_semibold" color="Gray800">{`전체 동의하기`}</Typography>
					<Typography typoSize="B2_medium" color="Gray500">{`선택 동의 포함`}</Typography>
				</AgreeTotal>
				<AgreeSection>
					<img src={checkedItems.service ? FillCheck : Check} onClick={() => handleCheckItem("service")} />
					<Essential>{`필수`}</Essential>
					<AgreeText onClick={() => navigate("/servicetxt")}>{`서비스 이용 약관`}</AgreeText>
				</AgreeSection>
				<AgreeSection>
					<img src={checkedItems.personal ? FillCheck : Check} onClick={() => handleCheckItem("personal")} />
					<Essential>{`필수`}</Essential>
					<AgreeText onClick={() => navigate("/personalinfotxt")}>{`개인정보 수집 및 이용`}</AgreeText>
				</AgreeSection>
				<AgreeSection>
					<img src={checkedItems.location ? FillCheck : Check} onClick={() => handleCheckItem("location")} />
					<Essential>{`필수`}</Essential>
					<AgreeText onClick={() => navigate("/locationtxt")}>{`위치정보 수집 및 이용`}</AgreeText>
				</AgreeSection>
				<AgreeSection>
					<img
						src={checkedItems.marketing ? FillCheck : Check}
						onClick={() => handleCheckItem("marketing")}
					/>
					<Choice>{`선택`}</Choice>
					<AgreeText onClick={() => navigate("/marketingtxt")}>{`마케팅 정보 수신 동의`}</AgreeText>
				</AgreeSection>
				<Button
					text={"동의하기"}
					isNextPage={checkedItems.service && checkedItems.personal && checkedItems.location}
					onClick={() => handleNextPage()}
				/>
			</c.ScreenComponent>
		</c.Totalframe>
	);
}
