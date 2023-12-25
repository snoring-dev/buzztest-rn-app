import React from "react";
import { HStack, Pressable, Text } from "../../../ui";
import { Entypo } from "@expo/vector-icons";
import { mineShaft, silver } from "../../Utils/Colors";
import { darken, lighten } from "polished";

interface Props {
    label: string;
    icon: () => React.ReactElement;
    onClick?: () => void;
}

const MenuEntry = ({ label, icon, onClick = () => {}}: Props) => {
  return (
    <Pressable w="100%" mt="15px" mb="15px" onPress={onClick}>
      <HStack
        justifyContent={"space-between"}
        w="100%"
        borderBottomWidth={1}
        borderBottomColor={lighten(0.2, silver)}
        pb="6px"
      >
        <HStack>
          {icon()}
          <Text
            pl="20px"
            color={darken(0.1, silver)}
            fontSize={18}
            fontWeight="light"
          >
            {label}
          </Text>
        </HStack>
        <HStack>
          <Entypo
            name="chevron-thin-right"
            size={24}
            color={lighten(0.4, mineShaft)}
          />
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default MenuEntry;
