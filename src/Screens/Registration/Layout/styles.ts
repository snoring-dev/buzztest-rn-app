import styled, { css } from "styled-components/native";
import * as Colors from "../../../Utils/Colors";

export const Container = styled.View`
  background-color: ${Colors.alabaster};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  padding-left: 8%;
  padding-right: 8%;
  position: relative;
`;

export const GirlIconContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 0px;
`;

export const ButtonContainer = styled.View<{ slideDown?: boolean }>`
  width: 100%;
  margin-top: 50px;
  position: absolute;
  bottom: 100px;
`;

export const TriangleView = styled.View`
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const RectView = styled.View`
  position: absolute;
  right: -30px;
  top: 300px;
`;
