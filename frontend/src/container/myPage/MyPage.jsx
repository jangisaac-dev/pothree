import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
const MyPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Typo>마이페이지</Typo>
        <InfoDiv></InfoDiv>
        <InfoDiv></InfoDiv>
        <InfoDiv></InfoDiv>
        <InfoDiv></InfoDiv>
        <InfoDiv></InfoDiv>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;
const Typo = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: black;
`;
const InfoDiv = styled.div`
  width: 50%;
  border-radius: 20px;
  border: 1px solid black;
  height: 50px;
`;
