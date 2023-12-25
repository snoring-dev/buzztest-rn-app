import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Center, Heading, Text, VStack } from "../../../ui";
import React from "react";
import MainLayout from "../../Components/MainLayout";
import SlidingTabs from "../../Components/SlidingTabs";
import { RootStackParamList } from "../../Utils/Pages";
import NotifsIcon from "../../Svg/notifs_vector.svg";
import MsgIcon from "../../Svg/messages_vector.svg";
import { silver } from "../../Utils/Colors";

interface OwnProps {}

type Props = OwnProps & NativeStackScreenProps<RootStackParamList>;

const Inbox = ({ navigation }: Props) => {
  const notifs = (
    <Center w="100%" h="100%">
      <VStack justifyContent="center" alignItems="center">
        <NotifsIcon />
        <Heading pt="20px" textTransform="uppercase" color="black">
          Received Notifications
        </Heading>
        <Text pt={10} pb={10} fontSize={14} color={silver} textAlign="center">
          {`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis commodo commodo ante, non porta ligula consectetur vel.`}
        </Text>
      </VStack>
    </Center>
  );
  const msgs = (
    <Center w="100%" h="100%">
      <VStack justifyContent="center" alignItems="center">
        <MsgIcon />
        <Heading pt="20px" textTransform="uppercase" color="black">
          Your Messages
        </Heading>
        <Text pt={10} pb={10} fontSize={14} color={silver} textAlign="center">
          {`Morbi dictum mattis congue. Cras sollicitudin quam in diam ullamcorper, non tempus sapien venenatis. Etiam vel cursus justo.`}
        </Text>
      </VStack>
    </Center>
  );
  return (
    <MainLayout>
      <SlidingTabs
        firstTabTitle="Notifications"
        secondTabTitle="Messages"
        firstTabContent={notifs}
        secondTabContent={msgs}
      />
    </MainLayout>
  );
};

export default Inbox;
