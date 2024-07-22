import React from "react";
import styled from "styled-components";

const AdminLogin = () => {
  return (
    <Wrapper>
      <IdInput placeholder="아이디" />
      <PassWordInput type="password" placeholder="비밀번호" />
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  );
};

export default AdminLogin;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

const InputBase = styled.input`
  width: 280px;
  height: 40px;
  background-color: white;
  border-radius: 45px;
  outline: none;
  border: none;
  padding-left: 20px;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const IdInput = styled(InputBase)``;
const PassWordInput = styled(InputBase)``;

const LoginButton = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 42px;
  background: #1da133;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
