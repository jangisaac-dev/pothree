import React from "react";
import styled from "styled-components";

const Find = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextDiv>
          <FindText>요양 보호사 찾기</FindText>
          <ExplainText>
            나에게 딱 맞는 요양사를 찾아보세요
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102"
              height="24"
              viewBox="0 0 102 24"
              fill="none"
            >
              <path
                d="M101.061 13.0607C101.646 12.4749 101.646 11.5251 101.061 10.9393L91.5147 1.3934C90.9289 0.807611 89.9792 0.807611 89.3934 1.3934C88.8076 1.97919 88.8076 2.92893 89.3934 3.51472L97.8787 12L89.3934 20.4853C88.8076 21.0711 88.8076 22.0208 89.3934 22.6066C89.9792 23.1924 90.9289 23.1924 91.5147 22.6066L101.061 13.0607ZM0 13.5H100V10.5H0V13.5Z"
                fill="#E5FF9B"
              />
            </svg>
          </ExplainText>
        </TextDiv>
        <SignUpDiv>로그인 후 이용 가능</SignUpDiv>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Find;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 85%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: green;
  border-radius: 20px;
  gap: 100px;
`;

const TextDiv = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background: #0b6f03;
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
