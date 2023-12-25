import styled, { css } from "styled-components/native";
import * as Colors from "../../Utils/Colors";

export const RelativeTitleContainer = styled.View`
  position: absolute;
  top: 100px;
  left: 50px;
`;

export const TitleContainer = styled.View`
  position: relative;
  background-color: red;
  z-index: 500;
`;

export const TitleText = styled.Text<{ width?: number }>`
  color: ${Colors.mineShaft};
  font-size: 28px;
  font-weight: 300;
  position: absolute;
  z-index: 10;
  width: 120px;
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
`;

export const TitleShape = styled.View`
  position: absolute;
  bottom: -90px;
  left: 25px;
`;
