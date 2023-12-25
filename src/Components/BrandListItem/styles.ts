import styled from "styled-components/native";
import * as Colors from "../../Utils/Colors";

export const BrandName = styled.Text`
  font-size: 16px;
  color: black;
  text-transform: uppercase;
  text-align: left;
`;

export const BrandDescription = styled.Text`
  font-size: 12px;
  color: ${Colors.silver};
  text-align: justify;
  padding-top: 5px;
  padding-right: 20px;
`;

export const BrandPicture = styled.ImageBackground`
    width: 100%;
    height: 175px;
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 15px;
`;

export const LikeIcon = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const Brand = styled.View`
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 35px;
`;

export const BrandButton = styled.View`
    margin-top: 20px;
    width: 125px;
`;
