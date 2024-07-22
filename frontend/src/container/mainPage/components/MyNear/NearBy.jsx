import React from "react";
import styled from "styled-components";
import CardList from "./CarLIst";

export default function NearBy() {
  const cardData = [
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
    {
      address: "[ls로_143]",
      hourMoney: 3000,
      gender: "Gay",
      age: "65세",
      workHours: "9:00-18:00",
    },
  ];
  return (
    <MyNear>
      <CardList cards={cardData} />
    </MyNear>
  );
}

const MyNear = styled.div`
  width: 100%;
  height: 25%;
`;
