import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../../axios/BaseUrl";
import * as CS from "../../../components/Common/CommonStyle";
import GoBack from "../../../components/Common/GoBack";
import InputSelf from "../../../components/Main/InputSelf";
// import BottomSheet from "../../../components/Common/BottomSheet";
import Br from "../../../components/Common/Br";
import Department from "../../../components/Join/Department";
import Modal from "../../../components/Common/Modal";
import Profile from "../../../assets/img/MyPage/basicProfile.svg";
import Camera from "../../../assets/img/MyPage/camera.svg";
import MiniQeustion from "../../../assets/img/MyPage/miniQuestion.svg";
import Close from "../../../assets/img/Join/closeModal.svg";
import UnderArrow from "../../../assets/img/Join/arrow_under.svg";
import Row from "../../../components/Common/Layouts/Row";
import Typography from "../../../components/Common/Layouts/Typography";
import Column from "../../../components/Common/Layouts/Column";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import DepartmentList from "../../../JSON/DepartmentList.json";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import * as S from "./style";
import { UserProfileType } from "../../../types/userProfileType";
import { useUserInfo } from "../../../store/useUserInfo";
import ScrollPicker from "../../../components/DesignStuff/ScrollPicker/ScrollPicker";
import { STUDENT_NUM } from "../../Join/const";
import BottomSheet from "../../../components/DesignStuff/BottomSheet/BottomSheet";

const UploadProfile = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const HiddenFileInput = styled.input`
	position: absolute;
	bottom: -5px;
	right: 33.66vw;
	width: 28px;
	height: 28px;
	opacity: 0;
	z-index: 20;
`;

const ProfileImg = styled.img<{ isProfile: boolean }>`
	position: relative;
	width: 104px;
	height: 104px;
	border-radius: 50%;
	object-fit: ${({ isProfile }) => isProfile && "cover"};
`;
const CameraIcons = styled.div`
	position: absolute;
	bottom: -5px;
	right: 33.66vw;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 28px;
	height: 28px;
	background: #fff;
	border: 1px solid #d0d0d0;
	border-radius: 50%;
	cursor: pointer;
`;
const SubTitle = styled.div`
	margin-top: 32px;
	color: #707070;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
`;
const AlreadyUse = styled(SubTitle)`
	color: #cb3d0b;
	font-size: 0.75rem;
`;
const IntroOneLine = styled(SubTitle)`
	margin-top: 28px;
`;
const QuestionMark = styled.img`
	margin-top: 28px;
	margin-left: 4px;
`;
const StudentIdTotal = styled.div<{ isSelected: boolean }>`
	margin-top: 4px;
	padding: 13px 0px 10px 0px;
	display: flex;
	width: 12.05vw;
	border-bottom: 2px solid ${({ isSelected }) => (isSelected ? "#ECAA00" : "#efefef")};
`;
const InputStudentId = styled.input`
	outline: none;
	border: none;
	color: #333;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 24px;
	&::placeholder {
		color: #d0d0d0;
		font-size: 1.125rem;
		font-weight: 500;
		line-height: 24px;
	}
`;
const MajorBtsTxt = styled.div`
	color: #333;
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 28px;
	margin-bottom: 20px;
`;
const MajorTotal = styled.div`
	margin-top: 4px;
	padding: 7px 0px 8px 0px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	border-bottom: 2px solid #efefef;
`;
const MajorText = styled.div<{ major: boolean }>`
	color: ${({ major }) => (major ? "#d0d0d0" : "#333333")};
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
`;
const CloseImg = styled.img`
	width: 28px;
	height: 28px;
`;

