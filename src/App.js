import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Intro from './pages/Join/Intro';
import Welcome from './pages/Join/Welcome';
import InputEmail from './pages/Join/InputEmail';
import InputCode from './pages/Join/InputCode';
import NickName from "./pages/Join/NickName";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/inputemail" element={<InputEmail/>} />
          <Route path="/inputcode" element={<InputCode/>} />
          <Route path="/nickname" element={<NickName/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
