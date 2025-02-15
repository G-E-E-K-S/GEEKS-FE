import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import {
	Intro,
	AccessRight,
	PersonalInfoTxt,
	ServiceTxt,
	LocationTxt,
	MarketingTxt,
	Agree,
	Login,
	InputEmail,
	InputCode,
	Password,
	NickName,
	QuesText,
	Major,
	Gender,
	Dormitory,
	FindPassword,
	FinalPage,
	Welcome,
	AlreadyRegist
} from "./pages/Join/Index";
import { LiveRule, Home, Search, Alarm } from "./pages/Main/Index";
import { FindRoommate, CompareUserInfo, RoommateSendText, FinishRoommate } from "./pages/FindRoommate/Index";
import { ComingSoon, Suggestion, WriteSuggestion, DetailSuggestion } from "./pages/Suggestion/Index";
import { Chat, ChatRoom } from "./pages/Chat/Index";
import { WritePost, Post, Community, MyCommunity, ScrapPost, CommunityWrite, OpenGroup } from "./pages/Community/Index";
import {
	MyPage,
	LifeStyles,
	EditProfile,
	SettingUserInfo,
	SaveList,
	Notice,
	FAQ,
	FaqContent,
	RoommateApply,
	MyProfile,
	SecessionReason,
	NoticeDetail,
	EventNoticeDetail,
	ChangePassword,
	ReviewEvent,
	Notification,
	TermPolicy
} from "./pages/MyPage/Index";
import "./index.css";
import Loading from "./pages/Loading";
import Manager from "./pages/Manager/ManagerMain";
import Calendar from './pages/Calendar/Calendar';
import Schedule from "./pages/Schedule/Schedule";
import ScheduleEdit from "./pages/Schedule/ScheduleEdit/ScheduleEdit";

function App() {
	return (
		<ThemeProvider theme={theme}>
			{/* <GlobalStyle /> */}
			<Router>
				<Routes>
					<Route path="/" element={<Intro />} />
					<Route path="/agree" element={<Agree />} />
					<Route path="/servicetxt" element={<ServiceTxt />} />
					<Route path="/personalinfotxt" element={<PersonalInfoTxt />} />
					<Route path="/marketingtxt" element={<MarketingTxt />} />
					<Route path="/locationtxt" element={<LocationTxt />} />
					<Route path="/accessright" element={<AccessRight />} />
					<Route path="/welcome" element={<Welcome />} />
					<Route path="/login" element={<Login />} />
					<Route path="/inputemail" element={<InputEmail />} />
					<Route path="/inputcode" element={<InputCode />} />
					<Route path="/password" element={<Password />} />
					<Route path="/nickname" element={<NickName />} />
					<Route path="/questiontext" element={<QuesText />} />
					<Route path="/major" element={<Major />} />
					<Route path="/finalpage" element={<FinalPage />} />
					<Route path="/findPassword" element={<FindPassword />} />
					<Route path="/alreadyregist" element={<AlreadyRegist />} />
					<Route path="/gender" element={<Gender />} />
					<Route path="/dormitory" element={<Dormitory />} />
					<Route path="/home" element={<Home />} />
					<Route path="/liverule" element={<LiveRule />} />
					<Route path="/search" element={<Search />} />
					<Route path="/noti" element={<Alarm />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/myprofile" element={<MyProfile />} />
					<Route path="/secessionreason" element={<SecessionReason />} />
					<Route path="/lifestyle" element={<LifeStyles />} />
					<Route path="/editprofile" element={<EditProfile />} />
					<Route path="/settinguserinfo" element={<SettingUserInfo />} />
					<Route path="/savelist" element={<SaveList />} />
					<Route path="/notice" element={<Notice />} />
					<Route path="/notification" element={<Notification />} />
					<Route path="/changepassword" element={<ChangePassword />} />
					<Route path="/notice/details/:noticenum" element={<NoticeDetail />} />
					<Route path="/notice/details/event" element={<EventNoticeDetail />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/faq/:type/:pageNum" element={<FaqContent />} />
					<Route path="/roommate" element={<FindRoommate />} />
					<Route path="/finishroommate" element={<FinishRoommate />} />
					<Route path="/detail/details/:matchingId/:opponentId" element={<CompareUserInfo />} />
					<Route path="/roommatesendtext" element={<RoommateSendText />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/chat/chatroom/:roomId" element={<ChatRoom />} />
					<Route path="/roommate/apply" element={<RoommateApply />} />
					<Route path="/writepost" element={<WritePost />} />
					<Route path="/post/:postId" element={<Post />} />
					<Route path="/community" element={<Community />} />
					<Route path="/myCommunity" element={<MyCommunity />} />
					<Route path="/scrappost" element={<ScrapPost />} />
					<Route path="/communitywrite" element={<CommunityWrite />} />
					<Route path="/opengroup" element={<OpenGroup />} />
					<Route path="/loading" element={<Loading />} />
					<Route path="/reviewevent" element={<ReviewEvent />} />
					<Route path="/comingsoon" element={<ComingSoon />} />
					<Route path="/suggestion" element={<Suggestion />} />
					<Route path="/writesuggestion" element={<WriteSuggestion />} />
					<Route path="/suggestion/show/:pagenum" element={<DetailSuggestion />} />
					<Route path="/managermain" element={<Manager />} />
					<Route path="/termpolicy" element={<TermPolicy />} />
					<Route path="/calendar" element={<Calendar />} />
					<Route path="/schedule/:scheduleId" element={<Schedule />} />
					<Route path="/schedule/add" element={<ScheduleEdit />} />
					<Route path="/schedule/:scheduleId/modify" element={<ScheduleEdit />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
