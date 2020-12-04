import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/images/logo.png";

const HeaderImage = styled.div`
  background-image: url(${LogoImage});
  outline: none;
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  background: pink;
  align-items: center;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderImage />
  </HeaderContainer>
);

export default Header;
