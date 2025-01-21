import { useState } from "react";
import API from "../../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import JoinButton from "../../../components/Join/JoinButton";
import MainText from "../../../components/Join/MainText";
import GenderBox from "../../../components/Join/GenderBox";
import Girl from "../../../assets/img/Join/girl.svg";
import SelectGirl from "../../../assets/img/Join/selectGirl.svg";
import Boy from "../../../assets/img/Join/man.svg";
import SelectBoy from "../../../assets/img/Join/selectMan.svg";
import Loading from "../../Loading";
import Button from "../../../components/DesignStuff/Button/Button";
import { useGender } from "../../../store/useGender";

const GenderTotal = styled.div`
	display: flex;
	& > :first-child {
		margin-right: 8px;
	}
`;
export default function Gender() {
	const { setUseGender } = useGender();
	const [isgirl, setIsgirl] = useState(false);
	const [isboy, setIsboy] = useState(false);
	const [isNextPage, setIsNextPage] = useState(false);
	const navigate = useNavigate();

	const SelectGender = (gender:"여자" | "남자") => {
		if (gender == "여자") {
			setIsgirl(true);
			setIsboy(false);
			setUseGender("girl");
		} else {
			setIsgirl(false);
			setIsboy(true);
			setUseGender("boy");
		}
		setIsNextPage(true);
	};

	const checkGender = () => {
		const CurGender = isgirl ? "FEMALE" : "MALE";
		async function fetchGenderPage() {
			try {
				const res = await API.get("/member/gender?gender=" + CurGender);
				if (res.data === "success") navigate("/dormitory");
			} catch (error) {
				console.error(error);
			}
		}
		fetchGenderPage();
	};

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<HeaderMenu />
				<MainText maintitle={`성별을 알려주세요`} />
				<GenderTotal>
					<GenderBox
						gender={"남자"}
						onClick={() => SelectGender("남자")}
						isSelected={isboy}
						GenderImg={Boy}
						SelectGender={SelectBoy}
					/>
					<GenderBox
						gender={"여자"}
						onClick={() => SelectGender("여자")}
						isSelected={isgirl}
						GenderImg={Girl}
						SelectGender={SelectGirl}
					/>
				</GenderTotal>
				<Button text={"다음"} onClick={() => checkGender()} isNextPage={isNextPage} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
