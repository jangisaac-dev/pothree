import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../images/icon.png";
import typo from "../images/typo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <FooterContainer>
      <FooterContent>
        <FooterImg>
          <img src={icon} alt="로고" width={100} height={100} />
          <img src={typo} alt="타이포"  width={110} height={35} />
        </FooterImg>

        <FooterLinkContainer>
          <h3>{"Service"}</h3>
          <FooterLink onClick={() => handleNavigate("/find")}>
            요양사 구인
          </FooterLink>
          <FooterLink onClick={() => handleNavigate("/findOldMan")}>
            요양사 구직
          </FooterLink>
        </FooterLinkContainer>
        <SiteInfo>
          <h3>{"Address"}</h3>
          <div>{"한세로 30 , 대한민국"}</div>
          <div>{"+033 4564 465465"}</div>
          <div>{"photaton@gmail.net"}</div>
        </SiteInfo>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #f0f0f5;
  padding: 40px;
  width: 100%;
  bottom: 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
`;

const FooterImg = styled.div`
  width: 226px;
  height: 79px;
  img[alt="icon"] {
    width: 60px;
    height: 68px;
  }
  img [alt="typo"] {
    width: 129px;
    height: 46px;
  }
`;

const FooterLinkContainer = styled.div`
  h3 {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const FooterLink = styled.div`
  color: #333;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SiteInfo = styled.div`
  text-align: right; /* 오른쪽 정렬 */
  h3 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  div {
    margin-bottom: 5px;
    color: #333;
  }
`;

export default Footer;
