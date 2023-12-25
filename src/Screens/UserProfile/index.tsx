import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  Octicons,
  Ionicons,
  Entypo,
  FontAwesome,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { FailureState } from "../../../types";
import { Pages, RootStackParamList } from "../../Utils/Pages";
import { ApplicationState } from "../../Store";
import { Profile } from "../../Store/Auth/types";
import {
  setAuthenticationFailed,
  setAuthLoading,
  setProfileData,
} from "../../Store/Auth/acions";
import { getUserInfo } from "../../Store/Auth/services";
import MainLayout from "../../Components/MainLayout";
import { Center } from "../../../ui";
import MenuEntry from "../../Components/MenuEntry";
import { lighten } from "polished";
import { mineShaft } from "../../Utils/Colors";
import MenuHeading from "../../Components/MenuHeading";

interface ConnectedProps {
  cookie: string;
  isLoading: boolean;
  failure: FailureState;
  getProfileData: () => any;
  me: Profile;
}

type Props = NativeStackScreenProps<RootStackParamList> & ConnectedProps;

const UserProfile = ({
  me,
  navigation,
  cookie,
  isLoading,
  failure,
  getProfileData,
}: Props) => {
  return (
    <MainLayout>
      <Center pl="30px" pr="30px" pt="20px">
        <MenuEntry
          onClick={() => navigation.navigate(Pages.Favoris)}
          label="Favoris"
          icon={() => (
            <AntDesign
              name="hearto"
              size={24}
              color={lighten(0.3, mineShaft)}
            />
          )}
        />
        <MenuHeading label="account settings" />
        <MenuEntry
          onClick={() => navigation.navigate(Pages.PersonalDetails)}
          label="Personal Details"
          icon={() => (
            <Feather name="user" size={24} color={lighten(0.3, mineShaft)} />
          )}
        />
        <MenuEntry
          onClick={() => navigation.navigate(Pages.PaymentSetup)}
          label="Payment Setup"
          icon={() => (
            <FontAwesome
              name="credit-card"
              size={24}
              color={lighten(0.3, mineShaft)}
            />
          )}
        />
        <MenuEntry
          onClick={() => navigation.navigate(Pages.PaymentPreferences)}
          label="Payment Prefferences"
          icon={() => (
            <Entypo
              name="sound-mix"
              size={24}
              color={lighten(0.3, mineShaft)}
            />
          )}
        />
        <MenuHeading label="support" width="40%" />
        <MenuEntry
          onClick={() => navigation.navigate(Pages.ContactUs)}
          label="Chat with us"
          icon={() => (
            <Ionicons
              name="ios-chatbox-ellipses-outline"
              size={24}
              color={lighten(0.3, mineShaft)}
            />
          )}
        />
        <MenuEntry
          onClick={() => navigation.navigate(Pages.SuggestFeature)}
          label="Suggest a feature"
          icon={() => (
            <Entypo
              name="attachment"
              size={24}
              color={lighten(0.3, mineShaft)}
            />
          )}
        />
        <MenuEntry
          onClick={() => navigation.navigate(Pages.Faq)}
          label="FAQs"
          icon={() => (
            <Octicons
              name="question"
              size={24}
              color={lighten(0.3, mineShaft)}
            />
          )}
        />
      </Center>
    </MainLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  cookie: state.auth.cookieSession,
  isLoading: state.auth.isLoading,
  failure: state.auth.failure,
  me: state.auth.profile,
});

const mappedActions = {
  getProfileData:
    (successCallback: () => void) => async (dispatch: Dispatch) => {
      dispatch(setAuthLoading(true));
      try {
        const profileResp = await getUserInfo();
        dispatch(setProfileData(profileResp));
        dispatch(setAuthLoading(false));
        if (successCallback) successCallback();
      } catch (e: any) {
        console.log("ERR =>", e);
        dispatch(setAuthLoading(false));
        dispatch(
          setAuthenticationFailed({
            status: true,
            message: e?.data?.error ?? "",
          })
        );
      }
    },
};

export default connect(mapStateToProps, mappedActions)(UserProfile);
