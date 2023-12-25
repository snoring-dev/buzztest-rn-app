import React, { Fragment } from "react";
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Icon,
  Name,
  Requirements,
  RequirementsNumber,
  RequirementsType,
  SocialContainer,
  SocialEntry,
  SocialNetwork,
  TextualContent,
  Title,
} from "./styles";
import { razzleDazzleRose } from "../../Utils/Colors";

interface Requirement {
  name: string;
  number: number;
}

interface Props {
  title: string;
  bgColor?: string;
  name: string;
  requirements: Requirement[];
}

const SocialNeeds = ({
  bgColor = "transparent",
  name,
  requirements,
  title,
}: Props) => {
  return (
    <Fragment>
      <Title>{title}</Title>
      <SocialContainer bgColor={bgColor}>
        <SocialNetwork>
          <Icon>
            <MaterialCommunityIcons
              name="instagram"
              size={25}
              color={razzleDazzleRose}
            />
          </Icon>
          <Name>{name}</Name>
        </SocialNetwork>
        <Requirements>
          <SocialEntry>
            <Icon>
              <Octicons name="diff-added" size={40} color={razzleDazzleRose} />
            </Icon>
            <TextualContent>
              <RequirementsNumber>X2</RequirementsNumber>
              <RequirementsType>post</RequirementsType>
            </TextualContent>
          </SocialEntry>
          <SocialEntry>
            <Icon>
              <MaterialIcons
                name="ondemand-video"
                size={40}
                color={razzleDazzleRose}
              />
            </Icon>
            <TextualContent>
              <RequirementsNumber>X3</RequirementsNumber>
              <RequirementsType>reel</RequirementsType>
            </TextualContent>
          </SocialEntry>
        </Requirements>
      </SocialContainer>
    </Fragment>
  );
};

export default SocialNeeds;
