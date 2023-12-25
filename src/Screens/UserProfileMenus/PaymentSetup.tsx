import { Center, Heading, Text, VStack } from "../../../ui";
import React from "react";
import { razzleDazzleRose, silver } from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

const PaymentSetup = () => {
  return (
    <Center w="100%" h="100%">
      <VStack justifyContent="center" alignItems="center">
        <FontAwesome
          name="credit-card"
          size={40}
          color={razzleDazzleRose}
        />
        <Heading pt="20px" textTransform="uppercase" color="black">
          Payment Setup
        </Heading>
        <Text pt="10px" pb="10px" fontSize={14} color={silver} textAlign="center">
          {`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis commodo commodo ante, non porta ligula consectetur vel.`}
        </Text>
      </VStack>
    </Center>
  );
};

export default PaymentSetup;
