import React from "react";
import { Overlay, Selection } from "./styles";
import { Portal } from "@gorhom/portal";
import { dispatchEvent } from "../../Utils";

interface Props {
  children: React.ReactElement;
  visible?: boolean;
}

const Overlayed = ({ children, visible = false }: Props) => {
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
        <Selection>{children}</Selection>
      </Overlay>
    </Portal>
  );
};

export default Overlayed;
