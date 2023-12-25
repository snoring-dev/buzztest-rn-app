import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { MessageContainer, MessageContent, MessageTitle, IconContainer } from "./styles";
interface Props {
  message: string;
  title: string;
}
const ErrorMessage = ({ message, title }: Props) => {
  return (
    <MessageContainer>
      <IconContainer>
        <MaterialCommunityIcons name="alert-decagram" size={24} color="black" />
      </IconContainer>
      <MessageTitle>{title}</MessageTitle>
      <MessageContent>{message}</MessageContent>
    </MessageContainer>
  );
};

export default ErrorMessage;
