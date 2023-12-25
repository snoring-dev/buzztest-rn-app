import styled, { css } from "styled-components/native";
import * as Colors from "../../Utils/Colors";

export const ListWrapper = styled.View<{ bgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

export const ListTitle = styled.Text`
  font-size: 12px;
  color: ${Colors.mineShaft};
  text-transform: uppercase;
  padding-bottom: 5px;
`;

export const Dot = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${Colors.razzleDazzleRose};
  border-radius: 20px;
`;

export const LeftSide = styled.View<{ isEmpty: boolean }>`
  width: 5%;
  padding-top: 3px;
  background-color: transparent;
  ${({ isEmpty = false }) =>
    isEmpty &&
    css`
      width: 0%;
    `}
`;

export const RightSide = styled.View`
  width: 95%;
  display: flex;
`;

export const Entry = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
`;

export const Decorator = styled.View``;

export const Content = styled.Text`
  font-size: 11px;
  font-weight: 300;
  color: ${Colors.gray};
  padding-top: 4px;
  padding-left: 5px;
`;
