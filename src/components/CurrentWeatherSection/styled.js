import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  min-height: 200px;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ParametresBox = styled(Box)`
  justify-content: center;
  align-items: flex-start;
  font-size: 1em;
  @media (max-width: 767px) {
    align-items: center;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1em;
`;

export const Temperature = styled(Title)`
  font-size: 1.5em;
`;

export const UppercaseText = styled.span`
  text-transform: uppercase;
`;
