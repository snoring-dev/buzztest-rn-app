import styled from "styled-components/native";
import * as Colors from '../../Utils/Colors';

export const ButtonContainer = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 100px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text<{ textColor: string, paddingLeft?: string }>`
  font-size: 10px;
  color: ${(props) => props.textColor};
  padding-left: ${({ paddingLeft = 0 }) => paddingLeft}px;
  text-align: center;
  text-transform: uppercase;
`;

export const Container = styled.TouchableOpacity`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BackLayer = styled.View`
  position: absolute;
  left: 0px;
  height: 42px;
  background-color: ${Colors.springGreen};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  border-radius: 50px;
  padding-right: 10px;
`;

export const FrontLayer = styled.View`
  position: absolute;
  left: 0px;
  height: 42px;
  background-color: ${Colors.razzleDazzleRose};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88%;
  border-radius: 50px;
`;

export const Icon = styled.View``;