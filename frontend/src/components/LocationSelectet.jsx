import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../URL";

const LocationSelectet = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [subdistricts, setSubdistricts] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubdistrict, setSelectedSubdistrict] = useState("");

  useEffect(() => {
    axios
      .get(`${URL}/sido`)
      .then((response) => {
        const cityData = response.data.map((city) => ({
          code: city.code,
          name: city.name,
        }));
        setCities(cityData);
      })
      .catch((error) => {
        console.error("There was an error fetching the cities!", error);
      });
  }, []);

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    setSelectedCity(cityCode);
    setSelectedDistrict("");
    setSelectedSubdistrict("");
    setDistricts([]);
    setSubdistricts([]);

    axios
      .get(`${URL}/sigungu?upperCode=${cityCode}`)
      .then((response) => {
        const districtData = response.data.map((district) => ({
          code: district.code,
          name: district.name,
        }));
        setDistricts(districtData);
      })
      .catch((error) => {
        console.error("There was an error fetching the districts!", error);
      });
  };

  const handleDistrictChange = (e) => {
    const districtCode = e.target.value;
    setSelectedDistrict(districtCode);
    setSelectedSubdistrict("");
    setSubdistricts([]);

    axios
      .get(`${URL}/dongubmeon?upperCode=${districtCode}`)
      .then((response) => {
        const subdistrictData = response.data.map((subdistrict) => ({
          code: subdistrict.code,
          name: subdistrict.name,
        }));
        setSubdistricts(subdistrictData);
      })
      .catch((error) => {
        console.error("There was an error fetching the subdistricts!", error);
      });
  };

  const handleSubdistrictChange = (e) => {
    const subdistrictCode = e.target.value;
    setSelectedSubdistrict(subdistrictCode);
  };

  return (
    <Wrapper>
      <TypoWrapper>
        <Typo>지역 선택</Typo>
      </TypoWrapper>
      <SelectBox>
        <Selecter value={selectedCity} onChange={handleCityChange}>
          <option value="">시/도</option>
          {cities.map((city, index) => (
            <option key={index} value={city.code}>
              {city.name}
            </option>
          ))}
        </Selecter>
        <Selecter value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">구/군</option>
          {districts.map((district, index) => (
            <option key={index} value={district.code}>
              {district.name}
            </option>
          ))}
        </Selecter>
        <Selecter
          value={selectedSubdistrict}
          onChange={handleSubdistrictChange}
        >
          <option value="">읍/면</option>
          {subdistricts.map((subdistrict, index) => (
            <option key={index} value={subdistrict.code}>
              {subdistrict.name}
            </option>
          ))}
        </Selecter>
      </SelectBox>
      <SubmitButton onClick={() => alert("내 지역 어르신 검색")}>
        내 지역 어르신 검색
      </SubmitButton>
    </Wrapper>
  );
};

export default LocationSelectet;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const TypoWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
`;
const Typo = styled.div`
  font-size: 50px;
  font-weight: 600;
  justify-self: flex-start;
`;
const SelectBox = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Selecter = styled.select`
  width: 200px;
  height: 50px;
  border: 2px solid #1da133;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%231da133' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' class='feather feather-chevron-down' viewBox='0 0 24 24'><path d='M6 9l6 6 6-6'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #1da133;
    box-shadow: 0 0 0 3px rgba(29, 161, 51, 0.2);
  }
`;
const SubmitButton = styled.div`
  width: 30%;
  height: 70px;
  background-color: #1da133;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #148c26;
  }
`;
