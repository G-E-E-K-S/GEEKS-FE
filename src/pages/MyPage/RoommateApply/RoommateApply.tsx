import { useMemo, useState } from "react";
import "moment/locale/ko";
import moment from "moment";
import API from "../../../axios/BaseUrl";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import * as S from "./style";
import Header from "../../../components/MyPage/Header/Header";
import OtherProfileApply from "../../../components/MyPage/OtherProfileApply";
import Popup from "../../../components/Common/Popup";
import Modal from "../../../components/Common/Modal";
import Colse from "../../../assets/img/MyPage/close.svg";
import CancelRoommate from "../../../assets/img/MyPage/cancleRoommate.svg";
import Roommate from "../../../assets/img/MyPage/roommate.svg";
import BasicrProfile from "../../../assets/img/MyPage/basicProfile.svg";
import Success from "../../../assets/gif/success.gif";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import Row from "../../../components/Common/Layouts/Row";
import Typography from "../../../components/Common/Layouts/Typography";
import Column from "../../../components/Common/Layouts/Column";
import UserProfile from "../../../components/Main/UserProfile/UserProfile";
import BottomSheet from "../../../components/DesignStuff/BottomSheet/BottomSheet";
import Button from "../../../components/DesignStuff/Button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserProfileType } from "../../../types/userProfileType";

type acceptData = {
	createdDate: Date;
	roommateId: number;
};