const DormitroyBox = styled.div<{ isSelect: boolean }>`
	width: max-content;
	border-radius: 20px;
	padding: 8px 16px;
	background: ${({ isSelect }) => (isSelect ? "#FFF4CD" : "transparent")};
	border: 1px solid ${({ isSelect }) => (isSelect ? "#ECAA00" : "#E2E2E2")};
`;
export default function EditProfile() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userInfo, setUserInfo] = useState<UserProfileType>();
	const [nickname, setNickname] = useState<string>("");
	const [isDuplicate, setIsDuplicate] = useState(false);
	const [isStudentNumOpen, setIsStudentNumOpen] = useState(false);
	const [photo, setPhoto] = useState("");
	const [inputPhoto] = useState("");
	const [introduction, setIntroduction] = useState<string>("");
	const [dormitory, setDormitory] = useState("");
	const DormitoryKind = ["구관", "신관", "행복기숙사"];
	const [file, setFile] = useState(null);
	const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
	const [department, setDepartment] = useState("");
	const [major, setMajor] = useState(null);
	const [isMajorOpen, setIsMajorOpen] = useState(false);
	const { studentNum, setStudentNum } = useUserInfo();

	const navigate = useNavigate();
	const handleMajor = (major) => {
		setMajor(major);
		setIsDepartmentOpen(!department);
	};

	const { data, isLoading } = useQuery({
		queryKey: ["myData"],
		queryFn: async () => {
			const response = await API.get(`/api/v1/user/profile`);
			return response.data.data;
		}
	});

	const isModified = () => {
		const original = JSON.stringify({
			nickname: data?.nickname,
			major: data?.major,
			dormitory: data?.dormitory === "NEW" ? "신관" : data?.dormitory === "OLD" ? "구관" : "행복기숙사",
			introduction: data?.introduction,
			photo: data?.image,
			studentNum: data?.studentNum
		});

		const modified = JSON.stringify({ nickname, major, dormitory, introduction, photo, studentNum });

		return original !== modified;
	};

	useEffect(() => {
		if (!data) return;
		setUserInfo(data);
		setNickname(data.nickname);
		setMajor(data.major);
		setDormitory(data.dormitory === "NEW" ? "신관" : data.dormitory === "OLD" ? "구관" : "행복기숙사");
		setIntroduction(data.introduction);
		setPhoto(data.image);
		setStudentNum(data.studentNum);
	}, [data]);

	// useEffect(() => {
	// 	if (nickname === prevNickname) return;

	// 	const timeId = setTimeout(() => {
	// 		fetchCheckNickName();
	// 	}, 800);

	// 	return () => {
	// 		clearTimeout(timeId);
	// 	};

	// 	async function fetchCheckNickName() {
	// 		try {
	// 			const res = await API.get("/member/check/nickname?nickname=" + nickname);

	// 			if (res.data === "duplicate") {
	// 				setIsDuplicate(true);
	// 			} else {
	// 				setIsDuplicate(false);
	// 			}
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// }, [nickname]);

	const [profileImage, setProfileImage] = useState("");

	const handleFile = (event) => {
		const files = event.target.files;
		setFile(files);

		if (files && files.length > 0) {
			const selectedFile = files[0];
			const imageUrl = URL.createObjectURL(selectedFile);
			setPhoto(imageUrl);
			setProfileImage(imageUrl);
		}
	};

	const profileUpdateMutation = useMutation({
		mutationFn: async (formData: FormData) => {
			const response = await API.put("/api/v1/user/profile/update", formData, {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});
			return response.data;
		},
		onSuccess: (data) => {
			if (data.data === "success") {
				navigate("/mypage");
			}
		}
	});

	const handlePostSubmit = () => {
		if (!(nickname && dormitory)) return;
		const userData = {
			nickname: nickname,
			major: major,
			studentNum: 23,
			dormitory: dormitory === "신관" ? "NEW" : dormitory === "구관" ? "OLD" : "HAPPY"
		};

		const formData = new FormData();
		formData.append("dto", new Blob([JSON.stringify(userData)], { type: "application/json" }));

		if (photo !== null) {
			//@ts-ignore
			Object.values(file).forEach((f: File) => {
				formData.append("files", f);
			});
		}

		profileUpdateMutation.mutate(formData);
	};

	const openBottomSheet = (department) => {
		setIsMajorOpen(!isMajorOpen);
		setIsDepartmentOpen(!isDepartmentOpen);
		setDepartment(department);
	};

	const handleStudentNum = (studentNum: number) => {
		setStudentNum(studentNum);
		setIsStudentNumOpen(false);
	};

	return isLoading ? (
		<Loading />
	) : (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<S.Header>
						<GoBack />
						<S.EditBtn onClick={handlePostSubmit} isChange={isModified()}>{`수정`}</S.EditBtn>
					</S.Header>
				</CS.Header>
				<UploadProfile>
					<ProfileImg
						key={1}
						src={profileImage ? photo : photo ? process.env.REACT_APP_BUCKET_BASEURL + photo : Profile}
						isProfile={!!photo}
					/>
					<HiddenFileInput type="file" accept="image/*" onChange={handleFile} />
					<CameraIcons>
						<img src={Camera} />
					</CameraIcons>
				</UploadProfile>
				{/* input nickname */}
				<Row horizonAlign="distribute" style={{ marginTop: "32px" }}>
					<Typography typoSize="B2_medium" color="Gray500">
						{"닉네임"}
					</Typography>
					{isDuplicate && (
						<Typography typoSize="B2_medium" color="Red500">
							{"이미 사용 중인 닉네임이에요"}
						</Typography>
					)}
				</Row>
				<TextFields
					maxLength={8}
					onChange={(val) => setNickname(val)}
					inputLen={nickname.length}
					totalNum={8}
					text={nickname}
					pageType="myPage"
				/>
				{/* 중복체크 */}
				{/* {nickname !== null && (
				<InputSelf
					borderColor={isDuplicate ? "#CB3D0B" : nickname.length > 0 ? "#ECAA00" : "#EFEFEF"}
					setIsDuplicate={setIsDuplicate}
					isDuplicate={isDuplicate}
					totalLen={8}
					placeholder={`닉네임 입력`}
					value={nickname}
					disabled={true}
					changeValue={setNickname}
				/>
			)} */}

				{/* choose major */}
				<Typography typoSize="B2_medium" color="Gray500" style={{ marginTop: "40px" }}>
					{"전공/학번"}
				</Typography>
				<MajorTotal onClick={() => setIsMajorOpen(!isMajorOpen)}>
					<MajorText major={major === null}>{major === null ? "학과/전공" : major}</MajorText>
					<img src={UnderArrow} />
				</MajorTotal>
				<StudentNumTotal onClick={() => setIsStudentNumOpen(!isStudentNumOpen)}>
					<Typography typoSize="T3_semibold" color={studentNum ? "Gray800" : "Gray400"}>
						{studentNum || "학번"}
					</Typography>
					<img src={UnderArrow} />
				</StudentNumTotal>
				<BottomSheet isOpen={isStudentNumOpen} height={"390px"}>
					<CS.SpaceBetween>
						<MajorBtsTxt>{`학번`}</MajorBtsTxt>
						<CloseImg src={Close} onClick={() => setIsStudentNumOpen(!isStudentNumOpen)} />
					</CS.SpaceBetween>
					<ScrollPicker options={STUDENT_NUM} height={220} onOptionSelect={handleStudentNum} />
				</BottomSheet>
				<BottomSheet height={`487px`} isOpen={isMajorOpen}>
					<CS.SpaceBetween>
						<MajorBtsTxt>{`학과/전공`}</MajorBtsTxt>
						<CloseImg src={Close} onClick={() => setIsMajorOpen(!isMajorOpen)} />
					</CS.SpaceBetween>
					{DepartmentList.departmentList.map((department) => (
						<Department
							department={department}
							onClick={() => openBottomSheet(department)}
							isDepartment={true}
						/>
					))}
				</BottomSheet>
				{isDepartmentOpen && (
					<BottomSheet height={`630px`} isOpen={isDepartmentOpen}>
						<CS.SpaceBetween>
							<MajorBtsTxt>{`학과/전공`}</MajorBtsTxt>
							<CloseImg src={Close} onClick={() => setIsDepartmentOpen(!isDepartmentOpen)} />
						</CS.SpaceBetween>
						{DepartmentList.departmentMajors[department].map((major: string) => (
							<Department department={major} onClick={() => handleMajor(major)} />
						))}
					</BottomSheet>
				)}
				{/* <StudentIdTotal
				onFocus={() => handleFocus(true)}
				onBlur={() => handleFocus(false)}
				isSelected={isSelected}
			>
				<InputStudentId
					placeholder="학번"
					onChange={(e) => handleStudentId(e.target.value)}
					maxlength={"2"}
					value={studentID}
				/>
			</StudentIdTotal> */}
				<Typography typoSize="B2_medium" color="Gray500" style={{ marginTop: "40px" }}>
					{"기숙사"}
				</Typography>
				<Row gap={8}>
					{DormitoryKind.map(
						(kind) => (
							<DormitroyBox onClick={() => setDormitory(kind)} isSelect={dormitory === kind}>
								<Typography
									typoSize={"T4_semibold"}
									color={dormitory === kind ? "Yellow900" : "Gray700"}
								>
									{kind}
								</Typography>
							</DormitroyBox>
						)
						// userInfo.gender === "MALE" && kind === "구관" ? null : (
						// 	<DormitroyBox onClick={() => setDormitory(kind)} isSelect={dormitory === kind}>
						// 		<Typography
						// 			typoSize={"T4_semibold"}
						// 			color={dormitory === kind ? "Yellow900" : "Gray700"}
						// 		>
						// 			{kind}
						// 		</Typography>
						// 	</DormitroyBox>
						// )
					)}
				</Row>
				<Br marginTop={`3.31vh`} />
				{/* input introduce self */}
				<Typography typoSize="B2_medium" color="Gray500" style={{ marginTop: "24px" }}>
					{"나를 소개하는 한 줄"}
				</Typography>
				<TextFields
					maxLength={25}
					onChange={(val) => setIntroduction(val)}
					inputLen={introduction?.length ?? 0}
					totalNum={25}
					text={introduction}
				/>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
const StudentNumTotal = styled(MajorTotal)`
	width: fit-content;
	gap: 30px;
`;
