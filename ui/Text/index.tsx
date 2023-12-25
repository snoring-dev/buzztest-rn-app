import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
  ViewStyle,
} from "react-native";

type FontWeightArg =
  | "bold"
  | "medium"
  | "hairline"
  | "thin"
  | "light"
  | "normal"
  | "semibold"
  | "extrabold"
  | "black"
  | "extraBlack";

type FontWeightValue =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;

const mapFontWeightArgToValue = (
  fontWeightArg: FontWeightArg
): FontWeightValue => {
  const fontWeightMap: Record<FontWeightArg, FontWeightValue> = {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
    extraBlack: "900",
  };

  return fontWeightMap[fontWeightArg] ?? "normal";
};

type FontSizeValue =
  | number
  | "sm"
  | "2xs"
  | "xs"
  | "md"
  | "xl"
  | "3xl"
  | "5xl"
  | "lg"
  | "6xl"
  | "7xl"
  | "4xl"
  | "2xl"
  | "8xl"
  | "9xl";

const fontSizeMap: Record<FontSizeValue, number> = {
  "2xs": 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32,
  "5xl": 36,
  "6xl": 40,
  "7xl": 44,
  "8xl": 48,
  "9xl": 52,
};

type StylePropValue = string | number;

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  fontSize?: FontSizeValue;
  fontWeight?: FontWeightArg;
  color?: string;
  textTransform?: TextStyle['textTransform'];
  textAlign?: TextStyle['textAlign'];
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

const CustomText: React.FC<TextProps> = ({
  children,
  fontSize = "md",
  fontWeight = "normal",
  color,
  textTransform,
  style,
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
  textAlign,
  ...props
}) => {
  const customStyle: ViewStyle = {
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

  const resolvedFontSize =
    typeof fontSize === "string" ? fontSizeMap[fontSize] : fontSize;

  return (
    <RNText
      style={[
        {
          fontSize: resolvedFontSize,
          fontWeight: mapFontWeightArgToValue(fontWeight),
          textAlign: textAlign ?? 'auto',
          color,
          textTransform,
          ...customStyle,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default CustomText;