export default function RoommateApply() {
	const [isChoose, setIsChoose] = useState("send");
	const [isBtsShow, setIsBtsShow] = useState(false);
	const [isReject, setIsReject] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [sentApply, setSentApply] = useState([]);
	const [receivedApply, setReceivedApply] = useState<(UserProfileType & acceptData)[]>([]);
	const [opponentNickName, setOpponentNickName] = useState("");
	const [opponentID, setOpponentID] = useState(0);
	// const [matching, setMatching] = useState(false);
	const [openMatchingModal, setOpenMatchingModal] = useState(false);

	const navigate = useNavigate();

	const { data: receiveRommateData, isLoading } = useQuery({
		queryKey: ["receiveRoommate"],
		queryFn: async () => {
			const response = await API.get(`/api/v1/roommate/receive/list`);
			return response.data.data;
		}
	});

	const acceptRoommateMutation = useMutation({
		mutationFn: async (roommateId: number) => {
			const response = await API.patch(`/api/v1/roommate/receive/accept/${roommateId}`);
			return response.data.data;
		},
		onSuccess: () => {
			setOpenMatchingModal(true);
		},
		onError: (error) => {
			console.error("룸메이트 신청 수락 실패:", error);
		}
	});

	const handleAccept = (roommateID: number) => {
		acceptRoommateMutation.mutate(roommateID);
	};

	const { refetch: refetchRefuseRoommate } = useQuery({
		queryKey: ["refuseRoommate"],
		queryFn: async () => {
			const response = await API.delete(`/api/v1/roommate/receive/refuse/${opponentID}`);
			return response.data.data;
		},
		enabled: false
	});

	const refuseRoommate = (roommateID: number, roommateNickName: string) => {
		setOpponentID(roommateID);
		setOpponentNickName(roommateNickName);
		setIsReject(true);
	};

	const handleCancle = () => {
		setIsReject(false);
		setShowPopup(true);
		refetchRefuseRoommate().then((res) => {
			if (res.data === "success") {
				setReceivedApply(receivedApply.filter((val) => val.nickname !== opponentNickName));
			}
		});
	};
	const handleBtsShow = (opponent) => {
		setIsBtsShow(!isBtsShow);
		setOpponentNickName(opponent);
	};

	const handleModal = () => {
		setOpenMatchingModal(false);
	};

	useMemo(() => {
		if (!receiveRommateData) return;
		!isLoading && setReceivedApply(receiveRommateData);
	}, [receiveRommateData]);

	return isLoading ? (
		<Loading />
	) : (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="background">
					<Header title="신청 목록" />
				</CS.Header>
				<Row>
					<S.ApplyList
						horizonAlign="center"
						verticalAlign="center"
						isChoose={isChoose === "send"}
						isLeft={isChoose === "send"}
						onClick={() => setIsChoose("send")}
					>
						<Typography typoSize="T3_semibold" color={isChoose === "send" ? "Gray800" : "Gray400"}>
							{"보낸 신청"}
						</Typography>
					</S.ApplyList>
					<S.ApplyList
						horizonAlign="center"
						verticalAlign="center"
						isLeft={isChoose === "send"}
						isChoose={isChoose === "receive"}
						onClick={() => setIsChoose("receive")}
					>
						<Typography typoSize="T3_semibold" color={isChoose === "receive" ? "Gray800" : "Gray400"}>
							{"받은 신청"}
						</Typography>
					</S.ApplyList>
				</Row>
				<S.Notice>
					<Typography typoSize="B2_medium" color="Gray600">
						{`룸메이트가 맺어지면, 다른 사람에게 보낸 받은 신청과 보낸 신청은 모두 사라져요`}
					</Typography>
				</S.Notice>
				{/* axios add  */}
				{isChoose === "send" &&
					(sentApply.length !== 0 ? (
						<div style={{ marginTop: "4.5vh" }}>
							<Typography
								typoSize="T4_semibold"
								color="Gray800"
								textAlign="center"
							>{`보낸 룸메이트 신청이 없어요`}</Typography>
							<S.FinRoommateBtn onClick={() => navigate("/roommate")}>
								<S.FindRoommateIcon src={Roommate} />
								<Typography typoSize="T4_semibold" color="Gray700">{`룸메이트 찾으러 가기`}</Typography>
							</S.FinRoommateBtn>
						</div>
					) : (
						<div>
							<Typography
								typoSize="B3_medium"
								color="Gray500"
								textAlign="center"
								style={{ marginBottom: "8px" }}
							>{`2024년도`}</Typography>
							{sentApply.map((userData) => (
								<Column gap={8}>
									{/* TODO API연결 */}
									{/* <ApplyDate>{moment(userData.createdDate).format("M월 D일")}</ApplyDate>
									<Row horizonAlign="distribute">
										<OtherProfileApply
											nickName={userData.nickname}
											major={userData.major}
											id={userData.studentID}
											userprofile={userData.photoName.length !== 0 ? userData.photoName : null}
										/>
										<CancleBtn onClick={() => handleBtsShow(userData.nickname)}>취소</CancleBtn>
									</Row> */}
								</Column>
							))}
							{/* 임시 데이터 */}
							<Column gap={8} width="w-full">
								<Typography typoSize="B2_medium" color="Gray500">
									{"10.01"}
								</Typography>
								<Row horizonAlign="distribute" width="w-full">
									<UserProfile
										image={null}
										nickName={"hi"}
										major={"test"}
										ID={19}
										activeCheck={false}
										smoke="SMOKER"
										// userprofile={userData.photoName.length !== 0 ? userData.photoName : null}
									/>
									<S.CancleBtn
										horizonAlign="center"
										verticalAlign="center"
										onClick={() => handleBtsShow("hi")}
									>
										{"취소"}
									</S.CancleBtn>
								</Row>
							</Column>
						</div>
					))}
				{isChoose === "receive" &&
					(receivedApply.length === 0 ? (
						<div style={{ marginTop: "4.5vh" }}>
							{/* 중복코드 줄일 방법 생각 */}
							<Typography
								typoSize="T4_semibold"
								color="Gray800"
								textAlign="center"
							>{`보낸 룸메이트 신청이 없어요`}</Typography>
							<S.FinRoommateBtn onClick={() => navigate("/roommate")}>
								<S.FindRoommateIcon src={Roommate} />
								<Typography typoSize="T4_semibold" color="Gray700">{`룸메이트 찾으러 가기`}</Typography>
							</S.FinRoommateBtn>
						</div>
					) : (
						<div>
							<Typography
								typoSize="B3_medium"
								color="Gray500"
								textAlign="center"
								style={{ marginBottom: "8px" }}
							>{`20245년도`}</Typography>
							<Column gap={20} width="w-full">
								{receivedApply.map((userData) => (
									<>
										<Column gap={8} width="w-full" style={{ padding: "1.89vh 0" }}>
											<Typography typoSize="B2_medium" color="Gray500">
												{moment(userData.createdDate).format("MM.DD")}
											</Typography>
											<UserProfile
												image={userData.image}
												nickName={userData.nickname}
												major={userData.major}
												ID={userData.studentNum}
												activeCheck={false}
												smoke={userData.smoke}
												score={userData.point}
											/>
											<Row gap={8} width="w-full">
												<S.ReceiveBtn
													isAccept={false}
													horizonAlign="center"
													verticalAlign="center"
													onClick={() =>
														refuseRoommate(userData.roommateId, userData.nickname)
													}
												>
													<Typography
														typoSize="T4_semibold"
														color="Gray700"
														textAlign="center"
													>
														{"거절하기"}
													</Typography>
												</S.ReceiveBtn>
												<S.ReceiveBtn
													isAccept={true}
													horizonAlign="center"
													verticalAlign="center"
													onClick={() => handleAccept(userData.roommateId)}
												>
													<Typography
														typoSize="T4_semibold"
														color="Gray700"
														textAlign="center"
													>
														{"수락하기"}
													</Typography>
												</S.ReceiveBtn>
											</Row>
										</Column>
										{openMatchingModal && (
											<Modal padding={`28px 20px 22px 20px`}>
												<S.SuccessGif src={Success} />
												<Typography
													typoSize="T2_bold"
													color="Gray800"
												>{`룸메이트가 맺어졌어요!`}</Typography>
												<S.OpponentProfileBox>
													<S.ProfileImg
														src={
															userData.image
																? process.env.REACT_APP_BUCKET_BASEURL + userData.image
																: BasicrProfile
														}
													/>
													<Typography typoSize="T3_semibold" color="Gray800">
														{userData.nickname}
													</Typography>
													<Typography typoSize="B2_medium" color="Gray600">
														{userData.major} · {userData.studentNum + "학번"}
													</Typography>
												</S.OpponentProfileBox>
												<S.OkBtn onClick={() => handleModal()}>{`확인`}</S.OkBtn>
											</Modal>
										)}
									</>
								))}
							</Column>
						</div>
					))}
				<BottomSheet height={"356px"} isOpen={isBtsShow}>
					<Row gap={8} horizonAlign="right">
						<Column horizonAlign="center" verticalAlign="center">
							<S.DeletMainIcon src={CancelRoommate} />
							<Typography typoSize="T2_bold" color="Gray800" textAlign="center">
								{opponentNickName + `님께\n전송한 룸메이트 신청을 취소할까요?`}
							</Typography>
						</Column>
						<S.CloseIcon src={Colse} onClick={() => setIsBtsShow(false)} />
					</Row>
					<Button text="신청 취소하기" isNextPage onClick={() => handleCancle()} />
				</BottomSheet>

				{/* 룸메이트 거절할 때 */}
				<BottomSheet height={"356px"} isOpen={isReject}>
					<Row gap={33} horizonAlign="right">
						<Column horizonAlign="center" verticalAlign="center">
							<S.DeletMainIcon src={CancelRoommate} />
							<Typography typoSize="T2_bold" color="Gray800" textAlign="center">
								{opponentNickName + `님의\n룸메이트 신청을 거절할까요??`}
							</Typography>
						</Column>
						<S.CloseIcon src={Colse} onClick={() => setIsReject(false)} />
					</Row>
					<Button text="거절하기" isNextPage onClick={() => handleCancle()} />
				</BottomSheet>

				<Popup
					bottom={`9.95`}
					isShowPopup={showPopup}
					setShowPopup={setShowPopup}
					message={`룸메이트 신청을 취소하였습니다`}
				/>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
