import styled, { css } from "styled-components/native";
import { cyan, razzleDazzleRose, white } from "../../Utils/Colors";

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

export const WhiteBoard = styled.View`
  background-color: ${white};
  height: 35%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

export const SubmitButtonWrapper = styled.View`
  color: white;
  height: auto;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SMEntry = styled.TouchableOpacity`
  margin-right: 10px;
`;
