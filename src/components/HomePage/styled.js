import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: 800px;
  height: auto;
  margin: 100px auto;
  @media (max-width: 1279px) {
    width: 500px;
    margin: 80px auto;
  }
  @media (max-width: 767px) {
    width: 300px;
  }
`;
