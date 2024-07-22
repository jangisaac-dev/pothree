import React from "react";
import styled from "styled-components";

const Card = ({ address, hourMoney, gender, age, workHours }) => {
  return (
    <CardContainer>
      <Adress>{address}</Adress>
      <Content>
        <div>시급: {hourMoney.toLocaleString()}원</div>
        <div>성별: {gender}</div>
        <div>연령: {age}</div>
        <div>근무가능 시간: {workHours}</div>
      </Content>
      <GoBtn>고고링</GoBtn>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  background-color: #f0f0f5;
`;

const Adress = styled.h3`
  margin-bottom: 8px;
`;

const Content = styled.div`
  div {
    margin-bottom: 4px;
  }
`;

const GoBtn = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
`;

export default Card;
