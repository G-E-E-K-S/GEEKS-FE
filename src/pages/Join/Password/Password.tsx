import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import TopNumber from "../../../components/Join/TopNumber";
import JoinButton from "../../../components/Join/JoinButton";
import MainText from "../../../components/Join/MainText";
import NoneCheck from "../../../assets/img/Join/noneCheck.svg";
import Check from "../../../assets/img/Join/Check.svg";
import NoShowPwd from "../../../assets/img/Join/NoShowPwd.svg";
import ShowPwd from "../../../assets/img/Join/ShowPwd.svg";
import Loading from "../../Loading";
import Typography from "../../../components/Common/Layouts/Typography";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import Row from "../../../components/Common/Layouts/Row";

export default function Password() {
	const [pwdLen, setPwdLen] = useState(false);
	const [pwdSpecial, setpwdSpecial] = useState(false);
	const [pwdSame, setpwdSame] = useState(false);
	const [showPwd, setShowPwd] = useState(false);
	const [password, setPassword] = useState("");
	const [isNextPage, setIsNextPage] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const validatePassword = () => {
		const length = password.length;
		const specialCharRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\=\(\'\"]/;
		const sameCharRegex = /(.)\1{3,}/;

		// pwd len
		const isPwdLen = length >= 8 && length <= 15;
		setPwdLen(isPwdLen);

		// pwd 특수문자
		const hasPwdSpecial = specialCharRegex.test(password);
		setpwdSpecial(hasPwdSpecial);

		// pwd 4번반복여부
		const hasPwdSame = length > 0 && !sameCharRegex.test(password);
		setpwdSame(hasPwdSame);

		// 하단 버튼색 바뀜유무
		const isNextPage = isPwdLen && hasPwdSpecial && !hasPwdSame;
		setIsNextPage(isNextPage);
	};

	useMemo(() => {
		validatePassword();
	}, [password]);

	const checkPassword = () => {
		async function fetchPassword() {
			setLoading(true);
			try {
				const res = await API.post("/member/password", {
					password: password
				});
				if (res.data === "success") navigate("/nickname");
			} catch (error) {
				console.error(error);
			}
		}
		fetchPassword();
	};

	return loading ? (
		<Loading />
	) : (
		<c.Totalframe>
			<c.ScreenComponent>
				<HeaderMenu />
				<TopNumber page={3} />
				<MainText maintitle={`로그인 때 사용할\n비밀번호를 입력해 주세요`} />
				<Typography typoSize="B1_medium" color={"Gray500"}>
					{"아이디는 학교 이메일 주소를 입력하면 돼요"}
				</Typography>
				<TextFields
					isError={false}
					onChange={(val) => setPassword(val)}
					placeholder={"비밀번호"}
					inputType={showPwd ? "text" : "password"}
					maxLength={15}
					icon={showPwd ? ShowPwd : NoShowPwd}
					onClick={() => setShowPwd(!showPwd)}
				/>
				<Row gap={8} style={{ marginBottom: "1.42vh" }}>
					{pwdLen ? <img src={Check} /> : <img src={NoneCheck} />}
					<Typography typoSize="B2_medium" color={pwdLen ? "Teal600" : "Gray700"}>
						{"8자 이상, 15자 이하로 설정해 주세요"}
					</Typography>
				</Row>
				<Row gap={8} style={{ marginBottom: "1.42vh" }}>
					{pwdSpecial ? <img src={Check} /> : <img src={NoneCheck} />}
					<Typography typoSize="B2_medium" color={pwdSpecial ? "Teal600" : "Gray700"}>
						{"특수 문자를 사용해 주세요"}
					</Typography>
				</Row>
				<Row gap={8} style={{ marginBottom: "1.42vh" }}>
					{pwdSame ? <img src={Check} /> : <img src={NoneCheck} />}
					<Typography typoSize="B2_medium" color={pwdSame ? "Teal600" : "Gray700"}>
						{"똑같은 문자가 4번 반복되면 안돼요"}
					</Typography>
				</Row>
				<JoinButton btnName={"다음"} handleClick={() => checkPassword()} isNextPage={isNextPage} />
			</c.ScreenComponent>
		</c.Totalframe>
	);
}
