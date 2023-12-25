import { ScrollView } from "../../../ui";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { razzleDazzleRose, silver } from "../../Utils/Colors";

const { width } = Dimensions.get("window");

export default class SlidingTabs extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = (type) => {
    let {
      active,
      xTabOne,
      xTabTwo,
      translateX,
      translateXTabOne,
      translateXTabTwo,
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    }
  };

  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              marginBottom: 10,
              height: 36,
              position: "relative",
            }}
          >
            <Animated.View
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                top: 0,
                left: 0,
                transform: [
                  {
                    translateX,
                  },
                ],
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
                borderBottomWidth: 1,
                borderColor: active === 0 ? razzleDazzleRose : silver,
                marginLeft: 10,
                marginRight: 10,
              }}
              onLayout={(event) =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({ active: 0 }, () => this.handleSlide(xTabOne))
              }
            >
              <Text
                style={{
                  color: active === 0 ? razzleDazzleRose : silver,
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}
              >
                {this.props.firstTabTitle}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
                borderBottomWidth: 1,
                borderColor: active === 1 ? razzleDazzleRose : silver,
                marginLeft: 10,
                marginRight: 10,
              }}
              onLayout={(event) =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                })
              }
              onPress={() =>
                this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))
              }
            >
              <Text
                style={{
                  color: active === 1 ? razzleDazzleRose : silver,
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}
              >
                {this.props.secondTabTitle}
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView w="100%">
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [
                  {
                    translateX: translateXTabOne,
                  },
                ],
              }}
              onLayout={(event) =>
                this.setState({
                  translateY: event.nativeEvent.layout.height,
                })
              }
            >
              {this.props.firstTabContent}
            </Animated.View>

            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [
                  {
                    translateX: translateXTabTwo,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}
            >
              {this.props.secondTabContent}
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
