import React from "react";
import styled from "styled-components";
import icon from "../images/icon.png";

const Header = () => {
  return (
    <Wrapper>
      <LogoBox>
        <img src={icon} alt="" width={100} height={100} />
      </LogoBox>
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
const LogoBox = styled.div``;
const HeaderMenu = styled.div``;
const ServieBox = styled.div``;
