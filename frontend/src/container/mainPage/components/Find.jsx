import React from "react";
import styled from "styled-components";

const Find = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextDiv>asd</TextDiv>
        <SignUpDiv>로그인 후 이용 가능</SignUpDiv>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Find;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 85%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: green;
  border-radius: 20px;
  gap: 100px;
`;

const TextDiv = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const SignUpDiv = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  background: #0b6f03;
  color: white;
  font-size: 32px;
  font-weight: 600;
`;
