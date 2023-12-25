import React, { useState } from "react";
import SwitchToggle from "react-native-switch-toggle";
import DateTimePicker from "@react-native-community/datetimepicker";
import format from "date-fns/format";
import { Platform } from "react-native";
import formatISO from "date-fns/formatISO";
import Field from "../../../Components/Field";
import RegistrationLayout from "../Layout";
import { FormContainer, SwitchContainer, SwitchLabel } from "./styled";
import * as Colors from "../../../Utils/Colors";
import Select from "../../../Components/Select";
import { useOverlayedClosing, useSelectClosing } from "../../../Utils/Hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../Utils/Pages";
import {
  ContactDetails,
  RegistrationData,
  UserFeed,
} from "../../../Store/Registration/types";
import { ApplicationState } from "../../../Store";
import { Dispatch } from "redux";
import {
  setFeedSettings,
  setLoading,
  setLoadingFailure,
  setLoadingSuccess,
} from "../../../Store/Registration/actions";
import { connect } from "react-redux";
import { saveUser } from "../../../Store/Registration/services";
import Overlayed from "../../../Components/Overlayed";

interface ConnectedProps {
  savedSettings: UserFeed | null;
  details: ContactDetails | null;
  isLoading: boolean;
  saveSettings: (settings: UserFeed) => void;
  saveUserData: (
    options: UserFeed | null,
    userDetails: ContactDetails | null,
    callback: () => void
  ) => void;
}

type Props = NativeStackScreenProps<RootStackParamList> & ConnectedProps;

const Feed = ({
  navigation,
  savedSettings,
  details,
  isLoading,
  saveUserData,
  saveSettings,
}: Props) => {
  const [isAgePickerVisible, setAgePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const toggleSwitch = () =>
    setReceiveUpdates((previousState) => !previousState);
  const [age, setAge] = useState("");

  const [gender, setGender] = useState(savedSettings?.gender);
  const [receiveUpdates, setReceiveUpdates] = useState(
    savedSettings?.receiveUpdates ?? false
  );
  const [genderSelectionVisibility, setGenderSelectionVisibility] =
    useState(false);

  const getUserGender = () => {
    switch (gender) {
      case "F":
        return "Female";
      case "M":
        return "Male";
      default:
        return "";
    }
  };

  const submitSettings = () => {
    const settings: UserFeed = {
      age: formatISO(date),
      gender,
      receiveUpdates,
    };
    saveSettings(settings);
    saveUserData({ ...savedSettings, ...settings }, details, () =>
      navigation.navigate("SuccessRegistration")
    );
  };

  const getSelectedGender = () => {
    switch (gender) {
      case "F":
        return { label: "Female", value: "F" };
      case "M":
        return { label: "Male", value: "M" };
      default:
        return null;
    }
  };

  useSelectClosing(() => setGenderSelectionVisibility(false));
  useOverlayedClosing(() => setAgePickerVisible(false));

  const onDateSelected = (event: any, value: any) => {
    setDate(value);
    setAge(format(value, "dd/MM/yyyy"));
  };

  return (
    <RegistrationLayout
      title="Personalize Your feed"
      titleWidth={150}
      buttonText="done"
      bgColor="white"
      onSubmit={submitSettings}
    >
      <Overlayed visible={isAgePickerVisible}>
        <DateTimePicker
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: 320,
            height: 260,
            display: "flex",
          }}
          value={date}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onDateSelected}
        />
      </Overlayed>

      <FormContainer>
        <Field
          label="Your birthday"
          hint="DD/MM/YYYY"
          defaultValue={age}
          disabled
          onClick={() => setAgePickerVisible(mState => !mState)}
        />
        <Field
          disabled
          hint="Gender"
          defaultValue={getUserGender()}
          onClick={() => setGenderSelectionVisibility(true)}
        />
        <Select
          selectedValue={getSelectedGender()}
          onChange={(val) => setGender(String(val))}
          title="Select your gender"
          options={[
            { label: "Female", value: "F" },
            { label: "Male", value: "M" },
          ]}
          visible={genderSelectionVisibility}
        />
        <Field
          onClick={() => navigation.navigate("CategoriesSelection")}
          hint="Categories you like"
          defaultValue={
            (savedSettings?.selectedCategories?.length ?? [].length) > 0
              ? `${
                  savedSettings?.selectedCategories?.length ?? 0
                } selected categories`
              : ""
          }
          disabled
        />
        <SwitchContainer>
          <SwitchToggle
            switchOn={receiveUpdates}
            onPress={toggleSwitch}
            circleColorOff={Colors.white}
            circleColorOn={Colors.white}
            backgroundColorOn={Colors.lightGray}
            backgroundColorOff={Colors.lightGray}
            buttonContainerStyle={{
              borderRadius: 100,
              width: 11,
              height: 11,
              backgroundColor: Colors.razzleDazzleRose,
              alignSelf: "center",
              marginTop: 4,
            }}
            containerStyle={{
              width: 41,
              height: 18,
              borderRadius: 100,
            }}
            circleStyle={{
              width: 21,
              height: 21,
              borderRadius: 100,
              borderColor: "#D1D1D1",
              borderWidth: 1,
            }}
          />
          <SwitchLabel>Receive updates from Buzztest</SwitchLabel>
        </SwitchContainer>
      </FormContainer>
    </RegistrationLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    savedSettings: state.registration.feed,
    details: state.registration.contact,
    isLoading: state.registration.isLoading,
  };
};

const mappedActions = {
  saveSettings: (settings: UserFeed) => (dispatch: Dispatch) => {
    dispatch(setFeedSettings(settings));
  },
  saveUserData:
    (
      sets: UserFeed | null,
      data: ContactDetails | null,
      callback: () => void
    ) =>
    async (dispatch: Dispatch) => {
      try {
        dispatch(setLoading(true));
        const wholeData: RegistrationData = {
          birthDate: sets?.age ?? "",
          city: { name: data?.city ?? "" },
          categories: JSON.stringify(sets?.selectedCategories ?? []),
          email: data?.email ?? "",
          firstName: data?.firstName ?? "",
          lastName: data?.lastName ?? "",
          plainPassword: data?.password ?? "",
          phone: data?.phone ?? "",
          gender: sets?.gender ?? "",
          username: `${data?.firstName}.${data?.lastName}`.toLowerCase(),
        };
        const result = await saveUser(wholeData);
        if (result !== null) {
          dispatch(
            setLoadingSuccess({
              status: true,
              message: "user created with success!",
            })
          );
          callback();
        }
      } catch (e: any) {
        dispatch(
          setLoadingFailure({
            status: false,
            message: `${e.name}: ${e.message}`,
          })
        );
      }
    },
};

export default connect(mapStateToProps, mappedActions)(Feed);
