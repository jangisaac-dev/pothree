import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
const Finder = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Title>요양사 찾기</Title>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Finder;
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
const Title = styled.p``;
