import React from "react";
import styled from "styled-components";

const LoginBox = () => {
  
  return (
    <Wrapper>
      <ToggleDiv>
        <DivContainer></DivContainer>
        <LogInDiv>
          <NameSpan>권해수</NameSpan>
          <JustSpan>님 반가워요!</JustSpan>
        </LogInDiv>
        <MyPageBtn>마이페이지 ------></MyPageBtn>
        <Logout>로그아웃</Logout>
      </ToggleDiv>
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
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 20px;
`;

const LogInDiv = styled.div`
width: 100%
`

const NameSpan = styled.span`
color: #000;
text-align: center;
font-family: "Open Sans";
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
text-decoration-line: underline;
`
const JustSpan = styled.span`
color: #000;
font-family: "Open Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const MyPageBtn = styled.div`
width: 80%;
height: 50px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #B1D470;
border-radius: 20px;
color: #000;
text-align: center;
font-family: "Open Sans";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
cursor: pointer;
`

const Logout = styled.span`
color: #000;

text-align: center;
font-family: "Open Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 116.7%; /* 28.008px */
text-decoration-line: underline;
cursor: pointer;
`

const DivContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;

`