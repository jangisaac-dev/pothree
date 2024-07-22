import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import LoginBox from "./components/LoginBox";
import Carousel from "./components/Carousel";
const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Banner>
        <LoginBox />
      </Banner>
      <Carousel />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Banner = styled.div`
  display: flex;
`;
