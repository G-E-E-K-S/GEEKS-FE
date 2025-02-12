import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import API from "../../../axios/BaseUrl";
import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import Button from "../../../components/DesignStuff/Button/Button";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import MainText from "../../../components/Join/MainText";
import ErrorPopup from "../../../components/Common/ErrorPopup";
import { useUserInfo } from "../../../store/useUserInfo";
import TopNumber from "../../../components/Join/TopNumber";

export default function InputEmail() {
	const [isDuplicate, setIsDuplicate] = useState(false);
	const [isNextPage, setIsNextPage] = useState(false);
	const navigate = useNavigate();
	const { email, setEmail } = useUserInfo();

	const handleEmailVal = (val: string) => {
		setEmail(val);
		val.length > 0 ? setIsNextPage(true) : setIsNextPage(false);
	};

	const sendEmail = () => {
		refetch().then((val) => {
			if (val.data.data === "available") navigate("/inputcode", { state: { userEmail: email } });
			if (val.data.error.code === 40901) setIsDuplicate(true);
		});
	};

	const { refetch } = useQuery({
		queryKey: ["sendEmail", email],
		queryFn: async () => {
			const res = await API.get(`/api/v1/user/check/email/${email}@sangmyung.kr`);
			return res.data;
		},
		enabled: false
	});

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<HeaderMenu />
				</CS.Header>
				<TopNumber page={1} />
				<MainText maintitle={`재학생 인증을 위해\n학교 이메일 주소를 입력해 주세요`} />
				<TextFields
					fixedText={"@sangmyung.kr"}
					maxLength={9}
					placeholder={"학번"}
					onChange={(val) => handleEmailVal(val)}
				/>
				<Button text={"인증 메일 받기"} onClick={() => sendEmail()} isNextPage={isNextPage} />
			</CS.ScreenComponent>
			<ErrorPopup
				message={`이미 가입된 이메일 주소에요`}
				bottom={`18.72`}
				setShowPopup={setIsDuplicate}
				isShowPopup={isDuplicate}
			/>
		</CS.Totalframe>
	);
}
