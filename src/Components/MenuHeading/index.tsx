import React from "react";
import { Text, View, VStack } from "../../../ui";
import { razzleDazzleRose } from "../../Utils/Colors";

interface Props {
    label: string;
    width?: number | string;
}

const MenuHeading = ({ label, width = '70%' }: Props) => {
  return (
    <VStack
      display={"flex"}
      alignItems="flex-start"
      justifyContent={"center"}
      w="100%"
      mt="20px"
      mb="20px"
    >
      <Text
        color={razzleDazzleRose}
        fontWeight="semibold"
        fontSize={17}
        textTransform="uppercase"
        textAlign="left"
      >
        {label}
      </Text>
      <View h="1px" w={width} backgroundColor={razzleDazzleRose} mt="7px" />
    </VStack>
  );
};

export default MenuHeading;
