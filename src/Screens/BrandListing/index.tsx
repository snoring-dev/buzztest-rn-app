import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Center,
  HStack,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "../../../ui";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Ionicons } from "@expo/vector-icons";
import { FailureState } from "../../../types";
import BrandListItem from "../../Components/BrandListItem";
import BrandLoading from "../../Components/BrandLoading";
import Filler from "../../Components/Filler";
import MainLayout from "../../Components/MainLayout";
import { ApplicationState } from "../../Store";
import {
  setBrandsData,
  setBrandsFailed,
  setBrandsLoading,
} from "../../Store/Brands/actions";
import { getAllBrands } from "../../Store/Brands/services";
import { Brand } from "../../Store/Brands/types";
import { nanoId } from "../../Utils";
import { razzleDazzleRose, silver, white } from "../../Utils/Colors";
import { Pages, RootStackParamList } from "../../Utils/Pages";

interface OwnProps {
  brands: Brand[];
  isLoading: boolean;
  failure: FailureState;
  fetchBrands: any;
}

type Props = OwnProps & NativeStackScreenProps<RootStackParamList>;

const BrandListing = ({
  navigation,
  brands = [],
  isLoading,
  failure,
  fetchBrands = () => {},
}: Props) => {
  const [filtredCards, setFiltredCards] = useState<Brand[]>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => setFiltredCards(brands), [brands]);

  useEffect(() => {
    const chunk = brands.filter((b: Brand) =>
      b.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFiltredCards(chunk);
  }, [keyword]);

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <MainLayout>
      <Center>
        <HStack pl="35px" pr="35px" pt="15px">
          <HStack
            w="30%"
            h="35px"
            justifyContent="center"
            alignItems="center"
            borderRadius={100}
          >
            <Ionicons name="ios-filter" size={18} color={razzleDazzleRose} />
            <Text
              pl="6px"
              fontWeight="medium"
              fontSize={14}
              color={razzleDazzleRose}
            >
              Filters
            </Text>
          </HStack>
          <VStack
            w="70%"
            bgColor={white}
            h="35px"
            ml="10px"
            justifyContent="center"
            alignItems="center"
            borderRadius={100}
          >
            <Input
              placeholder="Rechercher des tests"
              placeholderTextColor={silver}
              bgColor="transparent"
              borderWidth={0}
              onChangeText={(value) => setKeyword(value)}
              InputRightElement={
                <View
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor={razzleDazzleRose}
                  pl="10px"
                  pr="10px"
                  h="100%"
                  borderRightRadius={100}
                >
                  <Ionicons name="ios-search" size={20} color="white" />
                </View>
              }
            />
          </VStack>
        </HStack>
      </Center>

      <ScrollView p="15px" position="absolute" top={60} bottom={0}>
        {isLoading && [0, 0, 0].map((_) => <BrandLoading key={nanoId()} />)}
        {!isLoading &&
          filtredCards.length > 0 &&
          filtredCards?.map((b: Brand) => (
            <BrandListItem
              key={b.id}
              onClick={() =>
                navigation.navigate(Pages.SingleBrand, { brandId: b.id })
              }
              pictureUrl={b.cover}
              name={b.name}
              description={b.description}
            />
          ))}
        <Filler />
      </ScrollView>
    </MainLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  brands: state.brands.data ?? [],
  isLoading: state.brands.isLoading,
  failure: state.brands.failure,
});

const mapDispatchToProps = {
  fetchBrands: (successCallback?: () => void) => async (dispatch: Dispatch) => {
    try {
      dispatch(setBrandsLoading(true));
      const data = await getAllBrands();
      dispatch(setBrandsData(data.length > 0 ? data : []));
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

export default connect(mapStateToProps, mapDispatchToProps)(BrandListing);
