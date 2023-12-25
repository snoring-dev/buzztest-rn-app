import React from "react";
import { nanoId } from "../../Utils";
import ListItem from "./ListItem";
import { Dot, LeftSide, ListTitle, ListWrapper, RightSide } from "./styles";

export enum ListStyles {
  Does = "Does",
  Dont = "Dont",
  Empty = "Empty",
}

interface Item {
  listStyle?: string | boolean;
  text: string;
}

interface Props {
  bgColor?: string;
  title: string;
  items?: Item[];
}

const TextList = ({ bgColor = "transparent", title, items = [] }: Props) => {
  const listItems = items.map((it) => {
    let type = ListStyles.Empty;
    if (it.listStyle === true) {
      type = ListStyles.Does;
    }

    if (it.listStyle === false) {
      type = ListStyles.Dont;
    }

    return <ListItem key={nanoId()} type={type} text={it.text} />;
  });

  return (
    <ListWrapper bgColor={bgColor}>
      <LeftSide>
        <Dot />
      </LeftSide>
      <RightSide>
        <ListTitle>{title}</ListTitle>
        {listItems}
      </RightSide>
    </ListWrapper>
  );
};

export default TextList;
