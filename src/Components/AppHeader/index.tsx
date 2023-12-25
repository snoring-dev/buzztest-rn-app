import { Center } from "../../../ui";
import React from "react";
import { Image } from "react-native";

const AppHeader = () => (
  <Center bgColor="white" pt={50} pb={2}>
    <Image source={require("../../Svg/buzztest_img.png")} />
  </Center>
);

export default AppHeader;
