import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  BrandContainer,
  BudgetContainer,
  GalleryContainer,
  GalleryEntry,
  GalleryImg,
  GalleryList,
  Heading,
  MultiList,
} from "./styles";
import { BrandPicture } from "../BrandListItem/styles";
import TextList from "../TextList";
import * as Colors from "../../Utils/Colors";
import SocialNeeds from "../SocialNeeds";
import ButtonWithIcon from "../Button/WithIcon";
import { Dimensions } from "react-native";
import { HStack, Stack, Text, View, VStack } from "../../../ui";
import { nanoId } from "../../Utils";
import Filler from "../Filler";

const { height } = Dimensions.get("window");

const pic =
  "https://www.loreal.com/-/media/project/loreal/brand-sites/corp/master/lcorp/4-brands/consumer-products-division/garnier/tryptique-one-garnier.jpg?cx=0&cy=0&cw=330&ch=330&blr=False&hash=56A2E060DD1912B4137D50041EA815D3";

interface Props {
  picture: string;
  title: string;
  description: string;
}

const ContentLine = (props: any): React.ReactElement => {
  const { title, entries } = props;
  return (
    <HStack mt="5px" mb="5px" alignItems="center" alignContent="center">
      <View w="50%">
        <Text color={Colors.gray}>{title}</Text>
      </View>
      <HStack alignItems="center" alignContent="center" w="50%">
        {entries.length > 0 &&
          entries.map((label: string) => (
            <View
              mr="8px"
              backgroundColor={Colors.tutu}
              pl={8} pr={8}
              pt="2px" mb="2px"
              borderRadius={10}
              key={nanoId()}
            >
              <Text
                textTransform="uppercase"
                fontWeight="semibold"
                fontSize={10}
                color={Colors.razzleDazzleRose}
              >
                {label}
              </Text>
            </View>
          ))}
      </HStack>
    </HStack>
  );
};

