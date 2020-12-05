import styled from "styled-components";

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 760px;
  align-items: center;
  min-height: 160px;
  padding: 20px;
  margin: 20px 0;
  border: 4px solid rgb(121, 138, 151);
  border-radius: 10px;
  @media (max-width: 1279px) {
    width: 450px;
  }
  @media (max-width: 767px) {
    width: 250px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
`;
