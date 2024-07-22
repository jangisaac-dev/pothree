import React from 'react';
import styled from 'styled-components';
import CarrerTable from './CarrerTable';
import { useNavigate } from 'react-router-dom';

// 개인 상세정보 페이지

const PersonalInfo = ({ seeker }) => {

    const navigate = useNavigate();
    const handleToMypage = () => {
        navigate("/myPage");
    }

    return (
        <Container>
            <PersonalSeeker>
                <InfoContainer>
                    <Infodiv>
                        <Topdiv>
                            <Position>{seeker.address}</Position>
                            <DDay>D-Day</DDay>
                        </Topdiv>
                        <OtherInfodiv>
                            <OtherInfo>이름 : </OtherInfo>
                            <OtherInfo>시급 : {seeker.hourMoney}원</OtherInfo>
                            <OtherInfo>성별 : {seeker.gender}</OtherInfo>
                            <OtherInfo>연령 : {seeker.age}</OtherInfo>
                            <OtherInfo>근무가능 시간 : {seeker.workHours}</OtherInfo>
                            <OtherInfo>자격 취득 일자 : </OtherInfo>
                        </OtherInfodiv>
                    </Infodiv>
                </InfoContainer>
                <ProfileImg>프로필 사진</ProfileImg>
            </PersonalSeeker>

            <CarrerDiv>
                <Position>경력</Position>
                <CarrerTable />
            </CarrerDiv>

            <CarrerDiv>
                <Position>자기소개</Position>
                <SelfIntro></SelfIntro>
            </CarrerDiv>

            <SelectBtn>
                <BtnSpan onClick={() => {
                    handleToMypage();
                }}>요양사 선택</BtnSpan>
            </SelectBtn>
        </Container>
    );
};



export default PersonalInfo;

const Container = styled.div`
    border-top: 2px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PersonalSeeker = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: center;
    align-items: center;
`

const InfoContainer = styled.div`
    width: 80%;
    justify-content: space-between;
`

const Position = styled.span`
    color: #000;
    text-align: center;
    font-family: "Open Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%;
`

const ProfileImg = styled.div`
    width: 180px;
    height: 200px;
    border-radius: 20px;
    border: 1px solid black;
    justify-self: flex-end;
`

const DDay = styled.div`
    margin-left: 40px;
    background-color: lightgray;
    border-radius: 20px;
    width: 40px;
    height: 20px;
    font-size: 10px;
    color: #824343;
    font-family: "Open Sans";
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Topdiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`

const Infodiv = styled.div`
    display: flex;
    flex-direction: column;
`

const OtherInfodiv = styled.div`
    display: flex;
    flex-direction: column;
`

const OtherInfo = styled.span`
    color: #000;
    font-family: "Open Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%;
`

const CarrerDiv = styled.div`
    margin-top: 20px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const SelfIntro = styled.div`
    margin-top: 20px;
    border-radius: 20px;
    width: 100%;
    height: 300px;
    padding: 10px;
    border: 1px solid black;
`

const SelectBtn = styled.button`
    border-radius: 20px;
    cursor: pointer;
    border: none;
    margin-top: 20px;
    background: #1DA133;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 60px;
`

const BtnSpan = styled.span`
    color: #FFF;
    font-family: "Open Sans";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%; 
`
