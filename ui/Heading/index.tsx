import React from "react";
import {
  Text,
  TextProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";

type StyleValue = number | string;

interface HeadingProps extends TextProps {
  fontSize?: number | string;
  fontWeight?:
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
    | "900";
  color?: string;
  textAlign?: TextStyle["textAlign"];
  textTransform?: TextStyle["textTransform"];
  p?: StyleValue;
  pt?: StyleValue;
  pr?: StyleValue;
  pb?: StyleValue;
  pl?: StyleValue;
  px?: StyleValue;
  py?: StyleValue;
  m?: StyleValue;
  mt?: StyleValue;
  mr?: StyleValue;
  mb?: StyleValue;
  ml?: StyleValue;
  mx?: StyleValue;
  my?: StyleValue;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  style,
  fontSize = "lg",
  fontWeight = "bold",
  color = "black",
  textAlign,
  textTransform,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  ...props
}) => {
  const textSize =
    typeof fontSize === "number"
      ? fontSize
      : parseInt(fontSize.replace("px", ""));
  return (
    <Text
      style={[
        styles.heading,
        { fontWeight, color, textAlign, textTransform, fontSize: textSize },
        {
          padding: p,
          paddingTop: pt,
          paddingRight: pr,
          paddingBottom: pb,
          paddingLeft: pl,
          paddingHorizontal: px,
          paddingVertical: py,
        },
        {
          margin: m,
          marginTop: mt,
          marginRight: mr,
          marginBottom: mb,
          marginLeft: ml,
          marginHorizontal: mx,
          marginVertical: my,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Heading;
