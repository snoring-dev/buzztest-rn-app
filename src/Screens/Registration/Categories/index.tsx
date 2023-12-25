import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { without } from "ramda";
import {
  HeadingLabel,
  FormContainer,
  SelectItemContainer,
  SelectIcon,
  SelectLabel,
  CategoriesList,
} from "./styles";
import RegistrationLayout from "../Layout";
import PinIcon from "../../../Svg/pin.svg";
import PinIconHover from "../../../Svg/pinned.svg";
import { Category } from "../../../Store/Registration/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../Utils/Pages";
import { ApplicationState } from "../../../Store";
import { Dispatch } from "redux";
import { setSelectedCategories } from "../../../Store/Registration/actions";
import { connect } from "react-redux";

interface ConnectedProps {
  saveSelectedCategories: (catSelection: Category[]) => void;
  allCategories: Category[];
  categorySelection: Category[];
}

type Props = NativeStackScreenProps<RootStackParamList> & ConnectedProps;

const Categories = ({
  allCategories = [],
  categorySelection = [],
  saveSelectedCategories,
  navigation,
}: Props) => {
  const [categories] = useState<Category[]>(allCategories);
  const [selectedCat, setSelectedCat] = useState<Category[]>(categorySelection);

  const checkIfSelected = (cat: Category) =>
    selectedCat.findIndex((c: Category) => c.value === cat.value) !== -1;

  const onSelectCategory = (cat: Category) => {
    let newSelection: Category[];
    if (checkIfSelected(cat)) {
      // remove it
      newSelection = without([cat], selectedCat);
    } else {
      // add it
      newSelection = [...selectedCat, cat];
    }

    setSelectedCat(newSelection);
  };

  const saveCurrentSelection = () => {
    saveSelectedCategories(selectedCat);
    navigation.navigate("FeedCustomization");
  };

  return (
    <RegistrationLayout
      titleWidth={200}
      title="Select Categories"
      buttonText="Let's do this"
      onSubmit={saveCurrentSelection}
    >
      <FormContainer>
        <HeadingLabel>
          quam tranquillis in rebus diutius rexit, ex agrestibus habitaculis
          urbes construxit multis opibus firmas et viribus, quarum ad praesens
          pleraeque licet Graecis nominibus appellentur
        </HeadingLabel>
        <CategoriesList>
          {categories.map((cat, index) => (
            <TouchableOpacity key={index} onPress={() => onSelectCategory(cat)}>
              <SelectItemContainer>
                <SelectIcon>
                  {checkIfSelected(cat) ? <PinIconHover /> : <PinIcon />}
                </SelectIcon>
                <SelectLabel isSelected={checkIfSelected(cat)}>
                  {cat.label}
                </SelectLabel>
              </SelectItemContainer>
            </TouchableOpacity>
          ))}
        </CategoriesList>
      </FormContainer>
    </RegistrationLayout>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  allCategories: state.registration?.categories ?? [],
  categorySelection: state.registration.feed?.selectedCategories ?? [],
});

const mappedActions = {
  saveSelectedCategories: (selection: Category[]) => (dispatch: Dispatch) => {
    dispatch(setSelectedCategories(selection));
  },
};

export default connect(mapStateToProps, mappedActions)(Categories);
