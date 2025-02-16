import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "moment/locale/ko";
import API from "../../../axios/BaseUrl";

import * as S from "./style";
import * as CS from "../../../components/Common/CommonStyle";
import Header from "../../../components/MyPage/Header";
import Popup from "../../../components/Common/Popup";
import Typography from "../../../components/Common/Layouts/Typography";
import { useUserInfo } from "../../../store/useUserInfo";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

export default function SettingUserInfo() {
	// const { email } = useUserInfo();
	const [email, setEmail] = useState("");
	const [myDetailInfo, setMyDetailInfo] = useState({
		email: "",
		enRollDate: ""
	});

	const { data } = useQuery({
		queryKey: ["myInfo"],
		queryFn: async () => {
			const response = await API.get(`/api/v1/user/info`);
			return response.data.data;
		}
	});

	useMemo(() => {
		if (!data) return;
		setMyDetailInfo({
			email: data.email,
			enRollDate: data.createdDate
		});
	}, [data]);

	const [showPopup, setShowPopup] = useState(false);
	const navigate = useNavigate();

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<Header subtitle={`회원 정보 설정`} />
				</CS.Header>
				<Typography typoSize="B2_medium" color="Gray500">
					{"계정 정보"}
				</Typography>
				{/* Email */}
				<S.AccountInfoBox>
					<Typography typoSize="T3_semibold" color="Gray800">
						{"아이디(이메일)"}
					</Typography>
					<Typography typoSize="B1_medium" color="Gray600">
						{myDetailInfo.email}
					</Typography>
				</S.AccountInfoBox>
				{/* Password */}
				<S.AccountInfoBox>
					<Typography typoSize="T3_semibold" color="Gray800">
						{"비밀번호"}
					</Typography>
					<S.AccountBtn onClick={() => navigate("/changepassword")}>{"변경하기"}</S.AccountBtn>
				</S.AccountInfoBox>
				{/* when we account */}
				<S.AccountInfoBox>
					<Typography typoSize="T3_semibold" color="Gray800">
						{"가입 날짜"}
					</Typography>
					<Typography typoSize="B1_medium" color="Gray600">
						{moment(myDetailInfo.enRollDate).format("YYYY.MM.DD")}
					</Typography>
				</S.AccountInfoBox>
				<Popup
					bottom={`9.95`}
					isShowPopup={showPopup}
					setShowPopup={setShowPopup}
					message={`비밀번호가 변경되었습니다`}
				/>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
