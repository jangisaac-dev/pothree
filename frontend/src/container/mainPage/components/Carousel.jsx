import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainImages from "./MainImages";

const WIDTH = 700;

const Carousel = () => {
  const intervalRef = useRef(null);
  const Total_Image = MainImages.length;
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
          {MainImages.map((image, index) => (
            <ImageDiv
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </ImageContainer>
        <ButtonDiv>
          <NextPrevBtn onClick={handlePervImage}>&lt;</NextPrevBtn>
          <DotsDiv>
            {MainImages.map((_, index) => (
              <Dots
                key={index}
                active={index === ImageIdx}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </DotsDiv>
          <NextPrevBtn onClick={handleNextImage}>&gt;</NextPrevBtn>
        </ButtonDiv>
      </ShowContainer>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  width: ${WIDTH}px;
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  transform: translateX(${(prop) => -prop.imageidx *  WIDTH }px);
  transition: 1s ease-in-out;
`;

const ShowContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
`;

const ImageDiv = styled.div`
  width: ${WIDTH}px;
  background-color: gray;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NextPrevBtn = styled.button`
  cursor: pointer;
  border: none;
  font-size: 40px;
  background-color: transparent;
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
  cursor: pointer;
  width: ${(prop) => (prop.active ? "40px" : "20px")};
  background-color: ${(props) => (props.active ? "lightgray" : "black")};
  border-radius: 20px;
`;
