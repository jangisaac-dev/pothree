import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import findOldMan from "../../images/findOldMan.jpeg";
import LocationSelectet from "../../components/LocationSelectet";
import axios from "axios";

const FindOldMan = () => {
  const [data, setData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("");
  //       setData(response.data);
  //     } catch (error) {
  //       setError("Error fetching data.");
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  //더미데이터
  useEffect(() => {
    const dummyData = [
      {
        address: "[서울시_강남구]",
        gender: "남성",
        age: "70대",
        careLevel: "3급",
      },
      {
        address: "[부산시_해운대구]",
        gender: "여성",
        age: "80대",
        careLevel: "1급",
      },
      {
        address: "[인천시_연수구]",
        gender: "남성",
        age: "60대",
        careLevel: "4급",
      },
      {
        address: "[대구시_수성구]",
        gender: "여성",
        age: "70대",
        careLevel: "2급",
      },
      {
        address: "[광주시_서구]",
        gender: "남성",
        age: "80대",
        careLevel: "5급",
      },
      {
        address: "[대전시_유성구]",
        gender: "여성",
        age: "60대",
        careLevel: "3급",
      },
      {
        address: "[울산시_남구]",
        gender: "남성",
        age: "70대",
        careLevel: "1급",
      },
      {
        address: "[세종시_한솔동]",
        gender: "여성",
        age: "80대",
        careLevel: "4급",
      },
      {
        address: "[경기도_성남시]",
        gender: "남성",
        age: "60대",
        careLevel: "2급",
      },
      {
        address: "[강원도_춘천시]",
        gender: "여성",
        age: "70대",
        careLevel: "5급",
      },
    ];

    setData(dummyData);
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Typo>어르신 찾기</Typo>
        <Banner />
        <LocationSelectet />
        <GridContainer>
          {data.map((item, index) => (
            <CardContainer key={index} isOddIndex={index % 2 !== 0}>
              <h1>{item.address}</h1>
              <br></br>
              <div>{"[어르신 정보]"}</div>
              <h3>성별: {item.gender}</h3>
              <h3>연령: {item.age}</h3>
              <h3>요양 등급: {item.careLevel}</h3>
            </CardContainer>
          ))}
        </GridContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FindOldMan;

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
  gap: 50px;
`;
const Typo = styled.span`
  font-size: 50px;
  font-weight: 600;
`;
const Banner = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${findOldMan});
  width: 100%;
  height: 300px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1280px;
  justify-content: center;
  overflow-y: auto;
  max-height: 60vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 23.3px 7px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.isOddIndex ? "#004512" : "#fff")};
  border: 2px solid #004512;

  &:nth-child(odd) {
    border-color: #c7c7c7;
  }
  border-radius: 30px;
  padding: 20px;
  margin: 10px;
  width: 80%;

  &:hover {
    cursor: pointer;
  }
`;
