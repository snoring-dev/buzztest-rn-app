import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import GirlIcon from "../../../Svg/newsletter.svg";
import {
  ButtonContainer,
  Container,
  GirlIconContainer,
  RectView,
  TriangleView,
} from "./styles";
import * as Colors from "../../../Utils/Colors";
import Button from "../../../Components/Button";
import RelativeTitle from "../../../Components/RelativeTitle";
import Triangle from "../../../Svg/layout_triangle.svg";
import RoundedRect from "../../../Svg/layout_rectangle_rounded.svg";
import { useKeyboardListener } from "../../../Utils/Hooks";

interface Props {
  title?: string;
  titleWidth?: number;
  buttonText?: string;
  children: JSX.Element[] | JSX.Element;
  bgColor?: string;
  onSubmit?: () => void;
  empty?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const RegistrationLayout = ({
  title,
  titleWidth = 120,
  buttonText = "",
  children,
  bgColor = Colors.alabaster,
  empty = false,
  isLoading = false,
  loadingText = '',
  ...props
}: Props) => {
  const isKeyboardVisible = useKeyboardListener();
  const [upperAnimation, setUpperAnimation] = useState(new Animated.Value(0));
  const [lowerAnimation, setLowerAnimation] = useState(new Animated.Value(100));

  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: lowerAnimation,
        },
      ],
    },
    upper: {
      transform: [
        {
          translateY: upperAnimation,
        },
      ],
    },
  };

  useEffect(() => {
    if (isKeyboardVisible) {
      Animated.timing(upperAnimation, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(lowerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isKeyboardVisible]);

  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: bgColor, flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <Container>
          <TriangleView>
            <Triangle />
          </TriangleView>
          <RectView>
            <RoundedRect />
          </RectView>
          {!empty && (
            <>
              <RelativeTitle width={titleWidth} text={title ?? ""} />
              <GirlIconContainer>
                <GirlIcon />
              </GirlIconContainer>
              {children}
              <ButtonContainer>
                <Animated.View
                  style={
                    isKeyboardVisible
                      ? animatedStyles.upper
                      : animatedStyles.lower
                  }
                >
                  <Button
                    backgroundColor={Colors.razzleDazzleRose}
                    text={buttonText}
                    textColor={Colors.white}
                    onClick={props.onSubmit}
                    isLoading={isLoading}
                    loadingText={loadingText}
                  />
                </Animated.View>
              </ButtonContainer>
            </>
          )}
          {empty && <>{children}</>}
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationLayout;
