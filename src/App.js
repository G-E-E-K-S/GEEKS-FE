import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Intro, Welcome, InputEmail, InputCode, Password, NickName, QuesText, Major, Gender, Dormitory, FinalPage} from './pages/Join/Index';
import Home from './pages/Main/Home';
import LiveRule from "./pages/Main/LiveRule";
import { MyPage, LifeStyles, EditProfile, SettingUserInfo, SaveList, Notice, FAQ, FaqRommate, RoommateApply } from './pages/MyPage/Index';
import { FindRoommate , User, ApplyConfirm } from './pages/FindRoommate/Index';
import { Chat , ChatRoom } from './pages/Chat/Index';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/welcome" element={<Welcome/>} />
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
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/lifestyle" element={<LifeStyles/>} />
          <Route path="/editprofile" element={<EditProfile/>} />
          <Route path="/settinguserinfo" element={<SettingUserInfo/>} />
          <Route path="/savelist" element={<SaveList/>} />
          <Route path="/notice" element={<Notice/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/faq/rommate" element={<FaqRommate/>} />
          <Route path="/roommate" element={<FindRoommate/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/applyconfirm" element={<ApplyConfirm/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/chat/chatroom" element={<ChatRoom/>} />
          <Route path="/roommate/apply" element={<RoommateApply/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
