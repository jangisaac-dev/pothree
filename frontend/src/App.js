import React from "react";
import SignUpMain from "./container/signup/SignUpMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./container/mainPage/MainPage";
import KakaoPage from "./components/KakaoPage";
import Finder from "./container/Finder/Finder";
import SubmitUseForm from "./container/submitPersonIfo/submitInfo";
import FindOldMan from "./container/findOldMan/FindOldMan";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/kakaoCallBack" element={<KakaoPage />} />
        <Route path="/find" element={<Finder />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/findJob" element={<SubmitUseForm />} />
        <Route path="/findOldMan" element={<FindOldMan />} />
      </Routes>
    </Router>
  );
};

export default App;
