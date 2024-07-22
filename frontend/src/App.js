import React from "react";
import SignUpMain from "./container/signup/SignUpMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./container/mainPage/MainPage";
import KakaoPage from "./components/KakaoPage";
import Finder from "./container/Finder/Finder";
<<<<<<< HEAD
import SeekerInfoPage from "./container/Finder/SeekerInfo/SeekerInfoPage";
import Mypage from "./container/mypage/Mypage";
=======
import SubmitUseForm from "./container/submitPersonIfo/SubmitUseForm";
import FindOldMan from "./container/findOldMan/FindOldMan";
>>>>>>> ac96e41a20090e9f101bc70002d44a0f4942cefe
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/kakaoCallBack" element={<KakaoPage />} />
        <Route path="/find" element={<Finder />} />
<<<<<<< HEAD
        <Route path="/seekerInfo" element={<SeekerInfoPage/>}/>
        <Route path="/myPage" element={<Mypage/>}/>
=======
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/upload" element={<SubmitUseForm />} />
        <Route path="findOldMan" element={<FindOldMan />} />
>>>>>>> ac96e41a20090e9f101bc70002d44a0f4942cefe
      </Routes>
    </Router>
  );
};

export default App;
