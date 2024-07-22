import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import PersonalInfo from './PersonalInfo';

// 개인정보 보여줌

const SeekerInfoPage = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Header/>
                <TopDiv>
                    <BackBtn>&lt;</BackBtn>
                    <Title>요양사 상세 정보</Title>
                </TopDiv>
                <PersonalInfo/>
            </ContentWrapper>
        </Wrapper>
    );
};

export default SeekerInfoPage;

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
margin-left: 10px;
`;

const BackBtn = styled.button`
    background-color: transparent;
    border: none;
    color: #000;
    font-family: "Open Sans";
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%;
    cursor: pointer;
`
const TopDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
height: 50px;
`

