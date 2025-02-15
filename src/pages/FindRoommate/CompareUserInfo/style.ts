import styled from "styled-components";
import Row from "../../../components/Common/Layouts/Row";
import Column from "../../../components/Common/Layouts/Column";

export const UserProfileImage = styled.img`
	width: 72px;
	height: 72px;
	border-radius: 50%;
`;

export const Smoke = styled.div`
	width: 53px;
	height: 24px;
	border-radius: 6px;
	background: #efefef;
	padding: 4px 8px 4px 8px;
	color: #707070;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 18px;
	margin-left: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 13px;
`;

export const Chat = styled(Row)`
	width: 120px;
	height: 52px;
	padding: 14px 16px;
	border-radius: 12px;
	border: 1px solid #e2e2e2;
	background: ${({ theme }) => theme.White};
	&:active {
		background: #f7f7f7;
	}
`;

export const Introduce = styled.div`
	width: 100%;
	height: 34px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.Gray50};
`;

export const MatchText = styled(Row)`
	margin-top: 4.72vh;
	margin-bottom: 3.31vh;
	color: #525252;
	text-align: center;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
`;

export const EnrollBtn = styled(Column)<{ state: boolean }>`
	width: 57.42vw;
	height: 56px;
	padding: 18px 12.17vw;
	border-radius: 12px;
	background: ${({ state }) => (state == true ? "#F7F7F7" : "#ffc700")};
	position: relative;
	z-index: 20;
	&:active {
		background: ${(props) => props.state !== true && "#ECAA00"};
	}
`;
export const BottomEnroll = styled(Row)`
	position: sticky;
	padding-top: 20.17px;
	padding-left: 5.12vw;
	padding-right: 5.12vw;
	padding-bottom: calc(11.84vh - 56px - 20.17px + 12px);
	border-top: 1px solid #efefef;
	bottom: -30px;
	margin-left: calc(-50vw + 50%);
	margin-bottom: -30px;
	width: 100vw;
	background-color: #fff;
	z-index: 20;
`;

export const MyRoommateNoti = styled.div`
	background-color: #fff4cd;
	width: 100vw;
	margin-left: calc(-50vw + 50%);
	padding: 12px 8px;
	color: #865800;
	text-align: center;
	margin-bottom: 24px;
`;
export const MyRoommateNotiTxt = styled.div`
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 18px;
	margin-bottom: 2px;
`;
export const EndRoommate = styled(MyRoommateNotiTxt)`
	border-bottom: 1px solid #865800;
	width: max-content;
	margin: 0 auto;
`;
