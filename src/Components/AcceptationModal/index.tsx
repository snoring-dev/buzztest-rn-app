import React from "react";
import { Overlay, SubmitButtonWrapper, WhiteBoard } from "./styles";
import { Portal } from "@gorhom/portal";
import { dispatchEvent } from "../../Utils";
import { HStack, Pressable, Stack, Text } from "../../../ui";
import {
  cyan,
  razzleDazzleRose,
  silver,
  springGreen,
} from "../../Utils/Colors";

interface Props {
  visible?: boolean;
  onAccept?: () => void;
  onDeny?: () => void;
}

const AcceptationModal = ({
  visible = false,
  onAccept = () => {},
  onDeny = () => {},
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
              fontSize={18}
              textTransform="uppercase"
              color="black"
            >
              accepter / refuser
            </Text>
            <Text
              pt="8px"
              textAlign="justify"
              fontWeight="light"
              color={silver}
              fontSize={13}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet id quos distinctio vel magni iusto itaque atque.
            </Text>
          </Stack>
        </WhiteBoard>
        <SubmitButtonWrapper>
          <HStack>
            <Pressable
              alignItems="center"
              justifyContent="center"
              w="1/2"
              h={80}
              bgColor={springGreen}
              onPress={onAccept}
            >
              <Text
                fontSize={16}
                fontWeight="semibold"
                color="white"
                textTransform="uppercase"
              >
                Accepter
              </Text>
            </Pressable>
            <Pressable
              alignItems="center"
              justifyContent="center"
              w="1/2"
              h={80}
              bgColor={razzleDazzleRose}
              onPress={onDeny}
            >
              <Text
                fontSize={16}
                fontWeight="semibold"
                color="white"
                textTransform="uppercase"
              >
                Refuser
              </Text>
            </Pressable>
          </HStack>
        </SubmitButtonWrapper>
      </Overlay>
    </Portal>
  );
};

export default AcceptationModal;
