import React, { useState } from "react";
import Header from "../../components/MyPage/Header";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import { useNavigate } from "react-router-dom";

const NoticeName = styled.div`
	font-size: 1.25rem;
	font-weight: 600;
	line-height: 28px;
	text-align: left;
	white-space: pre-wrap;
`;
const Event = styled(NoticeName)`
	color: #d8384b;
	margin-right: 12px;
	white-space: nowrap;
`;
const NoticeDate = styled.div`
	font-size: 0.874rem;
	font-weight: 500;
	line-height: 18px;
	color: #b7b7b7;
	margin-top: 8px;
`;
const Line = styled.div`
	width: 100%;
	height: 1px;
	background: #efefef;
	margin-bottom: 24px;
	margin-top: 24px;
`;
const NoticeContent = styled.div`
	font-size: 0.95rem;
	font-weight: 500;
	line-height: 22px;
	text-align: left;
	color: #525252;
	white-space: pre-wrap;
`;
const NoticeBold = styled(NoticeContent)`
	font-weight: 700;
	margin-top: 20px;
`;
const Notice = styled(NoticeContent)`
	white-space: pre-wrap;
	margin-top: ${(props) => props.isFirst && "20px"};
`;
const Important = styled(Notice)`
	color: #cb3d0b;
`;
const GoEvent = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	font-size: 1.125rem;
	font-weight: 600;
	text-align: center;
	background-color: #ffc700;
	margin-top: 24px;
`;
const EventNoticeDetail = () => {
	const navigate = useNavigate();
	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<c.Header backgroundColor="White">
					<Header />
				</c.Header>
				<c.Flex>
					<NoticeName>{`긱스가 드디어 오픈했어요!`}</NoticeName>
				</c.Flex>
				<NoticeDate>{`2025.02.17`}</NoticeDate>
				<Line />
				<NoticeContent>
					<Notice
						isFirst={true}
					>{`나에게 딱 맞는 룸메이트를 찾을 수 있는 ‘긱스’가 드디어 오픈했어요!\n\n룸메이트 매칭 뿐만 아니라 다양한 기능들을 준비하고 있으니 많이 기대해 주세요!`}</Notice>
				</NoticeContent>
			</c.ScreenComponent>
		</c.Totalframe>
	);
};
export default EventNoticeDetail;
