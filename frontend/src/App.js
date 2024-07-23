import React from "react";
import SignUpMain from "./container/signup/SignUpMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./container/mainPage/MainPage";
import KakaoPage from "./components/KakaoPage";
import Finder from "./container/Finder/Finder";
import SubmitUseForm from "./container/submitPersonIfo/SubmitUseForm";
import FindOldMan from "./container/findOldMan/FindOldMan";
import SeekerInfoPage from "./container/Finder/SeekerInfo/SeekerInfoPage";
import MyPage from "./container/mypage/Mypage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/kakaoCallBack" element={<KakaoPage />} />
        <Route path="/find" element={<Finder />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route path="/upload" element={<SubmitUseForm />} />
<<<<<<< HEAD
        <Route path="findOldMan" element={<FindOldMan />} />
        <Route path="/seekerInfo" element={<SeekerInfoPage/>}/>
        <Route path="/myPage" element={<MyPage/>}/>
=======
        <Route path="/findOldMan" element={<FindOldMan />} />
>>>>>>> 275e4fb6fb0daa101421bae20bdbeb288683a647
      </Routes>
    </Router>
  );
};

export default App;