const TheBrand = () => {
  const list1 = {
    title: "Critères de réussite de votre campagne",
    items: [
      {
        text: "Un reach élevé et une notoriété de mon produit",
      },
    ],
  };

  return (
    <BrandContainer height={height}>
      <BrandPicture source={{ uri: pic }} resizeMode="cover" />
      <Heading>Fast bright de garnier</Heading>
      <Stack bgColor={Colors.frostedMint} py="10px" px="15px" mb="10px">
        {/* title */}
        <HStack alignItems="center" alignContent="center">
          <View
            bgColor={Colors.razzleDazzleRose}
            w="10px"
            h="10px"
            borderRadius={100}
          />
          <Text
            ml="8px"
            textTransform="uppercase"
            fontSize="14px"
            fontWeight="semibold"
            color="black"
          >
            description de l'influenceur
          </Text>
        </HStack>
        {/* content */}
        <VStack my="10px" alignItems="center" alignContent="center">
          <ContentLine key="sex" title="Sexe" entries={["homme", "femme"]} />
          <ContentLine key="age" title="Age" entries={["18-80"]} />
          <ContentLine
            key="social-media"
            title="Réseau social"
            entries={["instagram", "tiktok"]}
          />
          <ContentLine
            key="following"
            title="Nombre d'influence"
            entries={["250", "250"]}
          />
          <ContentLine
            key="followers"
            title="Nombre de followers"
            entries={["1M", "234K"]}
          />
        </VStack>
      </Stack>
      <Stack bgColor={Colors.frostedMint} py="10px" px="15px" mb="10px">
        {/* title */}
        <HStack alignItems="center" alignContent="center">
          <View
            bgColor={Colors.razzleDazzleRose}
            w="10px"
            h="10px"
            borderRadius={100}
          />
          <Text
            ml="8px"
            textTransform="uppercase"
            fontSize="14px"
            fontWeight="semibold"
            color="black"
          >
            audience de l'influenceur
          </Text>
        </HStack>
        {/* content */}
        <VStack my="10px" alignItems="center" alignContent="center">
          <ContentLine
            key="sex-target"
            title="Sexe"
            entries={["homme", "femme"]}
          />
          <ContentLine
            key="age-target"
            title="Tranche d'age"
            entries={["18-80"]}
          />
          <ContentLine
            key="location-target"
            title="localisation"
            entries={["maroc"]}
          />
        </VStack>
      </Stack>
      <Stack py="10px" px="25px" mb="10px">
        <View>
          <Text
            color="black"
            fontWeight="bold"
            fontSize="14px"
            textTransform="uppercase"
          >
            marque
          </Text>
        </View>
        <View my="8px">
          <Text textAlign="justify" fontSize="13px" color={Colors.gray}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            itaque quibusdam. Labore velit at fugiat vero deleniti nobis ipsam
            accusamus laborum eveniet harum. Obcaecati, consectetur cum sed
            blanditiis inventore quod.
          </Text>
        </View>
      </Stack>
      <MultiList bgColor={Colors.tutu}>
        <TextList {...list1} />
        <TextList {...list1} />
        <TextList {...list1} />
        <TextList {...list1} />
      </MultiList>
      <SocialNeeds
        title="Social Netwrok"
        name="instagram"
        bgColor={Colors.alabaster}
        requirements={[]}
      />
      <ButtonWithIcon
        text="Conducteur de script"
        icon={() => (
          <Feather name="arrow-down-circle" size={24} color="white" />
        )}
      />
      <GalleryContainer>
        <GalleryList>
          <GalleryEntry>
            <GalleryImg
              source={{
                uri: "https://res.cloudinary.com/deemy0vbo/image/upload/v1656751573/51qzsszHduL._AC__q7ct3t.jpg",
              }}
            />
          </GalleryEntry>
          <GalleryEntry>
            <GalleryImg
              source={{
                uri: "https://res.cloudinary.com/deemy0vbo/image/upload/v1656751679/2022-01_garnier_brand-treatment_100-foreground_hero_new-garnier-vitamin-c-micellar-water.dam.ts_1646396783419_lm8v7y.jpg",
              }}
            />
          </GalleryEntry>
          <GalleryEntry>
            <GalleryImg
              source={{
                uri: "https://res.cloudinary.com/deemy0vbo/image/upload/v1656751686/Garnier-cruelty-free-certification_jdw2pd.jpg",
              }}
            />
          </GalleryEntry>
        </GalleryList>
        <GalleryList>
          <GalleryEntry>
            <GalleryImg
              source={{
                uri: "https://res.cloudinary.com/abillionveg/image/upload/f_auto,q_auto,w_480/v1612228262/ql0darii8hrxqygyuxnd.jpg",
              }}
            />
          </GalleryEntry>
          <GalleryEntry>
            <GalleryImg
              source={{
                uri: "https://www.maicao.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw0ca40f3c/images/large/292817-5-garnier-hair-food-banana-mascarilla-de-reparacion-1-minuto-350-ml.jpg?sw=1000&sh=1000",
              }}
            />
          </GalleryEntry>
        </GalleryList>
        <GalleryList>
          <GalleryEntry>
            <GalleryImg
              source={{
                uri: "https://i0.wp.com/www.silkeblogs.com/wp-content/uploads/2020/05/DSC_1153.jpg?resize=1500%2C1000&ssl=1",
              }}
            />
          </GalleryEntry>
        </GalleryList>
      </GalleryContainer>
      <BudgetContainer>
        <HStack alignItems="center" alignContent="center">
          <View
            bgColor={Colors.razzleDazzleRose}
            w="7px"
            h="7px"
            borderRadius={100}
          />
          <Text
            ml="8px"
            textTransform="uppercase"
            fontSize="12px"
            fontWeight="medium"
            color="black"
          >
            budget
          </Text>
        </HStack>
      </BudgetContainer>
      <Filler />
    </BrandContainer>
  );
};

export default TheBrand;
