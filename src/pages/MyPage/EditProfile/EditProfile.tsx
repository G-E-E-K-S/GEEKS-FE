import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../../axios/BaseUrl";
import * as CS from "../../../components/Common/CommonStyle";
import GoBack from "../../../components/Common/GoBack";
import InputSelf from "../../../components/Main/InputSelf";
import BottomSheet from "../../../components/Common/BottomSheet";
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
import Header from "../../../components/MyPage/Header/Header";
import Column from "../../../components/Common/Layouts/Column";
import TextFields from "../../../components/DesignStuff/TextFields/TextFields";
import DepartmentList from "../../../JSON/DepartmentList.json";

const EditBtn = styled.div<{ isChange: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	height: 40px;
	width: 50px;
	background: ${({ isChange }) => (isChange ? "#FFC700" : "#efefef")};
	color: ${({ isChange }) => (isChange ? "#333" : "#949494")};
	font-size: 1rem;
	font-weight: 600;
	&:active {
		background: ${({ isChange }) => isChange && "#ECAA00"};
	}
`;
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
const BottomBtn = styled.div`
	height: 17.29vh;
`;
const SelectDone = styled.div`
	height: 60px;
	width: 100%;
	border-radius: 12px;
	background: #f7f7f7;
	color: #b7b7b7;
	text-align: center;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const DormitroyBox = styled.div<{ isSelect: boolean }>`
	width: max-content;
	border-radius: 20px;
	padding: 8px 16px;
	background: ${({ isSelect }) => (isSelect ? "#FFF4CD" : "transparent")};
	border: 1px solid ${({ isSelect }) => (isSelect ? "#ECAA00" : "#E2E2E2")};
`;
const IntroMySelf = styled.div`
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 28px;
	text-align: center;
	white-space: pre-wrap;
	margin-bottom: 8px;
`;
const IntroSub = styled.div`
	font-size: 1rem;
	font-weight: 500;
	line-height: 24px;
	text-align: center;
	white-space: pre-wrap;
	color: #707070;
	margin-bottom: 20px;
`;
const ExampleBox = styled.div`
	width: 274px;
	height: 134px;
	padding: 20px 16px;
	border-radius: 12px;
	background: #fafafa;
`;
const BasicProfile = styled.img`
	width: 40px;
	height: 40px;
	margin-right: 12px;
`;
const ExNickName = styled.div`
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 18px;
`;
const ExMajor = styled(ExNickName)`
	color: #949494;
	margin-top: 4px;
`;
const ExSub = styled.div`
	width: 100%;
	height: 38px;
	padding: 10px 16px;
	border-radius: 8px;
	border: 1px solid #ecaa00;
	background: linear-gradient(0deg, #fffbee, #fffbee);
	margin-top: 16px;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 18px;
`;
export default function EditProfile() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [userInfo, setUserInfo] = useState(null);
	const [nickname, setNickname] = useState<string>("");
	const [isDuplicate, setIsDuplicate] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const [prevNickname, setPrevNickname] = useState(null);
	const [photo, setPhoto] = useState("");
	const [introduction, setIntroduction] = useState(null);
	const [prevIntroduction, setPrevIntroduction] = useState(null);
	const [isSelected, setIsSelected] = useState(false);
	const [dormitory, setDormitory] = useState("");
	const [prevDormitory, setPrevDormitory] = useState("");
	const DormitoryKind = ["구관", "신관", "행복기숙사"];
	const [file, setFile] = useState(null);
	const [fileUrl, setFileUrl] = useState(null);
	const [studentID, setStudentID] = useState(null);
	const [prevStudentID, setPrevStudentID] = useState(null);
	const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
	const [department, setDepartment] = useState("");
	const [prevMajor, setPrevMajor] = useState("");
	const [major, setMajor] = useState(null);
	const [isMajorOpen, setIsMajorOpen] = useState(false);
	const [isChange, setIsChange] = useState(false);
	const [gender, setGender] = useState("");
	const navigate = useNavigate();
	const handleMajor = (major) => {
		setMajor(major);
		setIsDepartmentOpen(!department);
	};
	// useEffect(() => {
	// 	async function fetchUserInfo() {
	// 		try {
	// 			const res = await API.get("/member/myPage");
	// 			console.log(res.data);
	// 			setUserInfo(res.data);
	// 			setNickname(res.data.nickname);
	// 			setPrevNickname(res.data.nickname);
	// 			setPhoto(res.data.photoName);
	// 			setIntroduction(res.data.introduction);
	// 			setPrevIntroduction(res.data.introduction);
	// 			setStudentID(res.data.studentID);
	// 			setPrevStudentID(res.data.studentID);
	// 			setMajor(res.data.major);
	// 			setPrevMajor(res.data.major);
	// 			setDormitory(res.data.type === "NEW" ? "신관" : res.data.type === "OLD" ? "구관" : "행복기숙사");
	// 			setPrevDormitory(res.data.type === "NEW" ? "신관" : res.data.type === "OLD" ? "구관" : "행복기숙사");
	// 			setGender(res.data.gender);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}

	// 	fetchUserInfo();
	// }, []);
	// useEffect(()=>{

	// },[])

	useEffect(() => {
		if (nickname === prevNickname) return;

		const timeId = setTimeout(() => {
			fetchCheckNickName();
		}, 800);

		return () => {
			clearTimeout(timeId);
		};

		async function fetchCheckNickName() {
			try {
				const res = await API.get("/member/check/nickname?nickname=" + nickname);

				if (res.data === "duplicate") {
					setIsDuplicate(true);
				} else {
					setIsDuplicate(false);
				}
			} catch (error) {
				console.error(error);
			}
		}
	}, [nickname]);

	const handleFile = (event) => {
		setFile(event.target.files);
		const selectedFile = event.target.files[0];
		if (selectedFile) {
			const imageUrl = URL.createObjectURL(selectedFile);
			// setFileUrl(imageUrl);
		}
	};

	const hadleEditProfile = () => {
		if (isChange === false) return;
		const formData = new FormData();

		const postData = {
			nickname: nickname,
			major: major,
			type: dormitory === "구관" ? "OLD" : dormitory === "신관" ? "NEW" : "HAPPY",
			studentID: studentID,
			introduction: introduction
		};

		formData.append("dto", new Blob([JSON.stringify(postData)], { type: "application/json" }));

		if (file !== null) {
			Object.values(file).forEach((f: any) => {
				formData.append("file", f);
			});
		}

		async function fetchProfile() {
			try {
				const res = await API.post("/member/edit/profile", formData, {
					headers: {
						"Content-Type": `multipart/form-data`
					}
				});

				if (res.data === "success") {
					navigate("/mypage");
				}
			} catch (error) {
				console.error(error);
			}
		}
		fetchProfile();
	};

	const handleFocus = (state) => {
		setIsSelected(state);
	};
	const handleBottomSheet = () => {
		setIsMajorOpen(!isMajorOpen);
	};
	const handleStudentId = (ID) => {
		setStudentID(ID);
	};
	const openBottomSheet = (department) => {
		setIsMajorOpen(!isMajorOpen);
		setIsDepartmentOpen(!isDepartmentOpen);
		setDepartment(department);
	};

	useEffect(() => {
		if (
			!isDuplicate &&
			(prevNickname !== nickname ||
				prevMajor !== major ||
				prevStudentID !== studentID ||
				prevDormitory !== dormitory ||
				prevIntroduction !== introduction ||
				file !== null)
		)
			setIsChange(true);
		else setIsChange(false);
	}, [nickname, major, studentID, prevNickname, dormitory, introduction, file, isDuplicate]);

	const editUserName = (userName: string) => {
		setNickname(userName);
	};
	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<Header title="" hasDone onClick={hadleEditProfile} isChange={isChange} buttonName={"완료"} />
				</CS.Header>
				<UploadProfile>
					<ProfileImg
						key={1}
						src={
							fileUrl !== null
								? fileUrl
								: photo.length !== 0
								? process.env.REACT_APP_BUCKET_BASEURL + photo
								: Profile
						}
						isProfile={fileUrl !== null}
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
					onChange={(val) => editUserName(val)}
					inputLen={nickname.length}
					totalNum={8}
				/>

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
				<MajorTotal onClick={() => handleBottomSheet()}>
					<MajorText major={major === null}>{major === null ? "학과/전공" : major}</MajorText>
					<img src={UnderArrow} />
				</MajorTotal>
				<BottomSheet
					height={`487px`}
					padding={`24px 5.12vw 0px 5.12vw`}
					isOpen={isMajorOpen}
					interaction={true}
				>
					<CS.SpaceBetween>
						<MajorBtsTxt>{`학과/전공`}</MajorBtsTxt>
						<CloseImg src={Close} onClick={() => handleBottomSheet()} />
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
					<BottomSheet height={`630px`} padding={`24px 5.12vw 0px 5.12vw`} isOpen={isDepartmentOpen}>
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
					{DormitoryKind.map((kind) =>
						gender === "MALE" && kind === "구관" ? null : (
							<DormitroyBox onClick={() => setDormitory(kind)} isSelect={dormitory === kind}>
								<Typography
									typoSize={"T4_semibold"}
									color={dormitory === kind ? "Yellow900" : "Gray700"}
								>
									{kind}
								</Typography>
							</DormitroyBox>
						)
					)}
				</Row>
				<Br marginTop={`3.31vh`} />
				{/* input introduce self */}
				<Typography typoSize="B2_medium" color="Gray500" style={{ marginTop: "24px" }}>
					{"나를 소개하는 한 줄"}
				</Typography>
				<TextFields
					maxLength={8}
					onChange={(val) => editUserName(val)}
					inputLen={nickname.length}
					totalNum={25}
				/>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
}
