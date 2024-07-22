import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Carousel = () => {

    const Total_Image = 4;
    const [ImageIdx, setImageIdx] = useState(0);

    const handleNextImage = () => {
        if(ImageIdx < Total_Image){
            setImageIdx(perv => (perv + 1) % Total_Image);
        } else if(ImageIdx === Total_Image){
            setImageIdx(0);
        }
    }

    const handlePervImage = () => {
        if(ImageIdx > 0){
            setImageIdx(perv => (perv - 1 ) % (Total_Image));
        } else if(ImageIdx === 0){
            setImageIdx(Total_Image -1);
        }
    }

    useEffect(() => {
        const ImageInterval = setInterval(handleNextImage,3000);
        return () => clearInterval(ImageInterval);
    },[]);

    return (
        <Container>
            <ShowContainer>
                <ImageContainer imageidx={ImageIdx}>
                    <ImageDiv>{ImageIdx}</ImageDiv>
                    <ImageDiv>{ImageIdx}</ImageDiv>
                    <ImageDiv>{ImageIdx}</ImageDiv>
                    <ImageDiv>{ImageIdx}</ImageDiv>
                </ImageContainer>
            </ShowContainer>
            <ButtonDiv>
                <NextPrevBtn onClick={handlePervImage}>&lt;</NextPrevBtn>
                <DotsDiv>
                    <Dots key={1}></Dots>
                    <Dots key={2}></Dots>
                    <Dots key={3}></Dots>
                    <Dots key={4}></Dots>
                </DotsDiv>
                <NextPrevBtn onClick={handleNextImage}>&gt;</NextPrevBtn>
            </ButtonDiv>
        </Container>
    );
};

export default Carousel;

const Container = styled.div`
display: flex;
flex-direction: column;
`

const ImageContainer = styled.div`
display: flex;
flex-direction: row;
transform: translateX(${(prop) => -prop.imageidx * 1100}px);
transition: 1s ease-in-out;
`

const ShowContainer = styled.div`
width: 1100px;
overflow: hidden;
display: flex;
flex-direction: row;
justify-content: flex-start;
`

const ImageDiv = styled.div`
width: 1100px;
height: 500px;
background-color: gray;
border-radius: 30px;
`

const ButtonDiv = styled.div`
width: 1100px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const NextPrevBtn = styled.button`
border: none;
background-color: white;
font-size: 40px;
`

const DotsDiv = styled.div`
width: 153px;
height: 20px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-left: 20px;
margin-right:20px;
`

const Dots = styled.div`
width: 20px;
height: 20px;
background-color: black;
border-radius: 20px;
`