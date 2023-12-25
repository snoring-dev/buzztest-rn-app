import React from "react";
import { View, StyleSheet, ViewStyle, Animated } from "react-native";

type StyleValue = number | string;

interface SkeletonProps {
  mx?: StyleValue;
  my?: StyleValue;
  px?: StyleValue;
  py?: StyleValue;
  rounded?: number;
  h?: StyleValue;
  w?: StyleValue;
  style?: ViewStyle;
}

const Skeleton: React.FC<SkeletonProps> = ({
  mx,
  my,
  px,
  py,
  rounded,
  h,
  w,
  style,
}) => {
  const animatedValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 200],
  });

  return (
    <View
      style={[
        styles.skeleton,
        {
          marginHorizontal: mx,
          marginVertical: my,
          paddingHorizontal: px,
          paddingVertical: py,
          borderRadius: rounded,
          height: h,
          width: w,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.shine,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#e1e1e1",
    overflow: "hidden",
  },
  shine: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    position: "absolute",
    transform: [{ translateX: -200 }],
  },
});

export default Skeleton;
