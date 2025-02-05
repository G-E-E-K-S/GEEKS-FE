import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import Header from "../../../components/MyPage/Header";

import NoneCheck from "../../../assets/img/Join/noneCheck.svg";
import Check from "../../../assets/img/Join/Check.svg";
import NoShowPwd from "../../../assets/img/Join/NoShowPwd.svg";
import ShowPwd from "../../../assets/img/Join/ShowPwd.svg";
import Button from "../../../components/DesignStuff/Button/Button";
import Typography from "../../../components/Common/Layouts/Typography";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import Column from "../../../components/Common/Layouts/Column";
import Row from "../../../components/Common/Layouts/Row";
import { useUserInfo } from "../../../store/useUserInfo";

export default function ChangePassword() {
	const navigate = useNavigate();
	const { password, setPassword } = useUserInfo();
	const [prevPasswordState, setPrevPasswordState] = useState(false);
	const [prevPassword, setPrevPassword] = useState("");
	const [passwordState, setPasswordState] = useState(false);
	const [rePassword, setRePassword] = useState("");
	const [rePasswordState, setRePasswordState] = useState(false);
	const [pwdValidate, setPwdValidate] = useState({
		pwdLen: false,
		pwdSpecial: false,
		pwdSame: false
	});

	const validatePassword = () => {
		const length = password.length;
		const specialCharRegex = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\=\(\'\"]/;
		const sameCharRegex = /(.)\1{3,}/;

		// pwd len
		const isPwdLen = length >= 8 && length <= 15;

		// pwd 특수문자
		const hasPwdSpecial = specialCharRegex.test(password);

		// pwd 4번반복여부
		const hasPwdSame = length > 0 && !sameCharRegex.test(password);

		setPwdValidate({
			pwdLen: isPwdLen,
			pwdSpecial: hasPwdSpecial,
			pwdSame: hasPwdSame
		});
	};

	useEffect(() => {
		validatePassword();
	}, [password]);

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<Header subtitle={`비밀번호 변경`} />
				<Column gap={8} style={{ marginBottom: "24px" }}>
					<Typography color="Gray600" typoSize="B2_medium">{`현재 비밀번호`}</Typography>
					<TextFields
						isError={false}
						onChange={(val) => setPrevPassword(val)}
						placeholder={"현재 비밀번호"}
						inputType={prevPasswordState ? "text" : "password"}
						maxLength={15}
						icon={prevPasswordState ? ShowPwd : NoShowPwd}
						onClick={() => setPrevPasswordState(!prevPasswordState)}
					/>
				</Column>
				<Row gap={8} style={{ marginBottom: "1.42vh" }}>
					{/* TODO API통신 후 한번 더 작업*/}
					{prevPassword ? <img src={Check} /> : <img src={NoneCheck} />}
					<Typography typoSize="B2_medium" color={prevPassword ? "Teal600" : "Gray700"}>
						{"일치해요"}
					</Typography>
				</Row>
				{/* 새로운 비밀번호 입력 */}
				<Column gap={8} style={{ marginBottom: "24px", marginTop: "48px" }}>
					<Typography color="Gray600" typoSize="B2_medium">{`새로운 비밀번호`}</Typography>
					<TextFields
						isError={false}
						onChange={(val) => setPassword(val)}
						placeholder={"새로운 비밀번호"}
						inputType={passwordState ? "text" : "password"}
						maxLength={15}
						icon={passwordState ? ShowPwd : NoShowPwd}
						onClick={() => setPasswordState(!passwordState)}
					/>
				</Column>
				{/* TODO map돌리면 깔끔해질듯 */}
				<Column gap={8}>
					<Row gap={8}>
						{pwdValidate.pwdLen ? <img src={Check} /> : <img src={NoneCheck} />}
						<Typography typoSize="B2_medium" color={pwdValidate.pwdLen ? "Teal600" : "Gray700"}>
							{"8자 이상, 15자 이하로 설정해 주세요"}
						</Typography>
					</Row>
					<Row gap={8}>
						{pwdValidate.pwdSpecial ? <img src={Check} /> : <img src={NoneCheck} />}
						<Typography typoSize="B2_medium" color={pwdValidate.pwdSpecial ? "Teal600" : "Gray700"}>
							{"특수 문자를 사용해 주세요"}
						</Typography>
					</Row>
					<Row gap={8}>
						{pwdValidate.pwdSame ? <img src={Check} /> : <img src={NoneCheck} />}
						<Typography typoSize="B2_medium" color={pwdValidate.pwdSame ? "Teal600" : "Gray700"}>
							{"똑같은 문자가 4번 반복되면 안돼요"}
						</Typography>
					</Row>
				</Column>
				{pwdValidate.pwdLen && pwdValidate.pwdSame && pwdValidate.pwdSpecial && (
					<>
						<Column gap={8} style={{ marginTop: "40px", marginBottom: "24px" }}>
							<Typography color="Gray600" typoSize="B2_medium">{`새로운 비밀번호 확인`}</Typography>
							<TextFields
								isError={false}
								onChange={(val) => setRePassword(val)}
								placeholder={"새로운 비밀번호"}
								inputType={rePasswordState ? "text" : "password"}
								maxLength={15}
								icon={rePasswordState ? ShowPwd : NoShowPwd}
								onClick={() => setRePasswordState(!rePasswordState)}
							/>
						</Column>
						<Row gap={8}>
							{password === rePassword ? <img src={Check} /> : <img src={NoneCheck} />}
							<Typography typoSize="B2_medium" color={password === rePassword ? "Teal600" : "Gray700"}>
								{"일치해요"}
							</Typography>
						</Row>
					</>
				)}

				<Button
					text="변경하기"
					isNextPage={
						Boolean(prevPassword) &&
						password === rePassword &&
						Boolean(pwdValidate.pwdLen && pwdValidate.pwdSame && pwdValidate.pwdSpecial)
					}
				/>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
