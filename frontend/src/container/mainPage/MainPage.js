import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Carousel from "./components/Carousel";
const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Carousel/>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
