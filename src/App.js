import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Intro, Welcome, Login, InputEmail, InputCode, Password, NickName, QuesText, Major, Gender, Dormitory, FinalPage} from './pages/Join/Index';
import { LiveRule, Home, Search } from './pages/Main/Index';
import { MyPage, LifeStyles, EditProfile, SettingUserInfo, SaveList, Notice, FAQ, FaqRommate, RoommateApply } from './pages/MyPage/Index';
import { FindRoommate , User, ApplyConfirm } from './pages/FindRoommate/Index';
import { Chat , ChatRoom } from './pages/Chat/Index';
import { WritePost, Post, Community, MyCommunity } from './pages/Community/Index';
import './index.css';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/inputemail" element={<InputEmail/>} />
          <Route path="/inputcode" element={<InputCode/>} />
          <Route path="/password" element={<Password/>} />
          <Route path="/nickname" element={<NickName/>} />
          <Route path="/questiontext" element={<QuesText/>} />
          <Route path="/major" element={<Major/>} />
          <Route path="/finalpage" element={<FinalPage/>} />
          <Route path="/gender" element={<Gender/>} />
          <Route path="/dormitory" element={<Dormitory/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/liverule" element={<LiveRule/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/lifestyle" element={<LifeStyles/>} />
          <Route path="/editprofile" element={<EditProfile/>} />
          <Route path="/settinguserinfo" element={<SettingUserInfo/>} />
          <Route path="/savelist" element={<SaveList/>} />
          <Route path="/notice" element={<Notice/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/faq/rommate" element={<FaqRommate/>} />
          <Route path="/roommate" element={<FindRoommate/>} />
          <Route path="/detail/details/:userId" element={<User/>} />
          <Route path="/applyconfirm" element={<ApplyConfirm/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/chat/chatroom/:roomId" element={<ChatRoom/>} />
          <Route path="/roommate/apply" element={<RoommateApply/>} />
          <Route path="/writepost" element={<WritePost/>} />
          <Route path="/post/:postId" element={<Post/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/myCommunity" element={<MyCommunity/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
