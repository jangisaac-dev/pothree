import React from "react";
import styled from "styled-components";
import { useState } from "react";
import kakaoLogin from "../../../../images/kakaoLogin.png";
import AdminLogin from "./components/AdminLogin";
import { REST_API_KEY, REDIRECT_URI } from "../../../../config/RESTAPI";

const LoginBox = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };
  return (
    <Wrapper>
      <ToggleDiv>
        <label htmlFor="toggle" className="toggleSwitch">
          <ToggleInput
            type="checkbox"
            id="toggle"
            checked={checked}
            onChange={handleToggle}
          />
          <ToggleContainer checked={checked}>
            <ToggleButton checked={checked}>
              {checked ? "관리자" : "일반"}
            </ToggleButton>
            <div>일반</div>
            <div>관리자</div>
          </ToggleContainer>
        </label>
      </ToggleDiv>
      {checked ? (
        <AdminLogin />
      ) : (
        <ImageDiv onClick={loginHandler}>
          <img src={kakaoLogin} alt="" width={300} height={80} />
        </ImageDiv>
      )}
    </Wrapper>
  );
};

export default LoginBox;

const Wrapper = styled.div`
  width: 30%;
  height: 270px;
  border-radius: 40px;
  border: 3px solid #ededed;
  background: #f0eded;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
  position: relative;
`;

const ToggleDiv = styled.div`
  color: black;
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 20px;
`;

const ToggleContainer = styled.div`
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  border-radius: 30px;
  background: white;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.3);
  }
  color: black;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
`;

const ToggleButton = styled.span`
  width: 80px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.checked ? "85px" : "5px")};
  transform: translateY(-50%);
  border-radius: 20px;
  background: #1da133;
  transition: left 0.2s ease-in, background 0.2s ease-in;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleInput = styled.input`
  display: none;
`;
const ImageDiv = styled.div`
  margin-top: 40px;
  cursor: pointer;
`;
