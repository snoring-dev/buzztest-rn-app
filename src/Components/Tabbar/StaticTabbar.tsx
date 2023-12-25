import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import { Menu, MenuIcon } from "../../Store/Menu/types";
import * as Colors from "../../Utils/Colors";
import { findIndex, propEq } from "ramda";
import { useNavigation } from "@react-navigation/native";
import { Pages } from "../../Utils/Pages";

const { width } = Dimensions.get("window");

interface StaticTabbarProps {
  menus: Menu[];
  value: Animated.Value;
  selectedId: number;
  selectMenu: (menu: Menu) => void;
}

const StaticTabbar = ({
  value,
  menus,
  selectedId = 0,
  selectMenu = () => {},
}: StaticTabbarProps): React.ReactElement => {
  const nav = useNavigation();
  const values: Animated.Value[] = menus.map(
    (tab, index) => new Animated.Value(index === 0 ? 1 : 0)
  );
  const defaultIndex = findIndex(propEq("id", selectedId))(menus);
  const [activeIndex, setActiveIndex] = React.useState(
    defaultIndex != -1 ? defaultIndex : 0
  );
  const onPress = (index: number, clickedMenu: Menu) => {
    setActiveIndex(index);
    selectMenu(clickedMenu);
    const tabWidth = width / menus.length;
    Animated.sequence([
      Animated.parallel(
        values.map((v) =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          })
        )
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    switch(clickedMenu.name) {
      case "YOU":
        nav.navigate(Pages.UserProfile);
        break;
      case "POSTS":
        nav.navigate(Pages.BrandListing);
        break;
    }
  };

  const initAnimation = (index: number) => {
    const tabWidth = width / menus.length;
    Animated.sequence([
      Animated.parallel(
        values.map((v) =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          })
        )
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const resolveIcons = (icon: MenuIcon, hover: boolean = false) => {
    const { color, hoverColor, lib, name } = icon;
    switch (lib) {
      case "Ionicons": {
        return (
          <Ionicons name={name} color={hover ? hoverColor : color} size={25} />
        );
      }
      case "FontAwesome": {
        return (
          <FontAwesome
            name={name}
            color={hover ? hoverColor : color}
            size={25}
          />
        );
      }
      case "Feather": {
        return (
          <Feather name={name} color={hover ? hoverColor : color} size={25} />
        );
      }
    }
  };

  initAnimation(activeIndex);

  return (
    <View style={styles.container}>
      {menus.map((tab, key) => {
        const tabWidth = width / menus.length;
        const cursor = tabWidth * key;
        const opacity = value.interpolate({
          inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
          outputRange: [1, 0, 1],
          extrapolate: "clamp",
        });
        const translateY = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [64, 0],
          extrapolate: "clamp",
        });
        const opacity1 = values[key].interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        });
        return (
          <React.Fragment {...{ key }}>
            <TouchableWithoutFeedback onPress={() => onPress(key, tab)}>
              <View style={styles.tabEntry}>
                <Animated.View style={[styles.tab, { opacity }]}>
                  {resolveIcons(tab.icon, activeIndex === key)}
                </Animated.View>
                <Text
                  style={{
                    fontSize: 12,
                    color:
                      activeIndex === key
                        ? Colors.razzleDazzleRose
                        : Colors.silver,
                  }}
                >
                  {tab.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={{
                position: "absolute",
                top: -8,
                left: tabWidth * key,
                width: tabWidth,
                height: 64,
                justifyContent: "center",
                alignItems: "center",
                opacity: opacity1,
                transform: [{ translateY }],
              }}
            >
              <View style={styles.activeIcon}>
                {resolveIcons(tab.icon, true)}
              </View>
            </Animated.View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tabEntry: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    marginTop: 10,
    marginBottom: 10,
  },
  activeIcon: {
    backgroundColor: "white",
    width: 55,
    height: 55,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -19,
  },
});

export default StaticTabbar;
