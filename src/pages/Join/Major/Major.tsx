import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../axios/BaseUrl";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import MainText from "../../../components/Join/MainText";
import Department from "../../../components/Join/Department";
import UnderArrow from "../../../assets/img/Join/arrow_under.svg";
import Close from "../../../assets/img/Join/closeModal.svg";
import Loading from "../../Loading";
import Button from "../../../components/DesignStuff/Button/Button";
import Typography from "../../../components/Common/Layouts/Typography";
import Row from "../../../components/Common/Layouts/Row";
import DepartmentList from "../../../JSON/DepartmentList.json";
import BottomSheet from "../../../components/DesignStuff/BottomSheet/BottomSheet";
import { useUserInfo } from "../../../store/useUserInfo";
import ScrollPicker from "../../../components/DesignStuff/ScrollPicker/ScrollPicker";
import { STUDENT_NUM } from "../const";

const MajorBtsTxt = styled.div`
	color: #333;
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 28px;
	margin-bottom: 20px;
`;
const CloseImg = styled.img`
	width: 28px;
	height: 28px;
`;
const Major = () => {
	const [isNextPage, setIsNextPage] = useState(false);
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
	const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
	const [isStudentNumOpen, setIsStudentNumOpen] = useState(false);
	const { major, setMajor, department, setDepartment, studentNum, setStudentNum } = useUserInfo();
	const navigate = useNavigate();

	const handleBottomSheet = () => {
		setIsBottomSheetOpen(!isBottomSheetOpen);
	};

	const openBottomSheet = (department: string) => {
		setIsDepartmentOpen(!isDepartmentOpen);
		setDepartment(department);
	};
	const handleMajor = (major: string) => {
		setMajor(major);
		setIsDepartmentOpen(false);
		setIsBottomSheetOpen(false);
	};

	const openStudentNumBottomSheet = () => {
		setIsStudentNumOpen(!isStudentNumOpen);
	};

	const handleStudentNum = (studentNum: number) => {
		setStudentNum(studentNum);
		setIsStudentNumOpen(false);
	};
	useEffect(() => {
		major && studentNum ? setIsNextPage(true) : setIsNextPage(false);
	}, [major, studentNum]);

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor={isBottomSheetOpen || isDepartmentOpen ? " rgba(0, 0, 0, 0.5)" : "White"}>
					<HeaderMenu />
				</CS.Header>
				<MainText maintitle={`전공/학과와\n학번을 알려주세요`} />
				<MajorTotal onClick={() => handleBottomSheet()}>
					<Typography typoSize="T1" color={major ? "Gray800" : "Gray400"}>
						{major || "학과/전공"}
					</Typography>
					<img src={UnderArrow} />
				</MajorTotal>

				<StudentNumTotal onClick={() => openStudentNumBottomSheet()}>
					<Typography typoSize="T1" color={studentNum ? "Gray800" : "Gray400"}>
						{studentNum || "학번"}
					</Typography>
					<img src={UnderArrow} />
				</StudentNumTotal>
				<BottomSheet isOpen={isStudentNumOpen} height={"390px"}>
					<CS.SpaceBetween>
						<MajorBtsTxt>{`학번`}</MajorBtsTxt>
						<CloseImg src={Close} onClick={() => openStudentNumBottomSheet()} />
					</CS.SpaceBetween>
					<ScrollPicker options={STUDENT_NUM} height={220} onOptionSelect={handleStudentNum} />
				</BottomSheet>

				<BottomSheet isOpen={isBottomSheetOpen} height={"487px"}>
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
					<BottomSheet height={`630px`} isOpen={isDepartmentOpen}>
						<Row horizonAlign="distribute">
							<Typography typoSize="T2_bold" color="Gray800">
								{"학과/전공"}
							</Typography>
							<CloseImg src={Close} onClick={() => setIsDepartmentOpen(!isDepartmentOpen)} />
						</Row>
						{DepartmentList.departmentMajors[department].map((major: string) => (
							<Department department={major} onClick={() => handleMajor(major)} />
						))}
					</BottomSheet>
				)}
				<Button text={"다음"} isNextPage={isNextPage} onClick={() => navigate("/gender")} />
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
};

export default Major;

const MajorTotal = styled.div`
	margin-top: 20px;
	padding: 7px 0px 8px 0px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	border-bottom: 2px solid #efefef;
`;

const StudentNumTotal = styled(MajorTotal)`
	width: fit-content;
	gap: 30px;
`;
