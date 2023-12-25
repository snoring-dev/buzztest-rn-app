import styled, { css } from "styled-components/native";
import { white } from "../../Utils/Colors";

export const Overlay = styled.Pressable<{ visible?: boolean }>`
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5000;
  display: none;
  ${({ visible }) =>
    visible &&
    css`
      display: flex;
    `}
`;

export const Selection = styled.View`
  background-color: ${white};
  height: 35%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 25px 25px 0px 0px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
`;
