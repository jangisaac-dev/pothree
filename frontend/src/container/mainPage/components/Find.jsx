import React from "react";
import styled from "styled-components";
import backgroundImage from "../../../images/find.png";

const Find = () => {
  return (
    <ContentWrapper>
      <TextDiv>
        <FindText>요양 보호사 찾기</FindText>
        <ExplainText>나에게 딱 맞는 요양사를 찾아보세요</ExplainText>
      </TextDiv>
      <SignUpDiv>                  </SignUpDiv>
    </ContentWrapper>
  );
};

export default Find;

const ContentWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: green;
  border-radius: 20px;
  gap: 100px;
  background-image: url(${backgroundImage});
  background-size: cover; /* 배경 이미지가 컨테이너 크기에 맞게 조절됩니다. */
  background-position: center; /* 배경 이미지가 중앙에 위치합니다. */
`;

const TextDiv = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const SignUpDiv = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  color: white;
  font-size: 32px;
  font-weight: 600;
`;
const FindText = styled.span`
  color: white;
  font-size: 50px;
  font-weight: 600;
`;
const ExplainText = styled.span`
  color: #e5ff9b;
  font-family: "Open Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 116.7%; /* 37.344px */
  display: flex;
`;
