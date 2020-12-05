import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
`;

const Text = styled.p`
  color: ${(props) => {
    return props.color || "#000000";
  }};
`;

const Message = ({ text = "", color }) => (
  <MessageContainer>
    <Text color={color}>{text}</Text>
  </MessageContainer>
);

export default Message;
