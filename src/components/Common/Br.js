import React from "react";
import styled from "styled-components";

const TotalBr = styled.div`
	display: flex;
	height: 12px;
	background: #f7f7f7;
	width: 100vw;
	margin-left: calc(-50vw + 50%);
	margin-top: ${(props) => props.marginTop};
	margin-bottom: ${(props) => props.marginBottom};
`;

const Br = (props) => {
	return <TotalBr marginTop={props.marginTop} marginBottom={props.marginBottom} style={props.style} />;
};
export default Br;
