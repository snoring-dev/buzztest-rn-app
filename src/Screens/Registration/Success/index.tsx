import React, { useEffect } from "react";
import RegistrationLayout from "../Layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pages, RootStackParamList } from "../../../Utils/Pages";
import { ApplicationState } from "../../../Store";
import { connect } from "react-redux";
import { GirlIcon, SuccessMessage } from "./styles";
import GirlSvg from "../../../Svg/register_success.svg";
import RoundedShape from "../../../Svg/title_after_shape.svg";

interface ConnectedProps {
  name: string;
}

type Props = NativeStackScreenProps<RootStackParamList> & ConnectedProps;

const SuccessRegistration = ({ navigation, name }: Props) => {
  useEffect(() => {
    setTimeout(
      () => navigation.navigate(Pages.Home, { screen: Pages.BrandListing }),
      2500
    );
  }, []);

  const message = `You're all set \n ${name}`;
  return (
    <RegistrationLayout empty>
      <GirlIcon>
        <GirlSvg />
      </GirlIcon>
      <SuccessMessage>{message}</SuccessMessage>
      <RoundedShape />
    </RegistrationLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  name: state.registration.contact?.firstName ?? "",
});

export default connect(mapStateToProps)(SuccessRegistration);
