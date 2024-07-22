import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NearBy from "./components/MyNear/NearBy";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <NearBy />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
