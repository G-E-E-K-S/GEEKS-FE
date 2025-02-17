import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";
import * as c from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import MainText from "../../../components/Join/MainText";
import ErrorPopup from "../../../components/Common/ErrorPopup";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import Button from "../../../components/DesignStuff/Button/Button";
import { useUserInfo } from "../../../store/useUserInfo";
import { useQuery } from "@tanstack/react-query";
import TopNumber from "../../../components/Join/TopNumber";

const NickName = () => {
	const [isNextPage, setIsNextPage] = useState(false);
	const [isPopup, setIsPopup] = useState(false);
	const [errorPopup, setErrorPopup] = useState(false);
	const letterCnt = useRef(0);
	const { nickname, setNickname } = useUserInfo();
	const navigate = useNavigate();

	const handleInputChange = (value: string) => {
		const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/;
		if (value.length > 0 && !regex.test(value)) {
			setErrorPopup(true);
		}
		setNickname(value);
		const length = value.length;
		letterCnt.current = length;
		length > 0 && regex.test(value) ? setIsNextPage(true) : setIsNextPage(false);
	};

	const { refetch } = useQuery({
		queryKey: ["useNickName", nickname],
		queryFn: async () => {
			const res = await API.get(`/api/v1/user/check/nickname/` + nickname);
			return res.data;
		},
		enabled: false
	});

	useEffect(() => {
		const timeId = setTimeout(() => {
			refetch();
		}, 800);
		return () => {
			clearTimeout(timeId);
		};
	}, [nickname]);

	useEffect(() => {
		setNickname("");
	}, []);

	return (
		<c.Totalframe>
			<c.ScreenComponent>
				<c.Header backgroundColor="White">
					<HeaderMenu />
				</c.Header>
				<TopNumber page={4} />
				<MainText maintitle={`회원님을 표현할\n닉네임을 알려주세요`} />
				<TextFields
					maxLength={8}
					onChange={(val) => handleInputChange(val)}
					inputLen={nickname.length}
					totalNum={8}
				/>
				<ErrorPopup
					message={`이미 사용 중인 닉네임이에요`}
					setShowPopup={setIsPopup}
					isShowPopup={isPopup}
					bottom={"18.72"}
				/>

				<ErrorPopup
					message={`닉네임은 한글 / 숫자 / 영어만 입력이 가능해요`}
					setShowPopup={setErrorPopup}
					isShowPopup={errorPopup}
					bottom={"18.72"}
				/>
				<Button text={"다음"} onClick={() => navigate("/questiontext")} isNextPage={isNextPage} />
			</c.ScreenComponent>
		</c.Totalframe>
	);
};

export default NickName;
