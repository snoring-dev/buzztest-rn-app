import { EffectCallback, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { off, on } from ".";

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

const useSelectClosing = (stateSetter: () => void) => {
  useEffect(() => {
    const handler = () => {
      stateSetter();
    };
    on("selection.overlay.clicked", handler);
    return () => off("selection.overlay.clicked", handler);
  }, []);
};

const useOverlayedClosing = (stateSetter: () => void) => {
  useEffect(() => {
    const handler = () => {
      stateSetter();
    };
    on("page.overlay.clicked", handler);
    return () => off("page.overlay.clicked", handler);
  }, []);
};

export const useKeyboardListener = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};

export { useEffectOnce, useSelectClosing, useOverlayedClosing };
