import React from 'react';
import styled from 'styled-components';
import Home from '../../images/home.png';
import Person1 from '../../images/person1.png';
import Person2 from '../../images/person2.png';

const SignUpPage = () => {
    return (
        <Container>

            <QuesDiv>
                <QuesSpan>아직 회원이 아닙니다</QuesSpan>
                <QuesSpan>회원가입 하시겠습니까?</QuesSpan>
            </QuesDiv>

            <SignupContainer>
                
                <SignupDiv>
                    <ProfileImg/>
                        <WhichSignup>
                            <SignupSpan> 일반 회원가입</SignupSpan>
                        </WhichSignup>
                </SignupDiv>
                
                <SignupDiv>
                    <ProfileImg2/>
                        <WhichSignup2>
                            <SignupSpan> 요양 보호자 회원가입</SignupSpan>
                        </WhichSignup2>
                </SignupDiv>
                
            </SignupContainer>
            
            <HomeDiv>
                    <HomeIcon/>
                    <ToHome>홈으로 돌아가기</ToHome>
            </HomeDiv>

        </Container>
    );
};

export default SignUpPage;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 1920px;
height: 1440px;
`

const QuesSpan = styled.span`
color: #000;
text-align: center;
font-family: "Open Sans";
font-size: 64px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const QuesDiv = styled.div`
display: flex;
flex-direction: column;
`

const SignupContainer = styled.div`
width: 50%;
height: 600px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const SignupDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 100%;
`

const WhichSignup = styled.div`
width: 550px;
height: 150px;
border-radius: 234px;
background: #004C0D;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const WhichSignup2 = styled.div`
width: 550px;
height: 150px;
border-radius: 234px;
background: var(--Color, #27993A);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const SignupSpan = styled.span`
color: #FFF;
font-family: "Open Sans";
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 129.7%;
cursor: pointer;
`

const ProfileImg = styled.div`
background-image: url(${Person2});
background-size: cover;
background-position: center;
border-radius: 100px;
width: 200px;
height: 200px;
`

const ProfileImg2 = styled.div`
background-image: url(${Person1});
background-size: cover;
background-position: center;
border-radius: 100px;
width: 200px;
height: 200px;
`

const HomeDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
`

const HomeIcon  =styled.div`
width: 50px;
height: 50px;
background-image: url(${Home});
background-size: cover;
background-position: center;
margin-right: 20px;
`

const ToHome = styled.div`
font-family: "Open Sans";
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
text-decoration-line: underline;
cursor: pointer;
`