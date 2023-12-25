import { View, Text } from "react-native";
import React from "react";
import { LinkValue, LinkWrapper } from "./styles";

interface Props {
  onClick: () => void;
  value: string;
}

const Link = ({ onClick = () => {}, value = "" }: Props) => {
  return (
    <LinkWrapper onPress={onClick}>
      <LinkValue>{value}</LinkValue>
    </LinkWrapper>
  );
};

export default Link;
