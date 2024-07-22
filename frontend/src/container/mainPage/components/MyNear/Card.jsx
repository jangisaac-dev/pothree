import React from "react";
import styled from "styled-components";

const Card = ({ address, hourMoney, gender, age, workHours }) => {
  return (
    <CardContainer>
      <Content>
        <h1>{address}</h1>
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0;
  flex-direction: column;
  width: 400px;
  height: 550px;
  border: 1px solid #ccc;
  border-radius: 45px;
  padding: 16px;
  margin-right: 16px;
  background-color: #fff;
  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 60px;
  }
  div {
    margin-bottom: 4px;
    font-size: 30px;
  }
`;

const GoBtn = styled.button`
  background-color: #a2abff;
  width: 274px;
  height: 93px;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 69px;
  cursor: pointer;
  margin-top: 8px;
  font-size: 30px;
`;

export default Card;
