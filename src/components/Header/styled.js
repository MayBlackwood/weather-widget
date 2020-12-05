import styled from "styled-components";
import LogoImage from "../../assets/images/OpenWeatherLogo.png";

export const HeaderImage = styled.div`
  background-image: url(${LogoImage});
  outline: none;
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;
