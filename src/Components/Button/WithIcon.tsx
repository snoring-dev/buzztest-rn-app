
import React, { ReactElement } from "react";
import { BackLayer, ButtonText, Container, FrontLayer, Icon } from "./styles";

interface Props {
  backgroundColor?: string;
  foregroundColor?: string;
  text: string;
  textColor?: string;
  onClick?: () => void;
  icon: () => any;
}

const ButtonWithIcon = ({ text, icon, onClick }: Props) => {
  return (
    <Container onPress={onClick}>
      <BackLayer>
        <Icon>{icon()}</Icon>
      </BackLayer>
      <FrontLayer>
        <ButtonText textColor="white">{text}</ButtonText>
      </FrontLayer>
    </Container>
  );
};

export default ButtonWithIcon;
