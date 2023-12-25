import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import { lightWhite } from "../../Utils/Colors";

export const TopBarContainer = styled.View`
    height: 110px;
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 0px;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
`;

export const MainContentView = styled.View<{hasBottomMenu: boolean}>`
    background-color: ${lightWhite};
    width: 100%;
    height: ${() => `${Dimensions.get("screen").height}px`};
    position: absolute;
    top: 0px;
`;

export const TabbarContainer = styled.View`
    width: 100%;
    position: absolute;
    bottom: 0px;
`;

export const LogoSection = styled.View`
    width: 40%;
    height: 70%;
    justify-content: center;
    padding-left: 10px;
`;

export const MenuIconSection = styled.View`
    width: 60%;
    height: 70%;
    justify-content: center;
    align-items: flex-end;
    padding-right: 10px;
`;