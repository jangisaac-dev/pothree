import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
const MainPage = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
