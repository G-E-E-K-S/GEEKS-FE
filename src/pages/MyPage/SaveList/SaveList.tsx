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
import { useQuery } from "@tanstack/react-query";
import { UserProfileType } from "../../../types/userProfileType";
import Column from "../../../components/Common/Layouts/Column";

const CheckImg = styled.img`
	cursor: pointer;
	margin-right: 1.02vw;
`;
type Bookmark = {
	bookmarkId: number;
};
export default function LifeStyle() {
	const [activeEdit, setActiveEdit] = useState(false);
	const [checkToDelete, setCheckToDelete] = useState<number[]>([]);
	const [showPopup, setShowPopup] = useState(false);
	const [saveList, setSaveList] = useState<(UserProfileType & Bookmark)[]>([]);
	const navigate = useNavigate();
	const handleEdit = () => {
		setActiveEdit(true);
	};

	const { data: saveRoommateList, isLoading } = useQuery({
		queryKey: ["saveRoommateList"],
		queryFn: async () => {
			const res = await API.get(`/api/v1/roommate/bookmark/list`);
			return res.data.data;
		}
	});

	const { refetch } = useQuery({
		queryKey: ["removeRoommateList"],
		queryFn: async () => {
			const response = await API.delete(`/api/v1/roommate/bookmark/cancel`, {
				data: { bookmarkIds: checkToDelete }
			});
			return response.data.data;
		},
		enabled: false
	});

	useEffect(() => {
		if (!saveRoommateList) return;
		setSaveList(saveRoommateList);
	}, [saveRoommateList]);

	const handleCheck = (bookmarkId: number) => {
		setCheckToDelete((value) => [...value, bookmarkId]);
		if (checkToDelete.includes(bookmarkId))
			setCheckToDelete(checkToDelete.filter((nowBookmarkId) => nowBookmarkId !== bookmarkId));
	};
	const [isDone, setIsDone] = useState(false);
	const handleDelete = () => {
		refetch().then((res) => {
			if (res.data === "success") {
				setShowPopup(true);
				setSaveList(saveList.filter((item) => !checkToDelete.includes(item.bookmarkId)));
				setIsDone(true);
			}
		});
	};

	return isLoading ? (
		<Loading />
	) : (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<Row horizonAlign="distribute">
						<Header title={"저장 목록"} />
						{activeEdit ? (
							<S.Button
								isDone={showPopup}
								onClick={() => {
									setActiveEdit(false);
									// navigate("/mypage");
								}}
							>
								<Typography typoSize="T4_semibold" color={isDone ? "Black" : "Gray400"}>
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
				<Column gap={12} width="w-full">
					{saveList?.map((userData) => (
						<Row
							horizonAlign="center"
							verticalAlign="center"
							width="w-full"
							onClick={() => handleCheck(userData.bookmarkId)}
						>
							{activeEdit && (
								<CheckImg src={checkToDelete.includes(userData.bookmarkId) ? Check : NoCheck} />
							)}
							<UserProfile
								activeCheck={checkToDelete.includes(userData.bookmarkId)}
								hasPadding
								image={userData.image}
								ID={userData.studentNum}
								major={userData.major}
								nickName={userData.nickname}
								smoke={userData.smoke}
							/>
						</Row>
					))}
				</Column>
				{activeEdit && (
					<Button text="삭제하기" isNextPage={checkToDelete.length > 0} onClick={() => handleDelete()} />
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
