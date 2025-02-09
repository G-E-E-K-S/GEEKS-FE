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

const InputStudentId = styled.input`
	outline: none;
	border: none;
	color: #333;
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 32px;
	text-align: left;
	&::placeholder {
		color: #d0d0d0;
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 32px;
	}
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
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

	useEffect(() => {
		setStudentNum(19);
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
	margin-top: 6.16vh;
	padding: 7px 0px 8px 0px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	border-bottom: 2px solid #efefef;
`;
// const MajorText = styled.div`
// 	color: ${(props) => (props.major ? "#d0d0d0" : "#333333")};
// 	font-size: 1.5rem;
// 	font-style: normal;
// 	font-weight: 600;
// `;

// const StudentIdTotal = styled.div`
// 	margin-top: 1.77vh;
// 	padding: 7px 0px 8px 0px;
// 	display: flex;
// 	justify-content: flex-start;
// 	width: 30.82vw;
// 	border-bottom: 2px solid ${(props) => (props.isSelected ? "#ECAA00" : "#efefef")};
// `;
