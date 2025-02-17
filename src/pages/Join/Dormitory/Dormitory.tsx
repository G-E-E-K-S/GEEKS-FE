import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import MainText from "../../../components/Join/MainText";
import DormitoryBox from "../../../components/Join/DormitoryBox";
import Button from "../../../components/DesignStuff/Button/Button";
import { useUserInfo } from "../../../store/useUserInfo";

const DormitoryTotal = styled.div`
	margin-top: 6.16vh;
	& > :last-child {
		margin-bottom: 0px;
	}
`;

const Dormitory = () => {
	const { gender, dormitory, setDormitory } = useUserInfo();
	const navigate = useNavigate();

	const SelectDormitory = (dormitory: string) => {
		const dormitoryType = dormitory === "신관" ? "NEW" : dormitory === "구관" ? "OLD" : "HAPPY";
		setDormitory(dormitoryType);
	};

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<HeaderMenu />
				</CS.Header>
				<MainText maintitle={`어떤 기숙사에서 생활하시나요?`} />
				<DormitoryTotal>
					<DormitoryBox
						disable={false}
						dormitory={"신관"}
						onClick={() => SelectDormitory("신관")}
						isSelected={dormitory == "NEW"}
					/>
					<DormitoryBox
						disable={gender == "MALE"}
						dormitory={"구관"}
						onClick={() => SelectDormitory("구관")}
						isSelected={dormitory == "OLD"}
					/>
					<DormitoryBox
						disable={false}
						dormitory={"천안 행복기숙사"}
						onClick={() => SelectDormitory("천안 행복기숙사")}
						isSelected={dormitory == "HAPPY"}
					/>
				</DormitoryTotal>
				<Button text={"다음"} onClick={() => navigate("/finalpage")} isNextPage={Boolean(dormitory)} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
};

export default Dormitory;
