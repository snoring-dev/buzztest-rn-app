import React from "react";
import { Overlay, SubmitButtonWrapper, WhiteBoard } from "./styles";
import { Portal } from "@gorhom/portal";
import { dispatchEvent } from "../../Utils";
import { Stack, Text } from "../../../ui";
import { cyan, silver } from "../../Utils/Colors";

interface Props {
  visible?: boolean;
  onComplete?: () => void;
}

const ValidationModal = ({
  visible = false,
  onComplete = () => {},
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
              color={cyan}
            >
              validation
            </Text>
            <Text fontWeight="light" color={silver} fontSize={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eveniet id quos distinctio vel magni iusto itaque atque.
            </Text>
          </Stack>
        </WhiteBoard>
        <SubmitButtonWrapper onPress={onComplete}>
          <Text
            fontSize={18}
            color="white"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Validation en cours
          </Text>
        </SubmitButtonWrapper>
      </Overlay>
    </Portal>
  );
};

export default ValidationModal;
