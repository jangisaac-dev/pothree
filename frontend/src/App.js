import React from "react";
import MainPage from "./container/mainPage/MainPage";
import NearBy from "./container/mainPage/components/MyNear/NearBy";
import SignUpPage from "./container/signup/SignUpPage";

const App = () => {
  return (
    <div>
      <SignUpPage/>
      {/*<MainPage />*/}
      {/* <NearBy /> */}
    </div>
  );
};

export default App;
