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
  width: 1920px;
  height: 3135px;
`;
