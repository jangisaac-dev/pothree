import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardList = ({ cards }) => {
  return (
    <Container>
      <ScrollContainer>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

const ScrollContainer = styled.div`
  display: flex;
  overscroll-behavior-x: auto;
  background-color: #8497d9;
`;

export default CardList;
