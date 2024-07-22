import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Carousel = () => {
  const intervalRef = useRef(null);
  const Total_Image = 4;
  const [ImageIdx, setImageIdx] = useState(0);

  const handleNextImage = () => {
    if (ImageIdx < Total_Image) {
      setImageIdx((perv) => (perv + 1) % Total_Image);
    } else if (ImageIdx === Total_Image) {
      setImageIdx(0);
    }
  };

  const handlePervImage = () => {
    if (ImageIdx > 0) {
      setImageIdx((perv) => (perv - 1) % Total_Image);
    } else if (ImageIdx === 0) {
      setImageIdx(Total_Image - 1);
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleNextImage, 3000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    resetInterval();
  }, [ImageIdx]);

  const handleDotClick = (idx) => {
    setImageIdx(idx);
  };

  return (
    <Container>
      <ShowContainer>
        <ImageContainer imageidx={ImageIdx}>
          {Array.from({ length: Total_Image }).map((_, index) => (
            <ImageDiv></ImageDiv>
          ))}
        </ImageContainer>
      </ShowContainer>
      <ButtonDiv>
        <NextPrevBtn onClick={handlePervImage}>&lt;</NextPrevBtn>
        <DotsDiv>
          {Array.from({ length: Total_Image }).map((_, index) => (
            <Dots
              key={index}
              active={index === ImageIdx}
              onClick={() => handleDotClick(index)}
            ></Dots>
          ))}
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
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  transform: translateX(${(prop) => -prop.imageidx * 800}px);
  transition: 1s ease-in-out;
`;

const ShowContainer = styled.div`
  width: 800px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ImageDiv = styled.div`
  width: 800px;
  height: 377px;
  background-color: gray;
  border-radius: 30px;
`;

const ButtonDiv = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NextPrevBtn = styled.button`
  border: none;
  background-color: white;
  font-size: 40px;
`;

const DotsDiv = styled.div`
  width: 153px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 20px;
  margin-right: 20px;
`;

const Dots = styled.div`
  width: ${(prop) => (prop.active ? "40px" : "20px")};
  background-color: ${(props) => (props.active ? "gray" : "black")};
  border-radius: 20px;
`;
