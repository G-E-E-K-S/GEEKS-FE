import React, { useState } from "react";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import PersonalImg from "../../assets/img/Join/personal.svg";

const LocationTxt = () => {
	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<c.Header backgroundColor="White">
					<HeaderMenu />
				</c.Header>
				<img style={{width:"100%"}} src={PersonalImg} />
			</c.ScreenComponent>
		</c.Totalframe>
	);
};

export default LocationTxt;
