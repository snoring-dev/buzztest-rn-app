import React from "react";
import { FieldContainer, Input, Label } from "./styles";

interface Props {
  label?: string | null;
  hint?: string;
  defaultValue?: string;
  onTextChange?: (text: string) => void;
  onClick?: () => void;
  disabled?: boolean;
  isPassword?: boolean;
}

const Field = ({
  label = null,
  hint,
  defaultValue,
  onTextChange = () => {},
  onClick = () => {},
  disabled = false,
  isPassword = false,
}: Props) => {
  return (
    <FieldContainer>
      {label && <Label>{label}</Label>}
      <Input
        onChangeText={(t) => onTextChange(t)}
        placeholder={hint}
        value={String(defaultValue)}
        onPressIn={() => onClick()}
        editable={!disabled}
        secureTextEntry={isPassword}
      />
    </FieldContainer>
  );
};

export default Field;
