import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import main1 from "../../images/main1.jpg"
import SelectPos from "./SelectPos";
import SeekerInfoPage from "./SeekerInfo/SeekerInfoPage";

const Finder = () => {
  return (
    // <SeekerInfoPage/>  
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Title>요양사 찾기</Title>
        <ImageDiv/>
        <SelectPos/>
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
const Title = styled.p`
color: #000;
font-family: "Open Sans";
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-image: url(${main1});
`
