import React from 'react';
import styled from 'styled-components';
import ShowSeeker from './ShowSeeker';

const SelectPos = () => {
    const Length = 100;
    return (
        <>
            <Container>

                <Title>지역 선택</Title>
            
                <SelectionDiv>
                    <PositionSelect>
                        {Array.from({ length: Length }, (_, index) => (
                            <PosOption key={index} value={index}>{index}</PosOption>
                        ))}
                    </PositionSelect>
                    <PositionSelect></PositionSelect>
                    <PositionSelect></PositionSelect>
                </SelectionDiv>
            
                <SetBtnDiv>
                    <SearchBtn>
                        <BtnSpan>내 지역 요양사 검색</BtnSpan>
                    </SearchBtn>
                </SetBtnDiv>

            </Container>
                <ShowSeeker/>
        </>
    );
};

export default SelectPos;

const Container = styled.div`
    width: 100%;
    height: 250px;
    background-color: #F5F5F5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Title =styled.span`
color: #000;
font-family: "Open Sans";
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const SelectionDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const SetBtnDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const SearchBtn = styled.button`
border-radius:30px;
border: none;
height: 45px;
width: 400px;
background-color:  #1DA133;
cursor: pointer;
`

const BtnSpan = styled.span`
color: #FFF;
font-family: "Open Sans";
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const PositionSelect = styled.select`
    width: 200px;
    height: 30px;
    border-radius: 10px;
`

const PosOption = styled.option`

`