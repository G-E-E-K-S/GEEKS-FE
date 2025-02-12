import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const ScheduleMark = styled.div<{ $type:string }>`
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background-color: ${({ $type }) => {
        switch ($type) {
            case "외출":
                return theme.Blue500;
            case "외박":
                return theme.Red400;
            case "공동 일정":
                return theme.Teal300;
            case "기타":
                return theme.YellowGray300;
            default:
                return "transparent";
        }
    }};
`;

export const ScheduleType = styled.div<{ $type: string }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: ${({ $type }) => {
    switch ($type) {
        case "외출":
            return theme.Blue50;
        case "외박":
            return theme.Red50;
        case "공동 일정":
            return theme.Teal50;
        case "기타":
            return theme.YellowGray50;
        default:
            return "transparent";
    }
}};
`;