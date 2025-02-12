// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Home from "../../assets/img//Navigation/home.svg";
// import FillHome from "../../assets/img//Navigation/fillHome.svg";
// import Roommate from "../../assets/img//Navigation/roommate.svg";
// import FillRoommate from "../../assets/img//Navigation/fillRoommate.svg";
// import FillSuggestion from "../../assets/img/Navigation/fillSuggestion.svg";
// import Suggestion from "../../assets/img/Navigation/suggestion.svg";
// import Chat from "../../assets/img//Navigation/chat.svg";
// import FillChat from "../../assets/img//Navigation/fillChat.svg";
// import Community from "../../assets/img//Navigation/community.svg";
// import FillCommunity from "../../assets/img//Navigation/fillCommumnity.svg";
// import Mypage from "../../assets/img/Navigation/myPage.svg";
// import FillMyPage from "../../assets/img//Navigation/fillMyPage.svg";

// const TotalNavigationBar = styled.div`
// 	box-sizing: border-box;
// 	display: flex;
// 	justify-content: space-between;
// 	position: fixed;
// 	bottom: 0;
// 	width: 100vw;
// 	padding: 12px 0;
// 	height: 11.84vh;
// 	border-radius: 12px 12px 0px 0px;
// 	border-top: 1px solid #efefef;
// 	background: #fff;
// `;

// const Icons = styled.div`
// 	color: ${(props) => (props.isSelected ? "#333" : "#B7B7B7")};
// 	width: 20vw;
// 	height: 9vh;
// 	margin: 0 auto;
// 	text-align: center;
// 	cursor: pointer;
// `;

// const Icon = styled.img`
// 	width: 28px;
// 	height: 28px;
// `;

// const IconText = styled.div`
// 	font-size: 12px;
// 	font-style: normal;
// 	font-weight: 600;
// `;

// const NavigationBar = (props) => {
// 	const [isHome, setIsHome] = useState(true);
// 	const [isSuggestion, setIsSuggestion] = useState(true);
// 	const [isRoommate, setIsRoommate] = useState(false);
// 	const [isChat, setIsChat] = useState(false);
// 	const [isCommunity, setIsCommunity] = useState(false);
// 	const [isMy, setIsMy] = useState(false);
// 	const [selectIcon, setSelectIcon] = useState("home");

// 	let navigate = useNavigate();

// 	useEffect(() => {
// 		setSelectIcon(props.type);
// 	}, [props.type]);

// 	const handlePage = (pageName) => {
// 		setIsHome(false);
// 		setIsRoommate(false);
// 		setIsChat(false);
// 		setIsCommunity(false);
// 		setIsMy(false);

// 		switch (pageName) {
// 			case "isHome":
// 				setIsHome(true);
// 				navigate("/home");
// 				break;
// 			case "isRoommate":
// 				setIsRoommate(true);
// 				navigate("/roommate");
// 				break;
// 			case "isSuggestion":
// 				setIsSuggestion(true);
// 				navigate("/comingsoon");
// 				break;
// 			case "isChat":
// 				setIsChat(true);
// 				navigate("/chat");
// 				break;
// 			case "isCommunity":
// 				setIsCommunity(true);
// 				navigate("/community");
// 				break;
// 			case "isMy":
// 				setIsMy(true);
// 				navigate("/mypage");
// 				break;
// 			default:
// 				break;
// 		}
// 	};

// 	return (
// 		<TotalNavigationBar>
// 			<Icons isSelected={selectIcon == "home"} onClick={() => handlePage("isHome")}>
// 				{selectIcon == "home" ? <Icon src={FillHome} /> : <Icon src={Home} />}
// 				<IconText>홈</IconText>
// 			</Icons>
// 			<Icons isSelected={selectIcon == "rommate"} onClick={() => handlePage("isRoommate")}>
// 				{selectIcon == "rommate" ? <Icon src={FillRoommate} /> : <Icon src={Roommate} />}
// 				<IconText>룸메찾기</IconText>
// 			</Icons>
// 			<Icons isSelected={selectIcon == "chat"} onClick={() => handlePage("isChat")}>
// 				{selectIcon == "chat" ? <Icon src={FillChat} /> : <Icon src={Chat} />}
// 				<IconText>대화</IconText>
// 			</Icons>
// 			<Icons isSelected={selectIcon == "mypage"} onClick={() => handlePage("isMy")}>
// 				{selectIcon == "mypage" ? <Icon src={FillMyPage} /> : <Icon src={Mypage} />}
// 				<IconText>마이</IconText>
// 			</Icons>
// 		</TotalNavigationBar>
// 	);
// };

// export default NavigationBar;
