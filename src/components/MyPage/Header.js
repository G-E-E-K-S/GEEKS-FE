import React from "react";
import styled from "styled-components";
import GoBack from "../Common/GoBack";
import SubTitle from "../Main/SubTitle";

const TotalHeader = styled.div`
	margin-bottom: 16px;
	display: flex;
	margin-top: 8px;
	padding: 10px 0;
`;
const Header = (props) => {
	return (
		<TotalHeader marginBottom={props.marginBottom}>
			<GoBack />
			<SubTitle>{props.subtitle}</SubTitle>
		</TotalHeader>
	);
};
export default Header;
