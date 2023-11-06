import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Intro from './pages/Join/Intro';
import Welcome from './pages/Join/Welcome';
import InputEmail from './pages/Join/InputEmail';
import InputCode from './pages/Join/InputCode';
import Password from "./pages/Join/Password";
import NickName from "./pages/Join/NickName";
import QuesText from "./pages/Join/QuesText";
import FinalPage from "./pages/Join/FinalPage";
import Gender from "./pages/Join/Gender";
import Major from "./pages/Join/Major";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
