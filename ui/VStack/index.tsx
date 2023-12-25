import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";

const spacingMap = {
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

type SpacingKey = keyof typeof spacingMap;

type StylePropValue = string | number;

// Define the types for the component's props
type VStackProps = {
  children: React.ReactNode;
  space?: number;
  style?: ViewStyle;
  justifyContent?: ViewStyle['justifyContent'];
  borderRadius?: ViewStyle['borderRadius'];
  bgColor?: ViewStyle['backgroundColor'];
  display?: ViewStyle['display'];
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  w?: SpacingKey | number | string;
  h?: SpacingKey | number | string;
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
};

// VStack component
const VStack: React.FC<VStackProps> = ({
  children,
  space = 0,
  borderRadius,
  style,
  display = 'flex',
  alignItems = "stretch",
  justifyContent,
  bgColor,
  w,
  h,
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
}) => {
  const resolveDimension = (value: SpacingKey | number) =>
    typeof value === "number" ? value : spacingMap[value];

  // Custom style based on props
  const customStyle: ViewStyle = {
    display,
    flexDirection: "column",
    borderRadius,
    backgroundColor: bgColor,
    justifyContent,
    alignItems,
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
    width: w?.toString().endsWith("%")
      ? w
      : resolveDimension(w as SpacingKey | number),
    height: h?.toString().endsWith("%")
      ? h
      : resolveDimension(h as SpacingKey | number),
  };

  // Generate styles for children with spacing
  const childrenWithSpacing = React.Children.map(children, (child, index) => (
    <View
      style={{
        marginBottom: index < React.Children.count(children) - 1 ? space : 0,
      }}
    >
      {child}
    </View>
  ));

  return <View style={[customStyle, style]}>{childrenWithSpacing}</View>;
};

export default VStack;
