import React from "react";
import { Overlay, SMEntry, SubmitButtonWrapper, WhiteBoard } from "./styles";
import { Portal } from "@gorhom/portal";
import { dispatchEvent } from "../../Utils";
import { HStack, Stack, Text, View } from "../../../ui";
import { razzleDazzleRose, silver } from "../../Utils/Colors";
import { TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

interface Props {
  visible?: boolean;
  onFBClicked?: () => void;
  onTiktiokClicked?: () => void;
  onYoutubeClicked?: () => void;
  onInstagramClicked?: () => void;
  onSubmit?: () => void;
}

const ConnectSocialAppsModal = ({
  visible = false,
  onFBClicked = () => {},
  onTiktiokClicked = () => {},
  onYoutubeClicked = () => {},
  onInstagramClicked = () => {},
  onSubmit = () => {},
}: Props) => {
  return (
    <Portal>
      <Overlay
        onPress={(e) => {
          e.stopPropagation();
          const { target, currentTarget } = e;
          if (target === currentTarget) {
            dispatchEvent("page.overlay.clicked", { visible });
          }
        }}
        visible={visible}
      >
        <WhiteBoard>
          <Stack py="25px" px="40px">
            <Text
              fontWeight="semibold"
              fontSize={20}
              textTransform="uppercase"
              color="black"
            >
              <Text color={razzleDazzleRose}>Connect your</Text> social media
              accounts
            </Text>
            <Text fontWeight="light" color={silver} fontSize={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet id quos distinctio vel magni iusto itaque atque.
            </Text>
            <HStack pt="20px" pb="20px">
              {/* social links */}
              <SMEntry onPress={onFBClicked}>
                <View
                  backgroundColor={razzleDazzleRose}
                  w="60px"
                  h="60px"
                  borderRadius={100}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FontAwesome name="facebook" size={28} color="white" />
                </View>
              </SMEntry>
              <SMEntry onPress={onTiktiokClicked}>
                <View
                  backgroundColor={razzleDazzleRose}
                  w="60px"
                  h="60px"
                  borderRadius={100}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FontAwesome5 name="tiktok" size={28} color="white" />
                </View>
              </SMEntry>
              <SMEntry onPress={onYoutubeClicked}>
                <View
                  backgroundColor={razzleDazzleRose}
                  w="60px"
                  h="60px"
                  borderRadius={100}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FontAwesome name="youtube-play" size={28} color="white" />
                </View>
              </SMEntry>
              <SMEntry onPress={onInstagramClicked}>
                <View
                  backgroundColor={razzleDazzleRose}
                  w="60px"
                  h="60px"
                  borderRadius={100}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FontAwesome name="instagram" size={28} color="white" />
                </View>
              </SMEntry>
            </HStack>
          </Stack>
        </WhiteBoard>
        <SubmitButtonWrapper onPress={onSubmit}>
          <Text
            fontSize={18}
            color="white"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Envoyer
          </Text>
        </SubmitButtonWrapper>
      </Overlay>
    </Portal>
  );
};

export default ConnectSocialAppsModal;
