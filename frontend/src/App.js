import React from "react";
import SignUpMain from "./container/signup/SignUpMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./container/mainPage/MainPage";
import KakaoPage from "./components/KakaoPage";
import Finder from "./container/Finder/Finder";
import SeekerInfoPage from "./container/Finder/SeekerInfo/SeekerInfoPage";
import Mypage from "./container/mypage/Mypage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/kakaoCallBack" element={<KakaoPage />} />
        <Route path="/find" element={<Finder />} />
        <Route path="/seekerInfo" element={<SeekerInfoPage/>}/>
        <Route path="/myPage" element={<Mypage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
