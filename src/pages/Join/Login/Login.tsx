import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useMemo } from "react";
import styled from "styled-components";
import API from "../../../axios/BaseUrl";
import * as c from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import MainText from "../../../components/Join/MainText";
import ErrorPopup from "../../../components/Common/ErrorPopup";
import ApplyCancelBottomSheet from "../../../components/Common/ApplyCancleBottomSheet";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import Button from "../../../components/DesignStuff/Button/Button";
import Typography from "../../../components/Common/Layouts/Typography";
import Row from "../../../components/Common/Layouts/Row";

// IMG
import ForgetPwdImg from "../../../assets/img/Join/forgetPwd.svg";
import NoShowPwd from "../../../assets/img/Join/NoShowPwd.svg";
import ShowPwd from "../../../assets/img/Join/ShowPwd.svg";
import Automatic from "../../../assets/img/Join/automatic.svg";

const ForgetPwdIcon = styled.img`
	width: 16px;
	height: 16px;
`;
const No = styled.div`
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 24px;
	text-align: center;
	color: #8e9192;
	margin-top: 22px;
`;
const InputEmail = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isNextPage, setIsNextPage] = useState(false);
	const [isErrorPopup, setIsErrorPopUp] = useState(false);
	const [showPwd, setShowPwd] = useState(false);
	const [automaticLogIn, setAutomaticLogIn] = useState(false);
	const navigate = useNavigate();

	useMemo(() => {
		email.length > 0 && password.length ? setIsNextPage(true) : setIsNextPage(false);
	}, [email, password]);

	//TODO BE 연결
	const handleEmail = () => {
		async function fetchLogin() {
			try {
				const res = await API.post("/login/login", {
					// email: emailVal.current.value + "@sangmyung.kr",
					// password: passwordVal.current.value
				});
				if (res.data === "admin") {
					navigate("/managermain");
				}
				if (res.data === "success") {
					setAutomaticLogIn(true);
				} else {
					// setIsPwdSelected("error");
					// setIsEmailSelected("error");
					setIsErrorPopUp(true);
				}
			} catch (error) {
				console.error(error);
			}
		}
		fetchLogin();
	};

	const handlePwd = () => {
		setShowPwd(!showPwd);
	};
	const AutomaticLogin = () => {
		setAutomaticLogIn(false);
		localStorage.setItem("autologin", "true");
		navigate("/home");
	};
	const NoneAutomaticLogin = () => {
		setAutomaticLogIn(false);
		localStorage.setItem("autologin", "false");
		navigate("/home");
	};
	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<HeaderMenu />
				<MainText maintitle={"학교 이메일 주소로\n로그인 해주세요"} />
				<TextFields
					// TODO API연결 후 진행
					isError={false}
					onChange={(val) => setEmail(val)}
					fixedText={"@sangmyung.kr"}
					placeholder={"학번"}
					inputType="number"
					maxLength={9}
				/>
				<TextFields
					isError={false}
					onChange={(val) => setPassword(val)}
					placeholder={"비밀번호"}
					inputType={showPwd ? "text" : "password"}
					maxLength={15}
					icon={showPwd ? ShowPwd : NoShowPwd}
					onClick={handlePwd}
				/>
				<Row verticalAlign="center" gap={4} onClick={() => navigate("/findPassword")}>
					<Typography typoSize="B2_medium" color="Gray600">{`비밀번호를 잊어버리셨나요?`}</Typography>
					<ForgetPwdIcon src={ForgetPwdImg} />
				</Row>
				<ErrorPopup
					message={`위 이메일로 가입된 정보가 없어요`}
					bottom={`38.98`}
					setShowPopup={setIsErrorPopUp}
					isShowPopup={isErrorPopup}
				/>
				<Button text={"로그인"} isNextPage={isNextPage} onClick={() => handleEmail()} />
				<ApplyCancelBottomSheet
					height={`391px`}
					padding={`40px 20px 0px 20px`}
					isOpen={automaticLogIn}
					interaction={true}
					onClick={() => AutomaticLogin()}
					Icon={Automatic}
					message={`다음부터\n자동으로 로그인할까요?`}
					btnName={`자동 로그인 할게요`}
					applyRoommate={() => setAutomaticLogIn(false)}
				>
					<No onClick={() => NoneAutomaticLogin()}>{`안 할래요`}</No>
				</ApplyCancelBottomSheet>
			</c.ScreenComponent>
		</c.Totalframe>
	);
};

export default InputEmail;
