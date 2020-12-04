import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
`;

const Message = ({ text = "" }) => (
  <MessageContainer>
    <div>{text}</div>
  </MessageContainer>
);

export default Message;
