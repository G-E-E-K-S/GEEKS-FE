import React, { useState, useRef } from "react";
import API from "../../../axios/BaseUrl";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../../components/Common/CommonStyle";
import Header from "../../../components/Join/Header";

import Loading from "../../Loading";
import Button from "../../../components/DesignStuff/Button/Button";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import MainText from "../../../components/Join/MainText";
import TopNumber from "../../../components/Join/TopNumber";

export default function InputEmail() {
	const [isSelected, setIsSelected] = useState(false);
	const [isNextPage, setIsNextPage] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleEmailVal = (val: string) => {
		val.length > 0 ? setIsNextPage(true) : setIsNextPage(false);
	};

	//axios
	const handleEmail = () => {
		async function fetchEmailPage() {
			// try {
			// 	const res = await API.get("/mail/send?email=" + emailVal.current.value + "@sangmyung.kr");
			// 	res.data === "duplicate"
			// 		? navigate("/alreadyregist", { state: { userEmail: emailVal.current.value } })
			// 		: navigate("/inputcode", { state: { userEmail: emailVal.current.value } });
			// } catch (error) {
			// 	console.error(error);
			// }
		}
		fetchEmailPage();
	};

	return loading ? (
		<Loading />
	) : (
		<c.Totalframe>
			<c.ScreenComponent>
				<HeaderMenu />
				<TopNumber page={1} />
				<MainText maintitle={`재학생 인증을 위해\n학교 이메일 주소를 입력해 주세요`} />
				<TextFields
					fixedText={"@sangmyung.kr"}
					maxLength={9}
					placeholder={"학번"}
					onChange={(val) => handleEmailVal(val)}
					onClick={() => setIsSelected(true)}
				/>
				<Button text={"인증 메일 받기"} onClick={() => handleEmail()} isNextPage={isNextPage} />
			</c.ScreenComponent>
		</c.Totalframe>
	);
}
