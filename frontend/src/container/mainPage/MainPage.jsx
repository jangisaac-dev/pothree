import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import LoginBox from "./components/Login/LoginBox";
import Carousel from "./components/Carousel";
import NearBy from "./components/MyNear/NearBy";
import Find from "./components/Find";
const MainPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Banner>
          <Carousel />
          <LoginBox />
        </Banner>
        <Find />
        <NearBy />
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainPage;

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

const Banner = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: space-around;
`;
