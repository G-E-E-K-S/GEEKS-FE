import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";
import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import JoinButton from "../../../components/Join/JoinButton";
import MainText from "../../../components/Join/MainText";
import NoneCheck from "../../../assets/img/Join/noneCheck.svg";
import Check from "../../../assets/img/Join/Check.svg";
import NoShowPwd from "../../../assets/img/Join/NoShowPwd.svg";
import ShowPwd from "../../../assets/img/Join/ShowPwd.svg";
import Typography from "../../../components/Common/Layouts/Typography";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import Row from "../../../components/Common/Layouts/Row";
import { useUserInfo } from "../../../store/useUserInfo";
import TopNumber from "../../../components/Join/TopNumber";

export default function Password() {
	const [showPwd, setShowPwd] = useState(false);
	const [isNextPage, setIsNextPage] = useState(false);
	const [pwdValidate, setPwdValidate] = useState({
		pwdLen: false,
		pwdSpecial: false,
		pwdSame: false
	});
	const navigate = useNavigate();
	const { password, setPassword } = useUserInfo();

	const validatePassword = () => {
		//해당 부분 set처리 말고 객체로 빼서 값 저장하는거 고려.
		//불필요한랜더링있을 필요 없을듯
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

		// 하단 버튼색 바뀜유무
		console.log(password, isPwdLen, hasPwdSpecial, hasPwdSame);

		const isNextPage = isPwdLen && hasPwdSpecial && hasPwdSame;
		setIsNextPage(isNextPage);
	};

	useEffect(() => {
		validatePassword();
	}, [password]);

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<HeaderMenu />
				</CS.Header>
				<TopNumber page={3} />
				<MainText maintitle={`로그인 시 사용할\n비밀번호를 입력해 주세요`} />
				<TextFields
					isError={false}
					onChange={(val) => setPassword(val)}
					placeholder={"비밀번호"}
					inputType={showPwd ? "text" : "password"}
					maxLength={15}
					icon={showPwd ? ShowPwd : NoShowPwd}
					onClick={() => setShowPwd(!showPwd)}
				/>
				<Row gap={8} style={{ marginBottom: "8px", marginTop: "32px" }}>
					{pwdValidate.pwdLen ? <img src={Check} /> : <img src={NoneCheck} />}
					<Typography typoSize="B2_medium" color={pwdValidate.pwdLen ? "Teal600" : "Gray700"}>
						{"8자 이상, 15자 이하로 설정해 주세요"}
					</Typography>
				</Row>
				<Row gap={8} style={{ marginBottom: "8px" }}>
					{pwdValidate.pwdSpecial ? <img src={Check} /> : <img src={NoneCheck} />}
					<Typography typoSize="B2_medium" color={pwdValidate.pwdSpecial ? "Teal600" : "Gray700"}>
						{"특수 문자를 사용해 주세요"}
					</Typography>
				</Row>
				<Row gap={8} style={{ marginBottom: "8px" }}>
					{pwdValidate.pwdSame ? <img src={Check} /> : <img src={NoneCheck} />}
					<Typography typoSize="B2_medium" color={pwdValidate.pwdSame ? "Teal600" : "Gray700"}>
						{"똑같은 문자가 4번 반복되면 안돼요"}
					</Typography>
				</Row>
				<JoinButton btnName={"다음"} handleClick={() => navigate("/nickname")} isNextPage={isNextPage} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
