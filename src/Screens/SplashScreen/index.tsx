import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Container } from "./styles";
import BuzzTestLogo from "../../Svg/splash_icon_buzz.svg";
import { useEffectOnce } from "../../Utils/Hooks";
import { TouchableOpacity } from "react-native";
import { Pages, RootStackParamList } from "../../Utils/Pages";
import { Dispatch } from "redux";
import { getAllCategories } from "../../Store/Registration/services";
import { setCategories, setLoading, setLoadingFailure } from "../../Store/Registration/actions";
import { connect } from "react-redux";
import { setMenuList } from "../../Store/Menu/actions";
import { ListOfMenus } from "../../Components/Tabbar/MenuResolver";

interface ConnectedProps {
  findAllCategories: () => void;
  initTabbar: () => void;
}

type Props = NativeStackScreenProps<RootStackParamList> & ConnectedProps;

const SplashScreen = ({ navigation, findAllCategories, initTabbar }: Props) => {
  useEffectOnce(() => {
    initTabbar();
    findAllCategories();
    setTimeout(() => navigation.navigate(Pages.Login), 1000);
  });
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <BuzzTestLogo />
      </TouchableOpacity>
    </Container>
  );
};

const mappedActions = {
  findAllCategories: () => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const allCats = await getAllCategories();
      dispatch(setCategories(allCats));
      dispatch(setLoading(false));
    } catch (e: any) {
      dispatch(setLoading(false));
      setLoadingFailure({ status: false, message: `${e.name}: ${e.message}`});
    }
  },
  initTabbar: () => (dispatch: Dispatch) => {
    dispatch(setMenuList(ListOfMenus));
  },
}

export default connect(() => ({}), mappedActions)(SplashScreen);
