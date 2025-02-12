import React from "react";
import Typography from "../../../components/Common/Layouts/Typography";
import styled from "styled-components";
import { ReactComponent as RightArrowIcon } from "../.././../assets/img/Calendar/RightArrowIcon.svg";
import { ReactComponent as LeftArrowIcon } from "../.././../assets/img/Calendar/LeftArrowIcon.svg";
import { ReactComponent as DownArrowIcon } from "../.././../assets/img/Calendar/DownArrowIcon.svg";
import { Dayjs } from "dayjs";
import Row from "../../../components/Common/Layouts/Row";

interface CalendarHeaderProps {
	type: "calendar" | "modal";
	currentDate: Dayjs;
	handlePrevMonth?: () => void;
	handleNextMonth?: () => void;
	handleTodayClick?: () => void;
	toggleIsOpen?: () => void;
}

export default function CalendarHeader ({
	type,
	currentDate,
	handlePrevMonth,
	handleNextMonth,
	handleTodayClick,
	toggleIsOpen
}: CalendarHeaderProps) {
	return (
		<CalendarHeaderWrapper $type={type}>
			{type === "calendar" ? (
				<>
					<Row verticalAlign="center" gap={4}>
						<Typography typoSize="H3" color="Gray800">
							{currentDate.format("YYYY.M")}
						</Typography>
						<Button onClick={toggleIsOpen}>
							<DownArrowIcon />
						</Button>
					</Row>
					<Button onClick={handleTodayClick}>
						<Typography typoSize="B1_semibold" color="Gray800">
							오늘
						</Typography>
					</Button>
				</>
			) : (
				<>
					<Button onClick={handlePrevMonth}>
						<LeftArrowIcon />
					</Button>
					<Typography typoSize="T3_semibold" color="Gray800">
						{currentDate.format("YYYY.M")}
					</Typography>
					<Button onClick={handleNextMonth}>
						<RightArrowIcon />
					</Button>
				</>
			)}
		</CalendarHeaderWrapper>
	);
}

const CalendarHeaderWrapper = styled.div<{ $type: "calendar" | "modal" }>`
    display: flex;
    align-items: center;
    justify-content: ${({ $type }) => ($type === "calendar" ? "space-between" : "center")};
    margin-bottom: ${({ $type }) => ($type === "calendar" ? "16px" : "36px")};
    gap: ${({ $type }) => ($type === "calendar" ? "0" : "12px")};
    padding: ${({ $type }) => ($type === "calendar" ? "12px 0" : "0")};
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    background-color: transparent;
`;
