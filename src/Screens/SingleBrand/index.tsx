import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { FailureState } from "../../../types";
import AppHeader from "../../Components/AppHeader";
import LoadingView from "../../Components/LoadingView";
import MainLayout from "../../Components/MainLayout";
import TheBrand from "../../Components/TheBrand";
import { ApplicationState } from "../../Store";
import {
  setBrandsFailed,
  setBrandsLoading,
  setCompainDetails,
} from "../../Store/Brands/actions";
import { getCompainDetails } from "../../Store/Brands/services";
import { Brand, CompainDetails } from "../../Store/Brands/types";
import { sleep } from "../../Utils";
import { RootStackParamList } from "../../Utils/Pages";

interface OwnProps {
  brand: CompainDetails;
  brandId: number;
  isLoading: boolean;
  failure: FailureState;
  fetchBrand: any;
}

type Props = OwnProps & NativeStackScreenProps<RootStackParamList>;

const SignleBrand = ({ fetchBrand, brandId, isLoading = false }: Props) => {
  useEffect(() => {
    fetchBrand(brandId);
  }, []);

  if (isLoading) {
    return (<LoadingView />);
  }

  return (
    <MainLayout hasBottomMenu={false}>
      <AppHeader />
      <TheBrand />
    </MainLayout>
  );
};

const mapStateToProps = (state: ApplicationState, ownProps: any) => {
  return {
    brand: state.brands.selectedProduct,
    isLoading: state.brands.isLoading,
    failure: state.brands.failure,
    brandId: ownProps.route.params.brandId,
  };
};

const mapDispatchToProps = {
  fetchBrand:
    (brandId: number, successCallback: () => void) =>
    async (dispatch: Dispatch) => {
      // go fetch the whole product
      try {
        dispatch(setBrandsLoading(true));
        await sleep(3000);
        const resp = await getCompainDetails(brandId);
        dispatch(setCompainDetails(resp));
        dispatch(setBrandsLoading(false));
        if (successCallback) successCallback();
      } catch (e: any) {
        dispatch(setBrandsLoading(false));
        dispatch(
          setBrandsFailed({
            status: false,
            message: "Something went wrong",
          })
        );
      }
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(SignleBrand);
