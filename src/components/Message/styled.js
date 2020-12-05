import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
`;

export const Text = styled.p`
  color: ${(props) => {
    return props.color || "#000000";
  }};
  :first-letter: uppercase;
`;
