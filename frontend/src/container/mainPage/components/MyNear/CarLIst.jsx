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
  overflow-x: auto;
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 50px;
  overscroll-behavior-x: auto;
  background-color: #8497d9;
  padding: 0 50px;
`;

export default CardList;
