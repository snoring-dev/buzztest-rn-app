import styled, { css } from "styled-components/native";
import { razzleDazzleRose, tutu } from "../../Utils/Colors";

export const BrandContainer = styled.ScrollView<{ height: number }>`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: 35px;
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;

export const Heading = styled.Text`
  margin: auto;
  font-size: 18px;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MultiList = styled.View<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  padding: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const GalleryContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
`;

export const GalleryList = styled.View`
  display: flex;
  flex-direction: row;
`;

export const GalleryEntry = styled.View`
  display: flex;
  flex-grow: 1;
  width: 100px;
  height: 150px;
  margin: 3px;
`;

export const GalleryImg = styled.Image`
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
`;

export const BudgetContainer = styled.View`
  width: 100%;
  min-height: 50px;
  background-color: ${tutu};
  box-shadow: 5px 5px 0px ${razzleDazzleRose};
`;
