import React from "react";
import styled from "styled-components";

const AdminLogin = () => {
  return (
    <Wrapper>
      <IdInput placeholder="아이디" />
      <PassWordInput type="password" placeholder="비밀번호" />
    </Wrapper>
  );
};

export default AdminLogin;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const InputBase = styled.input`
  width: 280px;
  height: 50px;
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
