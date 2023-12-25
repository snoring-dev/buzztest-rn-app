import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Animated,
} from "react-native";
import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

import StaticTabbar from "./StaticTabbar";
import { Menu } from "../../Store/Menu/types";

const backgroundColor = "white";

interface TabbarProps {
  menus: Menu[];
  selectedId: number;
  onMenuSelected: any;
}

const Tabbar = (props: TabbarProps): React.ReactElement => {
  const { menus, selectedId, onMenuSelected } = props;
  const value = new Animated.Value(0);
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const { width } = Dimensions.get("window");
  const height = 70;
  const iconHeight = 40;
  const tabWidth = width / menus.length;
  const backgroundColor = "white";
  const [x0, x1, x2] = [13, 13, 30];
  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width, 0],
  });

  const getPath = (): string => {
    const left = shape
      .line()
      .x((d) => d.x)
      .y((d) => d.y)([
      { x: 0, y: 0 },
      { x: width, y: 0 },
    ]);
    const tab = shape
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(shape.curveBasis)([
      { x: width, y: 0 },
      { x: width + x0, y: 0 },
      { x: width + x1, y: 10 },
      { x: width + x2, y: iconHeight },
      { x: width + tabWidth - x2, y: iconHeight },
      { x: width + tabWidth - x1, y: 10 },
      { x: width + tabWidth - x0, y: 0 },
      { x: width + tabWidth, y: 0 },
    ]);
    const right = shape
      .line()
      .x((d) => d.x)
      .y((d) => d.y)([
      { x: width + tabWidth, y: 0 },
      { x: width * 2, y: 0 },
      { x: width * 2, y: height },
      { x: 0, y: height },
      { x: 0, y: 0 },
    ]);
    return `${left} ${tab} ${right}`;
  };
  const d = getPath();

  return (
    <>
      <View {...{ height, width }}>
        <AnimatedSvg
          width={width * 2}
          {...{ height }}
          style={{ transform: [{ translateX }] }}
        >
          <Path fill={backgroundColor} {...{ d }} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticTabbar
            selectMenu={onMenuSelected}
            selectedId={selectedId}
            menus={menus}
            value={value}
          />
        </View>
      </View>
      <SafeAreaView style={styles.container} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor,
  },
});

export default Tabbar;
