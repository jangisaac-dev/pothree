import React from "react";
import SignUpMain from "./container/signup/SignUpMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./container/mainPage/MainPage";
<<<<<<< HEAD
=======
import KakaoPage from "./components/KakaoPage";
import Finder from "./container/Finder/Finder";
>>>>>>> c3d549e4e69be2d17bd161bf26cb236e5bb2ab89
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
        <Route path="/kakaoCallBack" element={<SignUpMain />} />
=======
        <Route path="/kakaoCallBack" element={<KakaoPage />} />
        <Route path="/find" element={<Finder />} />
>>>>>>> c3d549e4e69be2d17bd161bf26cb236e5bb2ab89
      </Routes>
    </Router>
  );
};

export default App;
