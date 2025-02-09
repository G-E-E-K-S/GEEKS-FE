import styled from "styled-components";
import Row from "../../../components/Common/Layouts/Row";

export const FindIcon = styled.img`
	width: 120px;
	height: 120px;
`;

export const NotiSendAlarm = styled.div`
	display: none;
	position: absolute;
	width: 205px;
	height: 40px;
	left: 0px;
	bottom: 62px;
	background: #484848;
	color: white;
	border-radius: 5px;
	padding: 12px 12.8px;

	&::after {
		border-top: 10px solid #484848;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 0px solid transparent;
		content: "";
		position: absolute;
		top: 40px;
		left: 160px;
	}
`;

export const EnrollRule = styled(Row)`
	width: 100%;
	height: 56px;
	border-radius: 12px;
	background: #ffc700;
`;
