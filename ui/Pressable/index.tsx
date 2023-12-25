import React, { useState } from "react";
import {
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";

const spacing = {
  px: "1px",
  "0": 0,
  "0.5": 2,
  "1": 4,
  "1.5": 6,
  "2": 8,
  "2.5": 10,
  "3": 12,
  "3.5": 14,
  "4": 16,
  "5": 20,
  "6": 24,
  "7": 28,
  "8": 32,
  "9": 36,
  "10": 40,
  "12": 48,
  "16": 64,
  "20": 80,
  "24": 96,
  "32": 128,
  "40": 160,
  "48": 192,
  "56": 224,
  "64": 256,
  "72": 288,
  "80": 320,
  "96": 384,
  "1/2": "50%",
  "1/3": "33.333%",
  "2/3": "66.666%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666%",
  "2/6": "33.333%",
  "3/6": "50%",
  "4/6": "66.666%",
  "5/6": "83.333%",
  full: "100%",
};

type SpacingKey = keyof typeof spacing;

type StylePropValue = string | number;


interface CustomPressableProps extends PressableProps {
  children: React.ReactNode;
  alignItems?: ViewStyle["alignItems"];
  justifyContent?: ViewStyle["justifyContent"];
  w?: SpacingKey | number | string;
  h?: SpacingKey | number | string;
  bgColor?: string;
  p?: StylePropValue;
  pr?: StylePropValue;
  pl?: StylePropValue;
  pt?: StylePropValue;
  pb?: StylePropValue;
  m?: StylePropValue;
  mr?: StylePropValue;
  ml?: StylePropValue;
  mt?: StylePropValue;
  mb?: StylePropValue;
}

const CustomPressable: React.FC<CustomPressableProps> = ({
  onPress,
  children,
  alignItems,
  justifyContent,
  w = 'full',
  h = 'full',
  bgColor,
  p,
  pr,
  pl,
  pt,
  pb,
  m,
  mr,
  ml,
  mt,
  mb,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  const resolveDimension = (value: SpacingKey | number) =>
    typeof value === "number" ? value : spacing[value];

  const customStyle: ViewStyle = {
    backgroundColor: bgColor ?? "white",
    padding: p,
    paddingRight: pr,
    paddingLeft: pl,
    paddingTop: pt,
    paddingBottom: pb,
    margin: m,
    marginRight: mr,
    marginLeft: ml,
    marginTop: mt,
    marginBottom: mb,
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        {
          width: w?.toString().endsWith('%') ? w : resolveDimension(w as SpacingKey | number),
          height: h?.toString().endsWith('%') ? h : resolveDimension(h as SpacingKey | number),
          backgroundColor: pressed ? "gray" : "white",
          opacity: isPressed ? 0.5 : 1,
          alignItems,
          justifyContent,
        },
        { ...styles.pressable, ...customStyle  },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});

export default CustomPressable;
