import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import API from "../../../axios/BaseUrl";
import * as S from "./style";
import * as CS from "../../../components/Common/CommonStyle";
import Condition from "../../../components/Roommate/Condition";
import NavigationBar from "../../../components/Main/NavigationBar/NavigationBar";
import basicProfile from "../../../assets/img/MyPage/basicProfile.svg";
import BlurImg from "../../../assets/img/Roommate/blurImg.svg";
import Loading from "../../Loading";
import Typography from "../../../components/Common/Layouts/Typography";
import ChoiceCondition from "../../../components/Roommate/ChoiceCondition";
import BottomSheet from "../../../components/DesignStuff/BottomSheet/BottomSheet";
import Header from "../../../components/Main/Header/Header";
import UserProfile from "../../../components/Main/UserProfile/UserProfile";
import Column from "../../../components/Common/Layouts/Column";
import { UserProfileType } from "../../../types/userProfileType";

export default function FindRoommate() {
	const [isOpen, setIsOpen] = useState(false);
	const [userData, setUserData] = useState<UserProfileType[]>([]);
	const [isExist, setIsExist] = useState(true);

	const navigate = useNavigate();

	const { data, isLoading } = useQuery({
		queryKey: ["findRoommate"],
		queryFn: async () => {
			const response = await API.get(`/api/v1/matching/points`);
			return response.data.data;
		}
	});

	useMemo(() => {
		if (!data) return;
		setUserData(data.opponentInfos);
		setIsExist(data.exists);
	}, [data]);

	return isLoading ? (
		<Loading />
	) : (
		<CS.Totalframe background={`linear-gradient(180deg, #FFF 0%, #F7F7F7 71%)`}>
			<CS.ScreenComponent navigation={true}>
				<CS.Header backgroundColor={isOpen ? "linear-gradient(180deg, #FFF 0%, #F7F7F7 71%)" : "White"}>
					<Header />
				</CS.Header>
				<Typography typoSize="H3" color="Gray800" style={{ marginBottom: "3.79vh" }}>
					{"내가 원하는 기준으로\n룸메이트를 찾아보세요"}
				</Typography>
				{/* <S.ConditionScroll onClick={() => setIsOpen(true)}>
					<Condition condition={`전공`} />
					<Condition condition={`학번`} />
					<Condition condition={`흡연`} />
					<Condition condition={`잠버릇`} />
					<Condition condition={`외출`} />
					<Condition condition={`장소`} />
					<Condition condition={`성향`} />
				</S.ConditionScroll> */}
				{isExist ? (
					<Column gap={12}>
						{userData.map((user) => (
							<UserProfile
								smoke={user.smoke}
								image={user.image}
								nickName={user.nickname}
								major={user.major}
								ID={user.studentNum}
								score={user.point}
								hasBackground
								intro={user.introduction ?? "this is sample"}
								hasPadding
								onClick={() => navigate(`/detail/details/${user.matchingPointId}/${user.opponentId}`)}
							/>
						))}
					</Column>
				) : (
					<>
						<S.BlurIcon src={BlurImg} />
						<S.EnrollLifeStyle>
							<Typography typoSize={"B1_medium"} color={"Gray800"} textAlign="center">
								{"생활 습관을 등록하면\n나와 맞는 룸메이트를 찾을 수 있어요"}
							</Typography>
							<S.EnroolLifeStyleBtn
								onClick={() => navigate("/lifestyle")}
							>{`생활 습관 등록하러 가기`}</S.EnroolLifeStyleBtn>
						</S.EnrollLifeStyle>
					</>
				)}
			</CS.ScreenComponent>
			<BottomSheet height={"84.83vh"} isOpen={isOpen}>
				<ChoiceCondition onClick={() => setIsOpen(false)} />
			</BottomSheet>
			{!isOpen && <NavigationBar type={`rommate`} />}
		</CS.Totalframe>
	);
}
