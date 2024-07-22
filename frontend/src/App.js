import React from "react";
import MainPage from "./container/mainPage/MainPage";
import NearBy from "./container/mainPage/components/MyNear/NearBy";
import SignUpMain from "./container/signup/SignUpMain";

const App = () => {
  return (
    <div>
      <SignUpMain/>
      {/* {<MainPage />} */}
      {/* <NearBy /> */}
    </div>
  );
};

export default App;
