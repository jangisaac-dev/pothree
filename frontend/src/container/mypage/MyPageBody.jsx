import React from 'react';
import styled from 'styled-components';
import blackpro from '../../images/blackpro.png';

const MyPageBody = () => {

    const DommyData = [
        {
            id:1,
            name:"김",
            gender: "여",
            age: "60세",
            lisence: 5,
        },
        {
            id:2,
            name:"홍",
            gender: "여",
            age: "60세",
            lisence: 5,
        },
        {
            id:3,
            name:"장",
            gender: "여",
            age: "60세",
            lisence: 5,
        },
        {
            id:4,
            name:"손",
            gender: "여",
            age: "60세",
            lisence: 5,
        },
        {
            id:5,
            name:"황",
            gender: "여",
            age: "60세",
            lisence: 5,
        },
    ]

    return (
        <Container>
            <MyInfoContainer>
                <Title>마이페이지</Title>
                <InfoSet>
                    <InfoName>이름</InfoName>
                    <InfoDataCon>
                        <InfoDataSpan>이름</InfoDataSpan>
                    </InfoDataCon>
                </InfoSet>
                <InfoSet>
                    <InfoName>연락처</InfoName>
                    <InfoDataCon>
                        <InfoDataSpan>전화번호</InfoDataSpan>
                    </InfoDataCon>
                </InfoSet>
                <InfoSet>
                    <InfoName>주소</InfoName>
                    <InfoDataCon>
                        <InfoDataSpan>상세주소</InfoDataSpan>
                    </InfoDataCon>
                </InfoSet>
                <InfoSet>
                    <InfoName>장기요양등급</InfoName>
                    <InfoDataCon>
                        <InfoDataSpan>몇급?</InfoDataSpan>
                    </InfoDataCon>
                </InfoSet>
                <InfoSet>
                    <InfoName>성별</InfoName>
                    <InfoDataCon>
                        <InfoDataSpan>남성</InfoDataSpan>
                    </InfoDataCon>
                </InfoSet>
                <ChangBtn>
                    <ButtonSpan>회원정보 수정</ButtonSpan>
                </ChangBtn>
            </MyInfoContainer>
            <ProfileContainer>
                <ProfileDiv/>
                <Changing>프로필 변경</Changing>
            </ProfileContainer>
        </Container>
    );
};

export default MyPageBody;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const MyInfoContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const Title = styled.span`
color: #000;
font-family: "Open Sans";
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const InfoSet = styled.div`
display: flex;
flex-direction: column;
`

const InfoName = styled.span`
color: #A4A2A2;
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const InfoDataCon = styled.div`
width: 300px;
margin-top: 5px;
border: 1px solid black;
border-radius: 10px;
padding: 10px;
`

const InfoDataSpan = styled.span`
color: #000;
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const ChangBtn = styled.button`
    width:300px;
    height:50px;
    border-radius: 10px;
`

const ButtonSpan = styled.span`
cursor: pointer;
text-align: center;
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const ProfileDiv = styled.div`
background-image: url(${blackpro});
width: 250px;
height: 250px;
background-size: cover;
background-position: center;
`

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Changing = styled.span`
color: #909090;
font-family: "Open Sans";
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
cursor: pointer;
`