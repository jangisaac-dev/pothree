import React from "react";
<<<<<<< HEAD
// import MainPage from "./container/mainPage/MainPage";
import SubmitUseForm from "./container/submitPersonIfo/submitInfo";

const App = () => {
  return (
    <div>
      {/* <MainPage /> */}
      <SubmitUseForm />
    </div>
=======
import SignUpMain from "./container/signup/SignUpMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./container/mainPage/MainPage";
import KakaoPage from "./components/KakaoPage";
import Finder from "./container/Finder/Finder";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/kakaoCallBack" element={<KakaoPage />} />
        <Route path="/find" element={<Finder />} />
        <Route path="signup" element={<SignUpMain />} />
      </Routes>
    </Router>
>>>>>>> eacfa8597fa9bcc301ecafa6077d1624849d215f
  );
};

export default App;
