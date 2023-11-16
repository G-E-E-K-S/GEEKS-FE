import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Intro, Welcome, InputEmail, InputCode, Password, NickName, QuesText, Major, Gender, Dormitory, FinalPage} from './pages/Join/Index';
import Home from './pages/Main/Home';
import LiveRule from "./pages/Main/LiveRule";
import { MyPage, LifeStyles } from './pages/MyPage/Index';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
