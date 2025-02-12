import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Button from "../../components/Join/JoinButton";
import sendRoommateApply from "../../assets/img/Roommate/sendRoommateApply.svg";
import Check from "../../assets/gif/check.gif";

const CheckImgToTal = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CheckImg = styled.img`
	margin-top: 9.59vh;
	width: 114px;
	height: 114px;
`;
const UserNameApply = styled.div`
	color: #333;
	text-align: center;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
	margin-top: 4.64vh;
	margin-bottom: 24px;
	white-space: pre-wrap;
`;
const ApplyDetailTxt = styled.div`
	color: #707070;
	text-align: center;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	margin-bottom: 15.38vh;
`;
const FullWidth = styled.div`
	width: 100%;
`;
const ProcessContainer = styled.img`
	width: 289px;
	height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;
const RoommateSendTxt = () => {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<CheckImgToTal>
					<CheckImg src={Check} />
				</CheckImgToTal>
				<UserNameApply>
					{location.state}
					{` 님께\n룸메이트 신청을 보냈어요`}
				</UserNameApply>
				<ApplyDetailTxt>{`상대방이 수락하면 룸메이트가 맺어져요`}</ApplyDetailTxt>
				<FullWidth>
					<ProcessContainer src={sendRoommateApply} />
				</FullWidth>
				<sendRoommateApply />
				<Button
					isNextPage={true}
					btnName={`확인`}
					handleClick={() => navigate(`/detail/details/${location.state.userId}`, { replace: true })}
				/>
			</c.ScreenComponent>
		</c.Totalframe>
	);
};
export default RoommateSendTxt;
