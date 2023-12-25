import { Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContentView } from "./styles";

interface Props {
  children: JSX.Element[] | JSX.Element;
  hasBottomMenu?: boolean;
}

const MainLayout = ({ children, hasBottomMenu = true }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <MainContentView hasBottomMenu={hasBottomMenu}>
        {children}
      </MainContentView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "relative",
    height: "100%",
  },
});

export default MainLayout;
