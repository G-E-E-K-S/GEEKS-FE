import styled from "styled-components";

export const InputInfos = styled.div<{ isSelected: boolean; isError?: boolean }>`
	display: flex;
	margin-bottom: 18px;
	padding: 7px 0px 8px 0px;
	border-bottom: 2px solid ${({ isSelected, isError }) => (isError ? "#CB3D0B" : isSelected ? "#ECAA00" : "#EFEFEF")};
	color: #c4c7c7;
	font-size: 1.5rem;
	font-weight: 600;
	width: 100%;
	transition: border-color 0.3s;
`;

export const Input = styled.input`
	font-weight: 600;
	width: 100%;
	border: none;
	outline: none;
	font-size: 1.25rem;
	&::placeholder {
		color: #d0d0d0;
	}
`;
