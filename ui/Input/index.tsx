import React from "react";
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  bgColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  InputRightElement?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  bgColor = "transparent",
  borderWidth = 1,
  borderRadius = 5,
  InputRightElement,
  style,
  ...props
}) => {
  return (
    <View
      style={[
        styles.container,
        { borderWidth, borderRadius, backgroundColor: bgColor },
      ]}
    >
      <TextInput style={[styles.input, style]} {...props} />
      {InputRightElement && (
        <View style={styles.inputRightElement}>{InputRightElement}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  inputRightElement: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Input;
