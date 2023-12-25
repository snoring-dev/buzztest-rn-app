import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CGULabel, FormContainer } from "./styles";
import Field from "../../../Components/Field";
import RegistrationLayout from "../Layout";
import { RootStackParamList } from "../../../Utils/Pages";
import { ContactDetails as ContactDetailsType } from "../../../Store/Registration/types";
import { ApplicationState } from "../../../Store";
import { Dispatch } from "redux";
import { setContactDetails } from "../../../Store/Registration/actions";
import { connect } from "react-redux";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";

interface ConnectedProps {
  savedContactDetails?: ContactDetailsType | null;
  saveContactDetails: (details: ContactDetailsType) => void;
}

type Props = NativeStackScreenProps<RootStackParamList> & ConnectedProps;

const ContactDetails = ({ navigation, saveContactDetails, savedContactDetails }: Props) => {
  const [countryCode, setCountryCode] = useState('MA');
  const [firstName, setFirstName] = useState(savedContactDetails?.firstName);
  const [lastName, setLastName] = useState(savedContactDetails?.lastName);
  const [email, setEmail] = useState(savedContactDetails?.email);
  const [password, setPassword] = useState(savedContactDetails?.password ?? '');
  const [country, setCountry] = useState(savedContactDetails?.country);
  const [city, setCity] = useState(savedContactDetails?.city);
  const [phone, setPhone] = useState(savedContactDetails?.phone);
  const [showCountryDialog, setShowCountryDialog] = useState(false);
  const pickCountry = (_country: any) => {
    setCountry(_country.name ?? '');
  };

  return (
    <RegistrationLayout
      title="Contact Details"
      buttonText="create account"
      onSubmit={() => {
        const userData: ContactDetailsType = {
          firstName,
          lastName,
          email,
          password,
          country,
          city,
          phone,
        };
        saveContactDetails(userData);
        navigation.navigate("FeedCustomization");
      }}
    >
      <CountryPicker
        containerButtonStyle={{ display: 'none' }}
        countryCode={countryCode as CountryCode}
        onSelect={pickCountry}
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        visible={showCountryDialog}
        onClose={() => setShowCountryDialog(false)}
        onOpen={() => setShowCountryDialog(false)}
      />
      <FormContainer>
        <Field
          label="First Name"
          hint="First Name"
          onTextChange={(val) => setFirstName(val)}
          defaultValue={firstName}
        />
        <Field
          label="Last Name"
          hint="Last Name"
          onTextChange={(val) => setLastName(val)}
          defaultValue={lastName}
        />
        <Field
          label="Email contact"
          hint="example@mail.com"
          onTextChange={(val) => setEmail(val)}
          defaultValue={email}
        />
        <Field
          label="Password"
          hint="create your password"
          onTextChange={(val) => setPassword(val)}
          defaultValue={password}
          isPassword
        />
        <Field
          label="Phone number"
          hint="Your phone number"
          onTextChange={(val) => setPhone(val)}
          defaultValue={phone}
        />
        <Field
          label="Country"
          hint="Country"
          defaultValue={country}
          disabled
          onClick={() => setShowCountryDialog(true)}
        />
        <Field
          label="State, region or province"
          hint="State, region or province"
          onTextChange={(val) => setCity(val)}
          defaultValue={city}
        />
        <CGULabel>
          quam tranquillis in rebus diutius rexit, ex agrestibus habitaculis
          urbes construxit multis opibus firmas et viribus, quarum ad praesens
          pleraeque licet Graecis nominibus appellentur
        </CGULabel>
      </FormContainer>
    </RegistrationLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  savedContactDetails: state.registration.contact,
});

const mappedActions = {
  saveContactDetails: (details: ContactDetailsType) => (dispatch: Dispatch) => {
    dispatch(setContactDetails(details));
  },
};

export default connect(mapStateToProps, mappedActions)(ContactDetails);
