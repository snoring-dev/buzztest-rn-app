import styled, { css } from "styled-components/native";
import * as Colors from "../../Utils/Colors";

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
  background-color: ${Colors.white};
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

export const Title = styled.Text`
  color: ${Colors.mineShaft};
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
`;

export const TitleArea = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
`;
export const OptionsArea = styled.View`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<{ selected?: boolean }>`
  color: ${Colors.razzleDazzleRose};
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  ${({ selected = false }) =>
    selected &&
    css`
      color: ${Colors.white};
    `}
`;

export const SelectItem = styled.Pressable<{ selected?: boolean }>`
  width: 100%;
  padding: 16px;
  border: 1px solid ${Colors.razzleDazzleRose};
  border-radius: 5px;
  margin: 10px auto;
  ${({ selected = false }) =>
    selected &&
    css`
      background-color: ${Colors.razzleDazzleRose};
    `}
`;
