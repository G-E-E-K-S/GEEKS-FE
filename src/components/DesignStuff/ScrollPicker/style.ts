import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PickerWrapper = styled.div<{ $height: number }>`
    overflow-y: scroll;
    height: ${({ $height }) => `${$height}px`};

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const PickerOption = styled.div`
    padding: 20px 0;

    &:active {
        background-color: ${theme.Gray50};
        border-radius: 8px;
    }
`;
