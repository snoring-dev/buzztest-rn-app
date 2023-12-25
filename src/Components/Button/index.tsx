import React from "react";
import { ActivityIndicator } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface Props {
  backgroundColor: string;
  text: string;
  textColor: string;
  onClick?: () => void;
  isLoading?: boolean;
  loadingText?: string | null;
}

const Button = ({
  backgroundColor,
  text,
  textColor,
  onClick = () => {},
  isLoading = false,
  loadingText = null,
}: Props) => {
  return (
    <ButtonContainer
      onPress={() => onClick()}
      backgroundColor={backgroundColor}
    >
      {isLoading && (
        <>
          <ActivityIndicator size="small" color="#ffffff" />
          <ButtonText paddingLeft={5} textColor={textColor}>{loadingText}</ButtonText>
        </>
      )}
      {!isLoading && <ButtonText textColor={textColor}>{text}</ButtonText>}
    </ButtonContainer>
  );
};

export default Button;
