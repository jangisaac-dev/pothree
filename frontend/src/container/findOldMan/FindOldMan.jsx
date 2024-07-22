import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import findOldMan from "../../images/findOldMan.jpeg";
import LocationSelectet from "../../components/LocationSelectet";
const FindOldMan = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Typo>어르신 찾기</Typo>
        <Banner />
        <LocationSelectet />
      </ContentWrapper>
    </Wrapper>
  );
};

export default FindOldMan;

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
  gap: 50px;
`;
const Typo = styled.span`
  font-size: 50px;
  font-weight: 600;
`;
const Banner = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${findOldMan});
  width: 100%;
  height: 300px;
`;
