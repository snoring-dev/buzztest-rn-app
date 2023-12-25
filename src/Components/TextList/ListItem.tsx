import React, { Fragment } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Content, Decorator, Entry, LeftSide, RightSide } from "./styles";
import { razzleDazzleRose, springGreen } from "../../Utils/Colors";
import { equals } from "ramda";
import { ListStyles } from ".";

interface Props {
  type: ListStyles;
  text: string;
}

const ListItem = ({ type, text }: Props) => {
  const empty = equals(type, "Empty");
  return (
    <Entry>
      <LeftSide isEmpty={empty}>
        {!empty && (
          <Decorator>
            {equals(type, "Does") && (
              <Entypo name="check" size={15} color={springGreen} />
            )}
            {equals(type, "Dont") && (
              <Ionicons name="close" size={15} color={razzleDazzleRose} />
            )}
          </Decorator>
        )}
      </LeftSide>
      <RightSide>
        <Content>{text}</Content>
      </RightSide>
    </Entry>
  );
};

export default ListItem;
