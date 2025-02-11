import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BackIcon } from "../.././../assets/img/Calendar/BackIcon.svg";
import { ReactComponent as EditIcon } from "../.././../assets/img/Calendar/EditIcon.svg";
import Row from "../../../components/Common/Layouts/Row";
import Typography from "../../../components/Common/Layouts/Typography";
import { theme } from "../../../styles/theme";
import { useNavigate, useParams } from "react-router-dom";

interface ScheduleHeaderProps {
	pathName: string;
	isActive?: boolean;
}

export default function ScheduleHeader ({ pathName, isActive }: ScheduleHeaderProps) {
	const navigate = useNavigate();
	const { scheduleId } = useParams<{ scheduleId: string }>();

	const getTitle = () => {
		if (pathName === `/schedule/${scheduleId}/modify`) {
			return "일정 수정";
		}
		if (pathName === "/schedule/add") {
			return "일정 추가";
		}
		return "";
	};

	return (
		<ScheduleHeaderWrapper>
			<Row gap={8} verticalAlign="center">
				<Button onClick={() => navigate(-1)}>
					<BackIcon />
				</Button>

				<Typography typoSize="H3" color="Gray800">
					{getTitle()}
				</Typography>

			</Row>
			{(pathName === `/schedule/${scheduleId}/modify` || pathName === "/schedule/add") && (
				<CompleteButton $isActive={isActive ?? false} disabled={isActive ?? false}>
					<Typography typoSize="T4_semibold">완료</Typography>
				</CompleteButton>
			)}
			{pathName === `/schedule/${scheduleId}` && (
				<Button onClick={() => navigate(`/schedule/${scheduleId}/modify`)}>
					<EditIcon />
				</Button>
			)}
		</ScheduleHeaderWrapper>
	);
}

const ScheduleHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    height: 52px;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    background-color: transparent;
`;

const CompleteButton = styled(Button)<{ $isActive: boolean }>`
    border: none;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    display: flex;
    color: ${({ $isActive }) => $isActive ? theme.Gray800 : theme.Gray400};;
    background-color: ${({ $isActive }) => $isActive ? theme.Yellow500 : theme.Gray50};

    &:active {
        background-color: ${({ $isActive }) => $isActive ? theme.Yellow600 : theme.Gray50};
    }
`;
