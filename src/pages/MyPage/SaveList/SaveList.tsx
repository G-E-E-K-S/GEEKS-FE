import { useState, useEffect } from "react";
import API from "../../../axios/BaseUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import * as S from "./style";
import Header from "../../../components/MyPage/Header/Header";
import JoinButton from "../../../components/Join/JoinButton";
import Popup from "../../../components/Common/Popup";
import Edit from "../../../assets/img/MyPage/edit.svg";
import Profile from "../../../assets/img/MyPage/basicProfile.svg";
import NoCheck from "../../../assets/img/MyPage/noCheck.svg";
import Check from "../../../assets/img/MyPage/check.svg";
import Loading from "../../Loading";
import Row from "../../../components/Common/Layouts/Row";
import Typography from "../../../components/Common/Layouts/Typography";
import Button from "../../../components/DesignStuff/Button/Button";
import UserProfile from "../../../components/Main/UserProfile/UserProfile";
import Confirm from "../../../components/DesignStuff/Confirm/Confirm";

const CheckImg = styled.img`
	cursor: pointer;
	margin-right: 1.02vw;
`;
export default function LifeStyle() {
	const [activeEdit, setActiveEdit] = useState(false);
	const [checkUserName, setCheckUserName] = useState<string[]>([]);
	const [showPopup, setShowPopup] = useState(false);
	const [saveList, setSaveList] = useState([]);
	const [isDone, setIsDone] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handleEdit = () => {
		setActiveEdit(true);
	};

	const handleDelete = () => {
		if (checkUserName.length > 0) {
			// async function fetchDeleteSaveList() {
			// 	try {
			// 		setLoading(true);
			// 		const res = await API.get("/roommate/removesave?nickname=" + checkUserName);
			// 		if (res.status == "200") {
			// 			setLoading(false);
			// 			setShowPopup(true);
			// 			setSaveList(saveList.filter((data) => !checkUserName.includes(data.nickname)));
			// 			setCheckUserName([]);
			// 			setIsDone(!isDone);
			// 		}
			// 		console.log(res);
			// 	} catch (e) {
			// 		console.log(e);
			// 	}
			// }
			// fetchDeleteSaveList();
		}
		setSaveList(saveList.filter((list) => list !== checkUserName));
	};
	useEffect(() => {
		async function fetchSaveList() {
			try {
				const res = await API.get("/roommate/savelist");
				setSaveList(res.data);
				setLoading(false);
			} catch (e) {
				console.log(e);
			}
		}
		fetchSaveList();
	}, []);

	const handleCheck = (userName: string) => {
		setCheckUserName((value) => [...value, userName]);
		if (checkUserName.includes(userName)) setCheckUserName(checkUserName.filter((nowName) => nowName !== userName));
	};

	return loading ? (
		<Loading />
	) : (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<Row horizonAlign="distribute">
						<Header title={"저장 목록"} />
						{activeEdit ? (
							<S.Button isDone={isDone} onClick={() => setActiveEdit(false)}>
								<Typography typoSize="T4_semibold" color="Gray400">
									{"완료"}
								</Typography>
							</S.Button>
						) : (
							<S.EditImg src={Edit} onClick={() => handleEdit()} />
						)}
						{/* <Confirm confirmName={"변경 사항이 저장되지 않았어요\n이대로 저장할까요?"} /> */}
					</Row>
				</CS.Header>
				{/* total save list */}
				<Typography
					typoSize="B2_medium"
					color="Gray500"
					style={{ margin: "16px 0 12px 0" }}
				>{`총 ${saveList.length}명`}</Typography>
				{saveList.map((userData) => (
					// TODO API연결 후
					// <Row onClick={activeEdit ? () => handleCheckIndex(userData.nickname) : null}>
					// 	{activeEdit && <CheckImg src={checkUserName.includes(userData.nickname) ? Check : NoCheck} />}
					// 	<OtherProfile
					// 		activeCheck={checkUserName.includes(userData.nickname)}
					// 		score={userData.point}
					// 		userprofile={userData.photoName}
					// 		nickName={userData.nickname}
					// 		major={userData.major}
					// 		id={userData.studentID}
					// 		intro={userData.introduction}
					// 		onClick={() => navigate("/detail/details/" + userData.userId)}
					// 	/>
					// </Row>
					<></>
				))}
				<Row horizonAlign="center" verticalAlign="center" onClick={() => handleCheck("test")}>
					{activeEdit && <CheckImg src={checkUserName.includes("test") ? Check : NoCheck} />}
					<UserProfile
						image={null}
						ID={18}
						activeCheck={checkUserName.includes("test")}
						intro="gkdld"
						smoke="NONSMOKER"
						major="hi"
						score={39}
						nickName="test"
						onClick={() => navigate("/detail/details/" + 19)}
					/>
				</Row>
				{activeEdit && (
					<Button text="삭제하기" isNextPage={checkUserName.length > 0} onClick={() => handleDelete()} />
				)}
				<Popup
					bottom={`20.24`}
					isShowPopup={showPopup}
					setShowPopup={setShowPopup}
					message={"성공적으로 삭제되었습니다"}
				/>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
