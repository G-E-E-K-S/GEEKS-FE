import { useState, useRef, useEffect } from "react";
import API from "../../../axios/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as CS from "../../../components/Common/CommonStyle";
import HeaderMenu from "../../../components/Common/HeaderMenu";
import TopNumber from "../../../components/Join/TopNumber";
import JoinButton from "../../../components/Join/JoinButton";
import MainText from "../../../components/Join/MainText";
import ErrorPopup from "../../../components/Common/ErrorPopup";
import Timmer from "../../../assets/img/Join/timmer.svg";
import Loading from "../../Loading";
import { useUserInfo } from "../../../store/useUserInfo";

const TotalSendMail = styled.div`
	display: flex;
	margin-top: 2.25vh;
`;

const SendMailText = styled.div`
	margin-right: 8px;
	color: #949494;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
`;

const ReSendBtn = styled.div<{ isResend: boolean }>`
	display: flex;
	padding: 4px 12px;
	justify-content: center;
	align-items: center;
	color: ${({ isResend }) => (isResend ? "#D0D0D0" : "#525252")};
	border-radius: 6px;
	background-color: ${({ isResend }) => (isResend ? "#F7F7F7" : "#efefef")};
	cursor: pointer;
	pointer-events: ${({ isResend }) => isResend && "none"};
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	&:active {
		background: #d0d0d0;
	}
`;

const InputNumber = styled.div`
	display: flex;
	margin-top: 55px;
`;
const InputInfos = styled.div<{ isSelected: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 7px;
	border-bottom: 2px solid ${({ isSelected }) => (isSelected ? "#ECAA00" : "#EFEFEF")};
	color: #c4c7c7;
	width: 18.46vw;
	margin-right: 20px;
`;
const Code = styled.input`
	border: none;
	outline: none;
	width: 19.46vw;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 3rem;
	font-weight: 700;
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;
const TimeImg = styled.img`
	width: 16px;
	height: 16px;
	margin-top: 13px;
	margin-right: 4px;
`;

const Time = styled.div`
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: #b7b7b7;
	text-align: left;
	margin-top: 12px;
`;

const InputCode = () => {
	// @ts-ignore
	const inputRefs = [useRef(), useRef(), useRef(), useRef()];
	const [isSelected, setIsSelected] = useState(false);
	const [isNextPage, setIsNextPage] = useState(false);
	const [isErrorPopup, setIsErrorPopup] = useState(false);
	const [isResend, setIsResend] = useState(false);
	const [timer, setTimer] = useState(180);
	const [min, setMin] = useState(3);
	const [sec, setSec] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();
	const { email } = useUserInfo();

	const handleInputChange = (index, event) => {
		const nextIndex = index + 1;
		// @ts-ignore
		if (isNaN(inputRefs[index].current.value)) {
			return;
		} else {
			if (event.target.value.length === 1 && nextIndex < inputRefs.length) {
				// @ts-ignore
				inputRefs[nextIndex].current.focus();
			}
		}

		event.target.value.length > 0 ? setIsNextPage(true) : setIsNextPage(false);
	};

	const handleKeydown = (index, event) => {
		let beforeIndex = index - 1;
		if (index == 0) {
			beforeIndex = 0;
		}
		if (event.keyCode == 8) {
			// @ts-ignore
			inputRefs[beforeIndex].current.focus();
		}
	};

	const checkCode = () => {
		let code = "";
		for (let i = 0; i < 4; i++) {
			// @ts-ignore
			code += inputRefs[i].current.value;
		}

		async function fetchCode() {
			try {
				const res = await API.get(`/api/v1/user/auth/code/${email + "@sangmyung.kr"}/${code}`);
				if (res.data.success) {
					navigate("/password");
				} else {
					setIsErrorPopup(true);
				}
			} catch (error) {
				console.error(error);
				setIsErrorPopup(true);
			}
		}
		fetchCode();
	};

	const ChangeBarColor = () => {
		setIsSelected(true);
	};

	const ReSendEmail = () => {
		let UserEmail = location.state?.userEmail;
		async function fetchCode() {
			try {
				const res = await API.get("/mail/send?email=" + UserEmail + "@sangmyung.kr");
				if (res.status == 200) {
					setIsResend(true);
					setTimer(180);
				}
			} catch (error) {
				console.error(error);
			}
		}
		fetchCode();
	};

	useEffect(() => {
		if (timer === 181) {
			return;
		}

		const id = setInterval(() => {
			setTimer((timer) => timer - 1);
			setMin(Math.floor(timer / 60));
			setSec(timer % 60);
		}, 1000);

		if (timer === -1) {
			clearInterval(id);
			setTimer(181);
		}

		return () => clearInterval(id);
	}, [timer]);

	return (
		<CS.Totalframe>
			<CS.ScreenComponent>
				<CS.Header backgroundColor="White">
					<HeaderMenu />
				</CS.Header>
				<TopNumber page={2} />
				<MainText maintitle={`수신된 메일에 적힌\n4자리 코드를 입력해 주세요`} />
				<TotalSendMail>
					<SendMailText>메일이 도착하지 않았나요?</SendMailText>
					<ReSendBtn onClick={() => ReSendEmail()} isResend={isResend}>
						인증 메일 재전송
					</ReSendBtn>
				</TotalSendMail>
				<InputNumber>
					{inputRefs.map((ref, index) => (
						<InputInfos isSelected={isSelected}>
							<Code
								key={index}
								// @ts-ignore
								ref={ref}
								type="text"
								maxLength={1}
								pattern="\d*"
								onChange={(e) => handleInputChange(index, e)}
								onKeyUp={(e) => handleKeydown(index, e)}
								onFocus={() => ChangeBarColor()}
							/>
						</InputInfos>
					))}
				</InputNumber>
				<CS.Flex>
					<TimeImg src={Timmer} />
					<Time>
						{min}:{sec < 10 ? "0" + sec : sec}
					</Time>
				</CS.Flex>
				<ErrorPopup
					message={`코드가 일치하지 않아요`}
					bottom={`18.72`}
					setShowPopup={setIsErrorPopup}
					isShowPopup={isErrorPopup}
				/>
				<JoinButton
					btnName={"코드 확인하기"}
					select={() => ChangeBarColor()}
					handleClick={() => checkCode()}
					isNextPage={isNextPage}
				/>
			</CS.ScreenComponent>
		</CS.Totalframe>
	);
};

export default InputCode;
