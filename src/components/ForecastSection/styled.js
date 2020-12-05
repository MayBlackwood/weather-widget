import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  min-height: 200px;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const DayCard = styled(Box)`
  @media (max-width: 767px) {
    border-top: 4px solid rgb(121,138,151);
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
`;

export const UppercaseText = styled.p`
  text-transform: uppercase;
`;