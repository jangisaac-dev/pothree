import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import PersonalInfo from './PersonalInfo';
import { useLocation, useNavigate } from 'react-router-dom';

// 개인정보 보여줌

const SeekerInfoPage = () => {
    const DommyData = [
        {
            id:1,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "남",
            age: "60세",
            workHours: "9:00-18:00",
        },
        {
            id:2,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "남",
            age: "61세",
            workHours: "9:00-18:00",
        },
        {
            id:3,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "남",
            age: "62세",
            workHours: "9:00-18:00",
        },
        {
            id:4,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "남",
            age: "63세",
            workHours: "9:00-18:00",
        },
        {
            id:5,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "여",
            age: "64세",
            workHours: "9:00-18:00",
        },
        {
            id:5,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "여",
            age: "65세",
            workHours: "9:00-18:00",
        },
        {
            id:6,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "여",
            age: "66세",
            workHours: "9:00-18:00",
        },
        {
            id:7,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "여",
            age: "67세",
            workHours: "9:00-18:00",
        },
        {
            id:8,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "여",
            age: "68세",
            workHours: "9:00-18:00",
        },
        {
            id:9,
            address: "[ls로_143]",
            hourMoney: 3000,
            gender: "여",
            age: "69세",
            workHours: "9:00-18:00",
        },
        ];
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get('id');

    const seeker = DommyData.find((seeker)=>seeker.id === parseInt(id));

    const handleBack = () => {
        navigate("/find");
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <Header/>
                <TopDiv>
                    <BackBtn onClick={handleBack}>&lt;</BackBtn>
                    <Title>요양사 상세 정보</Title>
                </TopDiv>
                {seeker ? (
                    <PersonalInfo seeker={seeker} />
                ) : (
                    <div>선택된 요양사 정보가 없습니다.</div>
                )}
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

