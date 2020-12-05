import React from "react";

import { MessageContainer, Text } from "./styled";

const Message = ({ text = "", color }) => (
  <MessageContainer>
    <Text color={color}>{text}</Text>
  </MessageContainer>
);

export default Message;
