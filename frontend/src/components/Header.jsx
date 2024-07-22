import React from "react";
import styled from "styled-components";
import icon from "../public/images/icon.png";
import typo from "../public/images/typo.png";

const Header = () => {
  const menuOption = ["요양사 구직", "요양 구직", "공지사항"];
  return (
    <Wrapper>
      <LogoBox>
        <img src={icon} alt="" width={90} height={90} />
        <img src={typo} alt="" width={119} height={36} />
      </LogoBox>
      <HeaderMenu>
        {menuOption.map((option, index) => (
          <MenuBox key={index}>{option}</MenuBox>
        ))}
      </HeaderMenu>
      <ServiceBox>고객센터</ServiceBox>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-left: 130px;
`;
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
const ServiceBox = styled.div`
  width: 200px;
  height: 70px;
  background-color: #1da133;
  border-radius: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;
