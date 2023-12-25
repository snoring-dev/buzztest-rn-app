import { Center, Text, VStack } from "../../../ui";
import React from "react";
import LottieView from "lottie-react-native";
import { razzleDazzleRose } from "../../Utils/Colors";

const LoadingView = () => {
  return (
    <Center w="100%" h="100%">
      <VStack>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            backgroundColor: "transparent",
          }}
          source={require("./loading_data.json")}
        />
        <Text
          textTransform="uppercase"
          textAlign="center"
          color={razzleDazzleRose}
          fontSize={12}
        >
          Wait a moment...
        </Text>
      </VStack>
    </Center>
  );
};

export default LoadingView;