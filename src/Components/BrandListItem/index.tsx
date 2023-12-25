import { View } from "react-native";
import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { razzleDazzleRose, white, springGreen } from "../../Utils/Colors";
import {
  Brand,
  BrandButton,
  BrandDescription,
  BrandName,
  BrandPicture,
  LikeIcon,
} from "./styles";

import Button from "../Button";
import { formatDescription } from "../../Utils";

interface Props {
  name: string;
  description: string;
  pictureUrl: string;
  onClick?: () => void;
}

const BrandListItem = ({ name, description, pictureUrl, onClick = () => {} }: Props) => {
  const image = { uri: pictureUrl };

  return (
    <Brand>
      <Fragment>
        <BrandPicture source={image} resizeMode="cover" />
        <BrandName>{name}</BrandName>
        <BrandDescription numberOfLines={4} ellipsizeMode="tail">
          {/* {formatDescription(description)} */}
          {description}
        </BrandDescription>
        <BrandButton>
          <Button
            backgroundColor={springGreen}
            textColor={white}
            text="je teste"
            onClick={onClick}
          />
        </BrandButton>
      </Fragment>
    </Brand>
  );
};

export default BrandListItem;
