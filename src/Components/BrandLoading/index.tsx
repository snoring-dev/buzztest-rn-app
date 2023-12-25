import { Center, Skeleton, VStack } from "../../../ui";
import React from "react";
import { Dimensions } from "react-native";

const BrandLoading = (): React.ReactElement => {
  return (
    <Center w={`${Dimensions.get('window').width - 30}px`} mb="15px">
      <VStack
        w="90%"
        space={8}
      >
        <Skeleton h="40" />
        <Skeleton px="4" />
        <Skeleton px="4" my="4" rounded={10} />
      </VStack>
    </Center>
  );
};

export default BrandLoading;
