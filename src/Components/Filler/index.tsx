import React from "react";
import { Center, View } from "../../../ui";

interface Props {
    height?: number;
}

const Filler = ({ height = 200 }: Props) => {
  return (
    <Center>
      <View h={height} backgroundColor="#FFFFFF00" w={1} />
    </Center>
  );
};

export default Filler;
