import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import MainText from "../../../components/Join/MainText";
import GenderBox from "../../../components/Join/GenderBox";
import Girl from "../../../assets/img/Join/girl.svg";
import SelectGirl from "../../../assets/img/Join/selectGirl.svg";
import Boy from "../../../assets/img/Join/man.svg";
import SelectBoy from "../../../assets/img/Join/selectMan.svg";
import Row from "../../../components/Common/Layouts/Row";
import Button from "../../../components/DesignStuff/Button/Button";
import { useUserInfo } from "../../../store/useUserInfo";

export default function Gender() {
	const [isNextPage, setIsNextPage] = useState(false);
	const { gender, setGender } = useUserInfo();
	const navigate = useNavigate();

	const SelectGender = (gender: "MALE" | "FEMALE") => {
		gender === "FEMALE" ? setGender("FEMALE") : setGender("MALE");
		setIsNextPage(true);
	};

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<HeaderMenu />
				<MainText maintitle={`성별을 알려주세요`} />
				<Row gap={10}>
					<GenderBox
						gender={"남자"}
						onClick={() => SelectGender("MALE")}
						isSelected={gender === "MALE"}
						GenderImg={Boy}
						SelectGender={SelectBoy}
					/>
					<GenderBox
						gender={"여자"}
						onClick={() => SelectGender("FEMALE")}
						isSelected={gender === "FEMALE"}
						GenderImg={Girl}
						SelectGender={SelectGirl}
					/>
				</Row>
				<Button text={"다음"} onClick={() => navigate("/dormitory")} isNextPage={isNextPage} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
