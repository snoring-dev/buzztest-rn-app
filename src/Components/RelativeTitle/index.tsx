import React from "react";
import {
  RelativeTitleContainer,
  TitleContainer,
  TitleShape,
  TitleText,
} from "./styles";
import RoundedShape from "../../Svg/title_after_shape.svg";

interface Props {
  text: string;
  width?: number;
}

const RelativeTitle = ({ text, width = 120 }: Props) => {
  return (
    <RelativeTitleContainer>
      <TitleContainer>
        <TitleText width={width}>{text}</TitleText>
        <TitleShape>
          <RoundedShape />
        </TitleShape>
      </TitleContainer>
    </RelativeTitleContainer>
  );
};

export default RelativeTitle;
