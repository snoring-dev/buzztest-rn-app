import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Field from "../../../Components/Field";
import RegistrationLayout from "../Layout";
import { Pages, RootStackParamList } from "../../../Utils/Pages";
import { ApplicationState } from "../../../Store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { FormContainer } from "../ContactDetails/styles";
import {
  setAuthenticationFailed,
  setAuthLoading,
  setSessionCookie,
} from "../../../Store/Auth/acions";
import { executeAuth } from "../../../Store/Auth/services";
import { FailureState } from "../../../../types";
import { saveKey } from "../../../Utils";
import { Constants } from "../../../Utils/Constants";
import Link from "../../../Components/Link";
import ErrorMessage from "../../../Components/ErrorMessage";

interface ConnectedProps {
  cookie: string;
  isLoading: boolean;
  failure: FailureState;
  signIn: (email: string, password: string) => any;
}

type Props = NativeStackScreenProps<RootStackParamList> & ConnectedProps;

const Login = ({ navigation, cookie, isLoading, failure, signIn }: Props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <RegistrationLayout
      title="Login"
      buttonText="Sign In"
      isLoading={isLoading}
      loadingText={"Connecting you..."}
      onSubmit={() => {
        signIn(email, password, () =>
          navigation.navigate('Home', { screen: 'BrandListing' })
        );
      }}
    >
      <FormContainer>
        {failure.status && (
          <ErrorMessage
            title="Something went wrong"
            message={failure.message ?? "Bad email or password!"}
          />
        )}
        <Field
          label="Email"
          hint="Email"
          onTextChange={(val) => setEmail(val)}
          defaultValue={email}
        />
        <Field
          label="Password"
          hint="Password"
          onTextChange={(val) => setPassword(val)}
          defaultValue={password}
          isPassword
        />
        <Link
          onClick={() => navigation.navigate(Pages.ContactDetails)}
          value="Don't have an account yet? Sign Up"
        />
      </FormContainer>
    </RegistrationLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  cookie: state.auth.cookieSession,
  isLoading: state.auth.isLoading,
  failure: state.auth.failure,
});

const mappedActions = {
  signIn:
    (email: string, password: string, successCallback: () => void) =>
    async (dispatch: Dispatch) => {
      dispatch(setAuthLoading(true));
      try {
        const resp = await executeAuth(email, password);
        const cookieSession = resp.headers["set-cookie"][0].split(";")[0];
        await saveKey(Constants.SESSION_TOKEN, cookieSession);
        // const profileResp = await getUserInfo();
        dispatch(setSessionCookie(cookieSession));
        // dispatch(setProfileData(profileResp));
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

export default connect(mapStateToProps, mappedActions)(Login);
